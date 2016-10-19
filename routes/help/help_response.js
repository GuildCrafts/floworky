const FETCH_ATTRIBUTES = [ 'UserId', 'TopicId', 'viewed', 'id' ]

const allHelpItemsQuery = user_id => (
  { order: [['TopicId', 'ASC']], where: { user_id }, FETCH_ATTRIBUTES }
)


module.exports = { allHelpItemsQuery }