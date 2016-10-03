# Floworky

An open source clone of [workflowy](https://workflowy.com/).  Interested in contributing?  Take a look at the [project page](https://github.com/GuildCrafts/floworky/projects/2) and [issues page](https://github.com/GuildCrafts/floworky/issues) for outstanding issues.

## Contributing to Floworky

Please read the [contribution guidelines](CONTRIBUTING.md).

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
* Test Spies, Stubs and Mocks: [Sinnon](http://sinonjs.org/)
* Test Coverage: [Istanbul](https://github.com/gotwarlost/istanbul)
* ?? Test Runner: [Karma](https://karma-runner.github.io/1.0/index.html)

     #### Testing Learning & Resources
     * [Client-side testing with Mocha and Karma](https://sean.is/writing/client-side-testing-with-mocha-and-karma/)
     * [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
     * [Adding code coverage checking with Istanbul](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-adding-code-coverage-checking)