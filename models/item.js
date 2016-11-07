'use strict';

const VALID_PARAMETERS = [ 'completed', 'title', 'description', 'starred' ]

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    is_root: DataTypes.BOOLEAN,
    starred: DataTypes.BOOLEAN,
    parent_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
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
