'use strict';
const VALID_PARAMETERS = [ 'completed', 'title', 'description' ]

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
          const Audit = sequelize.import('../models/audit');

          Audit.create({
            table_name: 'Items',
            field_id: options.where.id,
            field_name: 'completed',
            old_value: 'n/a',
            new_value: options.new_value,
            field_type: options.field_type,
            user_id: options.user_id
          })
        }
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
    }
  );

  console.log("in models/items.js")

  Item.beforeUpdate((item, options) => {
    console.log("In beforeUpdate hook:");
    console.log('\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n',item );
  })

  // Item.afterUpdate((item, options) => {
  //   console.log("In afterUpdate hook:");
  //   console.log(item, '\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n');
  // })

  return Item;
};
