const returnAuditOptions = (updateType, item, data_type) => {

  const auditOptions = updateType.map(type => {
        if(type === 'create'){
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: 'row',
          old_value: 'n/a',
          new_value: JSON.stringify(item),
          field_type: data_type,
          user_id: item.user_id
        }
        return options
      }
      if(type === 'completed'){
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: type,
          old_value: ! item.completed,
          new_value: item.completed,
          field_type: data_type,
          user_id: item.user_id
        }
        return options
      }

      if(type === 'title' ){
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: type,
          old_value: item._previousDataValues.title,
          new_value: item.title,
          field_type: data_type,
          user_id: item.user_id
        }
        return options
      }

      if(type === 'description'){
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: 'description',
          old_value: item._previousDataValues.description,
          new_value: item.description,
          field_type: data_type,
          user_id: item.user_id
        }
        return options
      }
    })
  return auditOptions
}

module.exports = returnAuditOptions
