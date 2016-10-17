const Sequelize = require( 'sequelize' )
const sequelize = new Sequelize( process.env.DATABASE_URL )

const User = sequelize.define( 'user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: Sequelize.STRING,
  bob: Sequelize.STRING,
  email_verified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
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

const VerificationCode = sequelize.define( 'verification_code', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hash: Sequelize.STRING
})

module.exports = { sequelize, User, Item, VerificationCode }
