const registerUser = (email, password) => {
  User.create({ email, password: encryptPassword( password ) })
    .then( user => RegistrationEmail.send( user ))
    .then( user => response.redirect( '/accounts/verify' ))
}

module.exports = { registerUser }
