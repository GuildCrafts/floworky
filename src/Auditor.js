const returnAuditOptions = (updateType, item, data_type) => {
  console.log('returning Audit Options',updateType, data_type);
  const auditOptions = updateType.map(type => {
    console.log('type',type, 'data_type', data_type);
      if(type === 'completed'){
        console.log('in completed');
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: type,
          old_value: ! item.completed,
          new_value: item.completed,
          field_type: data_type,
          user_id: item.user_id
        }
        console.log('>>>>>>',item._previousDataValues.title);
        return options
      }

      if(type === 'title' ){
        console.log('in title');
        let options = {
          table_name: 'Items',
          element_id: item.id,
          element_name: type,
          old_value: item._previousDataValues.title,
          new_value: item.title,
          field_type: datatype,
          user_id: item.user_id
        }
        console.log('title',options);
        return options
      }

      if(type === 'description'){
        let options = {
          table_name: 'Items',
          element_id: options.where.id,
          element_name: 'description',
          old_value: ! item._previousDataValues,
          new_value: item.description,
          field_type: datatype,
          user_id: options.where.user_id
        }
        console.log('description', options);
        return options
      }


    })
    console.log('auditOptions',auditOptions);
  return auditOptions
}

module.exports = returnAuditOptions
