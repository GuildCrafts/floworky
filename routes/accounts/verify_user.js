const moment = require( 'moment' )

const whereClause = hash => {
  const $gt = moment().subtract({ hours: 4 }).utc()

  return { where: { $and: [{ hash, createdAt: { $gt } }] } }
}

const testForCode = result => {
  if( result ) {
    return Promise.resolve( result )
  } else {
    return Promise.reject()
  }
}

module.exports = { whereClause, testForCode }
