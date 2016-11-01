'use strict';
module.exports = function(sequelize, DataTypes) {
  var CompletedItems = sequelize.define('CompletedItems', {
    item_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      toggle: (item_id, user_id) => {
        this.findOrCreate(item_id)
          .then(result => {
            if(result[1] === false){
              this.delete(result[0].id)
            } else {return}
          })
      }
    }
  });
  return CompletedItems;
};
