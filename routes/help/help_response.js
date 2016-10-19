
const FETCH_ATTRIBUTES = [ 'user_id', 'topic_id', 'viewed', 'id' ]

const allHelpItemsQuery = user_id => (
  { order: [[User, UserTopic,  'topic_id', 'ASC']], where: { user_id }, FETCH_ATTRIBUTES }
)

module.exports = { allHelpItemsQuery }