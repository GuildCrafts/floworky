const auditEntry = ( item_id, user_id, field_name, old_value, new_value ) => ({
  item_id,
  user_id,
  field_name,
  old_value,
  new_value,
  field_type: typeof( new_value )
})
const createAuditEntries = ( Item, Audit, user_id ) => result => {
  const auditEntries = Object.keys( result._changed ).reduce( (memo, key) => {
    if( key !== 'updatedAt' ) {
      const data = auditEntry( result.id, user_id, key, result._previousDataValues[ key ], result[ key ] )
      memo.push( Audit.create( data ))
    }

    return memo
  }, [] )
  
  return Promise.all( auditEntries ).then( _ => result )
}

module.exports = createAuditEntries
