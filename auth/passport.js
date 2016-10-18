const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Sequelize = require( 'sequelize' )

const User = require('../models/index').User
const OPTIONS = { usernameField: 'email' }

const ERROR_MESSAGE = "Incorrect email or password. Have you verified your email?"

const findUser = ( email, password ) => {
  return User.findOne({ where: { email, email_verified: true }})
    .then( user =>
      new Promise( (resolve, reject) => {
        if( ! user ) {
          reject({ message: ERROR_MESSAGE })
        }

        bcrypt.compare( password, user.password, (error, result ) => {
          if( result ) {
            resolve( user )
          } else {
            reject( error )
          }
        })
      })
    )
}

const strategy = new LocalStrategy( OPTIONS, ( email, password, done ) => {
  findUser( email, password)
    .then( user => {
      if( ! user ){
        done( null, false, { message: ERROR_MESSAGE })
      } else {
        done( null, user)
      }
    }).catch( error => done( null, false, error ))
})

passport.use( strategy )

passport.serializeUser( ( user, done ) => done( null, user.id ) )

passport.deserializeUser( ( id, done ) => {
  User.findById( id )
    .then( user => done( null, { id: user.id, email: user.email }))
    .catch( error => done( error, null ))
})

module.exports = passport
