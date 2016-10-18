# Contributing

* Fork this repository
* Take a ticket from the Ready section of the [project page](https://github.com/GuildCrafts/floworky/projects/2). (Some tickets in the Backlog may be ready for work, but are probably dependent on items in the Ready section - please check with maintainer if you're interested in Backlog work.)
* Create a topic branch.  Branch names should begin with the issue number, followed by text describing the work.  Please use lower-kebab-case (i.e. `2-readme-updated`).
* Complete work
* Submit a pull request
  * If data must be migrated, create a data migration. See below for example:
  * Model: ```sequelize model:create --name TableName --attributes email:string,password:string```
  * Migration: ```sequelize migrations:create --name add-email-verified-to-users```
  * Updates or Creates database schema: ```npm run migrate```

## Quality Requirements
* Write intention revealing code - use well named identifiers for variables, functions, css classes, etc.
* Functions are small and serve a single purpose
* Documentation is updated (including the [readme](README.md), and any API documentation)
* All tests passing - aiming for 100% test coverage
* No linting errors
* Spaces (2), not tabs
* Flow Type Annotations are included
