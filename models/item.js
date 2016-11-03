'use strict';
const VALID_PARAMETERS = [ 'completed', 'title', 'description' ]
const returnAuditOptions = require('../src/Auditor')

module.exports = function(sequelize, DataTypes) {
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
        // afterCreate: function(item, options) {
        // },
        // afterDestroy: function(user, options) {
        //   user.username = 'Toni'
        // },
        afterUpdate: function(item, options) {
          const Audit = sequelize.models.Audit
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
          console.log(params);
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
