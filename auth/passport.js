const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Sequelize = require( 'sequelize' )
const encryptPassword = require( './encryptPassword' )

const User = require('../database/models').User
const OPTIONS = { usernameField: 'email' }

const findUser = ( email, password ) =>
  User.findOne({ email, password: encryptPassword( password ) })

const strategy = new LocalStrategy( OPTIONS, ( email, password, done ) => {
  findUser( email, password)
    .then( user => {
      if( !user ){
        return done( null, false, { message: "Incorrect email or password" })
      } else {
        done( null, user)
      }
    }).catch( error => done( err ))
})

passport.use( strategy )

passport.serializeUser( ( user, done ) => done( null, user.id ) )

passport.deserializeUser( ( id, done ) => {
  User.findById( id )
    .then( user => done( null, { id: user.id, email: user.email }))
    .catch( error => done( error, null ))
})

module.exports = passport
