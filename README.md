# Floworky

An open source clone of [workflowy](https://workflowy.com/).  Interested in contributing?  Take a look at the [project page](https://github.com/GuildCrafts/floworky/projects/2) and [issues page](https://github.com/GuildCrafts/floworky/issues) for outstanding issues.

## This team is following contribution guidlines for contributing to thi opesource project:

[contribution guidelines](CONTRIBUTING.md).

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

## Specifications

- [ ] A user should have the ability to be able to select a parent item for new items, so that I can have nested ites in my list
- [ ] Developers have a style guide that provides rules and stucture for styling html in floworky and effectively contributing to the project. Following BEM methodology
- [ ] A user can toggle to be able to filter their todo items to view completed, active and all, so that I can create a focused view of my items
- [ ] A user can search for items by a keyword, using a form located in the navbar

## Quality Rubric

- [ ] Pull requests are merged into the original flowory repo
- [ ] followed all quality and contributiing guidlines specified in README.md from main floworky 
