const Sequelize = require( 'sequelize' )
const sequelize = new Sequelize( process.env.DATABASE_URL )

const User = sequelize.define( 'user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

const Item = sequelize.define( 'item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  parent_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  user_id: Sequelize.INTEGER
})

module.exports = { sequelize, User, Item }
