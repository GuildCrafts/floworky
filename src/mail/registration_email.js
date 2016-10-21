const transporter = require('./mailer')
const { VerificationCode } = require( '../../models/index' )
const encryptPassword = require( '../../auth/encryptPassword' )

const send = user => {
  const hash = encryptPassword( `${user.id}-${Date.now()}` ).replace( /\//g, "" )

  return VerificationCode.create({ user_id: user.id, hash })
    .then( code => transporter.sendMail( options( user.email, hash )))
    .then( result => user )
}

const options = ( to, code ) => {
  const url = `${process.env.SITE_URL}/accounts/verify/${code}`
  const environment_header =
    process.env.ENVIRONMENT ? `[${process.env.ENVIRONMENT}]` : ''

  return {
    from: '"Floworky" <floworky@gmail.com>',
    to,
    subject: `${environment_header}Welcome to floworky`,
    text: url,
    html: `<p><a href="${url}">${url}</a></p>`
  }
}

module.exports = { send }
