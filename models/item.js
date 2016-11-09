'use strict';

const VALID_PARAMETERS = [ 'completed', 'title', 'description' ]

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    is_root: DataTypes.BOOLEAN,
    parent_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  },
  {
    hooks: {
      afterUpdate: function( item, options ) {
        const getDiff = ( newObject, oldObject ) => {
          //assuming both object have the same keys
          let result = []
          for( let key in newObject ){
            if( newObject[key] !== oldObject[key] ){
              let temp = {
                key: key,
                newValue: newObject[key],
                oldValue: oldObject[key]
              }
              result.push(temp)
            }
          }
          return result
        }
        const diff = getDiff(item.dataValues, item._previousDataValues)

        const Audit = sequelize
        // const Audit = sequelize.models.Audit
        // let {updateType, data_type} = options
        // let auditOptions = returnAuditOptions(updateType,item, data_type)
        // Audit.create(auditOptions[0], {success: true})
        console.log("update success------------------------>", diff );
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
  });
  return Item;
};
