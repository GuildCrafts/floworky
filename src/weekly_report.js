const moment = require('moment')
const today = moment()
const todaysDate = moment()
const minusSevenDays = todaysDate.subtract(7, 'days')

const lengthOfUse = (User, where) =>{
  const duration = User.findOne({where})
    .then(user => {
    return Math.abs(todaysDate.diff(user.createdAt, 'days'))
    })
  return duration
}

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
    return completedItems.length
}

const calculateStats = (Audit, user_id) => {
  const stats = Audit.findAll({where: {user_id: user_id}})
    .then(auditRecords => {
     let created = bulletsCreated(auditRecords)
     let changed = bulletsChanged(auditRecords)
     let completed = bulletsCompleted(auditRecords)
     let total = totalBullets(auditRecords)
     const userStats = {created, changed, completed, total}
     return userStats
    })

    return stats
}
const grabUserStats = (User, user_id, Audit, Item) => {
  const where = {id: user_id}
  const userStats = calculateStats(Audit, user_id)
  const duration = Promise.resolve(lengthOfUse(User, where)).then(result => result)
  userStats.duration = duration
  return userStats
}

module.exports = grabUserStats
