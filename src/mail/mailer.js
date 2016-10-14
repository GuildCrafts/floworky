const nodemailer = require( 'nodemailer' )

var transporter = nodemailer.createTransport( process.env.MAILER )

module.exports = transporter
