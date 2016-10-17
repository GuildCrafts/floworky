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
* Update model and then run npm script commands included below
* NPM Script commands: db:migrate, db:migrate:undo, db:migrate:undo:all
* Testing migrations requires placing your database url inside of the migrate:test script
``` "migrate:test": "node_modules/.bin/sequelize db:migrate --url postgres://user@localhost:5432/floworky-test" ```