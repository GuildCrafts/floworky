const whereClause = hash => {
  return {
    where: {
      $and: [{
        hash,
        createdAt: {
          $gt: new Date( new Date() - ( 60 * 4 * 60 ))
        }
      }]
    }
  }
}

const testForCode = result => {
  if( result ) {
    return Promise.resolve( result )
  } else {
    return Promise.reject()
  }
}

module.exports = { whereClause, testForCode }
