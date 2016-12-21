const { filteredItems, filterClause } = require( './item_response' )

const buildStarredItemArray = ( Item, user_id ) =>
  filteredItems( Item, filterClause({ starred: true }, user_id ) )

module.exports = buildStarredItemArray
