const Sequelize = require( 'sequelize' )
const sequelize = new Sequelize(
  `postgres://${process.env.USER}@localhost:5432/workflowy`
)

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
