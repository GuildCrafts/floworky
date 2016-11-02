'use strict';

const VALID_PARAMETERS = [ 'completed', 'title', 'description' ]

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    parent_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  },

  {
    hooks: {
      afterCreate: function(item, options) {
        Audit.create({
          table_name: 'Items',
          field_id: options.id,
          field_name: 'completed',
          old_value: 'n/a',
          new_value: options.new_value,
          field_type: options.field_type,
          user_id: request.user.id
        })
      },
      afterDestroy: function(user, options) {
        user.username = 'Toni'
      },
      afterUpdate: function(user, options) {
        user.username = 'Toni'
      },

    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      filterParameters: params => {
        return new Promise( (resolve, reject) => {
          VALID_PARAMETERS.reduce( (memo, key) => {
           if( params[ key ] === undefined ) {
             reject({})
           }else{
             memo[ key ] = params[ key ]
             resolve( memo )
           }

          }, {} )
        })
      }
    }
  });
  return Item;
};
