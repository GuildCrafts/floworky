const searchQuery = searchOptions => {
  const matchClause = { ilike: `%${searchOptions}%` }

  return {
    where: {
      $or: [{ title: matchClause }, { description: matchClause }]
    },
    attributes: [ 'id' ]
  }
}

module.exports = searchQuery
