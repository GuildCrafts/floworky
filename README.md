# Floworky

An open source clone of [workflowy](https://workflowy.com/).  Interested in contributing?  Take a look at the [project page](https://github.com/GuildCrafts/floworky/projects/2) and [issues page](https://github.com/GuildCrafts/floworky/issues) for outstanding issues.

## Contributing to Floworky

Please read the [contribution guidelines](CONTRIBUTING.md).

## Setting up Development Environment

Floworky uses [`node-foreman`](https://github.com/strongloop/node-foreman) to manage process startup.  This requires the use of a `.env` file to specify the environment variables required by floworky (note that this is an example that includes values that will need to be set for your own environment):
```
DATABASE_URL=postgres://jrob@localhost:5432/floworky
```
#### (Optional) Configure Atom with Nuclide for Flow
Floworky uses flow for static type checking, which can be manually run using `npm run flow`.  If you are using Atom to contribute, you can [use Nuclide](https://nuclide.io/docs/editor/setup/#quick-install) for type annotation information within your editor.

## Technical Stack

### Back End
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/) ([Documentation](https://expressjs.com/en/4x/api.html))
* [Passport](http://passportjs.org/) ([Documentation](http://passportjs.org/docs))
* [passport-local](https://github.com/jaredhanson/passport-local)

### Database
* [Postgres](https://www.postgresql.org/)
  * [Sequelize](https://github.com/sequelize/sequelize) ([Documentation](http://docs.sequelizejs.com/en/latest/))
  * [pg-promise](https://github.com/vitaly-t/pg-promise) (Used indirectly via Sequelize)

### Front End
* [Pug](https://github.com/pugjs/pug)

### Testing
* Testing Framework: [Mocha](http://mochajs.org/)
* Assertion Library: [Chai](http://chaijs.com/)
* Test Spies, Stubs and Mocks: [Sinon](http://sinonjs.org/)
* Test Coverage: [Istanbul](https://github.com/gotwarlost/istanbul)

### Resources
See [RESOURCES.md](RESOURCES.md)

### Migrations
* [Sequelize-Cli List of Commands](https://www.npmjs.com/package/sequelize-cli)
* [Sequelize-Cli Migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/)
* Update model and then run npm script commands included below
* NPM Script commands: db:migrate, db:migrate:undo, db:migrate:undo:all


