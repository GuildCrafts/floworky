const addUserTopics = ( Topic, UserTopic ) => user => 
  Topic.all()
    .then( topics => topics.map( topic => ({ user_id: user.id, topic_id: topic.id }) ) )
    .then( topics => UserTopic.bulkCreate( topics, { fields: [ 'user_id', 'topic_id' ] } ))
    .then( result => user )

module.exports = addUserTopics