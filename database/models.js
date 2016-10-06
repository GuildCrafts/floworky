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

sequelize.sync()

module.exports = { User }
