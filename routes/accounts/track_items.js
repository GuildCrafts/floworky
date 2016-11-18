const numberOfTasksCreated = ( Item, $gte, user_id ) =>
  Item.findAndCountAll({ where: { createdAt: { $gte }, user_id } }).then( ({ count }) => count )

const numberOfTasksCompleted = ( sequelize, user_id, since ) => {
  return sequelize.query(
    `SELECT COUNT(DISTINCT item_id) FROM "Audits" WHERE field_name = 'completed' AND old_value = 'false' AND new_value = 'true' AND user_id = ${user_id} AND "createdAt" > '${since}'`,
    { type: sequelize.QueryTypes.SELECT }
  ).then( ([ result ]) => parseInt( result.count ))
}

const numberOfTasksEdited = ( sequelize, user_id, since ) => {
  return sequelize.query(
    `SELECT COUNT(DISTINCT item_id) FROM "Audits" WHERE field_name = 'title' OR field_name ='description' AND old_value != new_value AND user_id = ${user_id} AND "createdAt" > '${since}'`,
    { type: sequelize.QueryTypes.SELECT }
  ).then( ([ result ]) => parseInt( result.count ))
}
const totalNumberOfTasks = ( Item, user_id ) => Item.findAndCountAll({ where: { user_id }
  }).then( ({ count }) => count )

module.exports = {
  numberOfTasksCreated,
  numberOfTasksCompleted,
  numberOfTasksEdited,
  totalNumberOfTasks
}
