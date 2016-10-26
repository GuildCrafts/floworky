

// const params = data =>


const checkJsonForSuccessField = json => {
  if( json.success ) {
    Promise.resolve( json )
  } else {
    Promise.reject( json.message )
  }
}

const completedClicked = event => {
  const element = $( event.target )
  const topicId = element.data( 'id' )

  fetch( `/help/${topicId}`, Object.assign( {}, 
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }, 
    { 
      body: JSON.stringify( { 
        viewed: true 
      }) 
    }) 
  )
    .then( result => {
      console.log(result)
      return result.json()
    })
    // .then( result => {
    //   console.log(result)
    //   return checkJsonForSuccessField(result)
    // } )
    .then( json => { 
      console.log("hit the jquery again",json.success)
      return element.addClass( 'viewed' )
      }
    )
  }

 //  const parent = $( `.title[data-id=${id}]` )
 //       element.data( 'completed', completed )
 //       if( completed ) {
 //         parent.addClass( 'completed' )
 //       } else {
 //         parent.removeClass( 'completed' )
 //       }
 //     }
 //   )
 // }

// const FETCH_PARAMS = 


$(document).ready( () => {
  // $( '.topic-selector').click( function() {
  //   $(this).addClass('viewed')
  // })
  $( '.topic-selector' ).click( completedClicked )
})

