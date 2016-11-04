const moment = require('moment')
const today = moment()
const todaysDate = moment()
const minusSevenDays = todaysDate.subtract(7, 'days')
console.log('-7: ', minusSevenDays.format("dddd, MMMM Do YYYY, h:mm:ss a"), '\n');
console.log('todaysDate: ', today.format("dddd, MMMM Do YYYY, h:mm:ss a"));


const bulletsCreated = (auditRecords) => {
  const createdThisWeek = auditRecords.filter(record => record.createdAt >= minusSevenDays)
  return createdThisWeek.length
  // ([all items w/ user_id && createdAt(<= today’s date - 7) ].length)
  }

const bulletsChanged = (auditRecords) => {
  const changedThisWeek = auditRecords.filter(record => record.updatedAt >= minusSevenDays)
  return changedThisWeek.length
    // ([all items w/ user_id && updatedAt(<= today’s date - 7) ].length)
}

const totalBullets = (auditRecords) => {
  const totalBullets = auditRecords.filter(record => {
      return record.element_name === 'row' && record.createdAt >= minusSevenDays
  })
  return totalBullets.length
}

const bulletsCompleted = (auditRecords) => {
    const completedItems = auditRecords.filter(record => {
      return record.element_name === 'completed' &&
      record.new_value == true &&
      record.createdAt >= minusSevenDays
    })
    console.log();
    return completedItems.length
}

const calculateStats = (Audit, user_id) => {
  const stats =Audit.findAll({where: {user_id: user_id}})
    .then(auditRecords => {
     let created = bulletsCreated(auditRecords)
     let changed = bulletsChanged(auditRecords)
     let completed = bulletsCompleted(auditRecords)
     let total = totalBullets(auditRecords)
     console.log('raw Stats: ',created, changed, completed, total);
     const userStats = {created, changed, completed, total}
     console.log('userStats: ', userStats);
     return userStats
    })

    return stats
}
const grabUserStats = (User, user_id, Audit, Item) => {
  const where = {id: user_id}
  const userStats = User.findOne({where})
  .then(user => {
    return Math.abs(todaysDate.diff(user.createdAt, 'days'))
    console.log('user: ', user);
  })
  .then(lengthOfUse => {
    console.log('lengthOfUse', lengthOfUse);
    return calculateStats(Audit, user_id)
  })

  return userStats
}

module.exports = grabUserStats
