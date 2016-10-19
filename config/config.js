const  fs = require('fs')

if( fs.existsSync( '.env' ) ) {
  require( 'dotenv' ).config()
} else {
  console.log( ".env not found, skipping dotenv config..." )
}

module.exports = {
  "development": {
     "use_env_variable": "DATABASE_URL"
  },
  "test": {
     "use_env_variable": "DATABASE_URL"
  },
  "production": {
     "use_env_variable": "DATABASE_URL"
  }
}
