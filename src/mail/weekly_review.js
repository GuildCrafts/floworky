const transporter = require('./mailer')

const weeklyReview = review => {
  return `
    <p> ${review.element_name} </p>
    <p> ${review.old_value} </p>
    <p> ${review.new_value} </p>
    <p> ${review.field_type} </p>
  `
}

const options = ( userEmail, review ) => {
  const url = `${process.env.SITE_URL}`
  const environment_header =
    process.env.ENVIRONMENT ? `[${process.env.ENVIRONMENT}]` : ''

  return {
    from: '"Floworky" <floworky@gmail.com>',
    to: userEmail,
    subject: `${environment_header}Welcome to floworky`,
    text: `${review}`,
    html: weeklyReview( review )
  }
}

const send = ( userEmail, review ) =>
  transporter.sendMail( options( userEmail, review ) )

module.exports = { send }
