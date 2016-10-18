# Contributing

* Fork this repository
* Take a ticket from the Ready section of the [project page](https://github.com/GuildCrafts/floworky/projects/2). (Some tickets in the Backlog may be ready for work, but are probably dependent on items in the Ready section - please check with maintainer if you're interested in Backlog work.)
* Create a topic branch.  Branch names should begin with the issue number, followed by text describing the work.  Please use lower-kebab-case (i.e. `2-readme-updated`).
* Complete work
* Submit a pull request


## Quality Requirements
* Write intention revealing code - use well named identifiers for variables, functions, css classes, etc.
* Functions are small and serve a single purpose
* Documentation is updated (including the [readme](README.md), and any API documentation)
* All tests passing - aiming for 100% test coverage
* No linting errors
* Spaces (2), not tabs
* Flow Type Annotations are included

### Migrations
* [Sequelize-Cli List of Commands](https://www.npmjs.com/package/sequelize-cli)
* [Sequelize-Cli Migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/)
* When the database schema is updated the ```npm run migrate``` command needs to run in order to update the schema
* When schema updated are required, sequelize schema migrations are provided with instructions to run in the PR message
* When data migrations are required, sequelize data migrations are provided with instructions to run in the PR message
* NPM Script commands: 
  * migrate ( run pending migrations ), 
  * migrate:undo ( revert the last migration run ), 
  * migrate:undo:all ( revert all migrations ran ),
  * migrate:test ( runs a test database )
* Testing migrations requires placing your database url inside of the migrate:test script
``` "migrate:test": "sequelize db:migrate --url postgres://user@localhost:5432/floworky-test" ```