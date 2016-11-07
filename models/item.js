'use strict';
const VALID_PARAMETERS = [ 'completed', 'title', 'description' ]
const returnAuditOptions = require('../src/Auditor')

module.exports = function(sequelize, DataTypes) {
  const Audit = sequelize.models.Audit
  const Item = sequelize.define('Item',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      completed: DataTypes.BOOLEAN,
      parent_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    },



    {
      hooks: {
        afterCreate: function(item, options) {
          let {updateType, data_type} = options
          let auditOptions = returnAuditOptions(updateType, item, data_type)
          Audit.create(auditOptions[0], {success: true})
        },
        afterUpdate: function(item, options) {

          let {updateType, data_type} = options
          let auditOptions = returnAuditOptions(updateType,item, data_type)
          Audit.create(auditOptions[0], {success: true})
        }
      },
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        },

        filterParameters: params => {
          return VALID_PARAMETERS.reduce( (memo, key) => {
            if( params[ key ] !== undefined ) {
              memo[ key ] = params[ key ]
            }

            return memo
          }, {} )
        }
      }
    }
  );

  return Item;
};
