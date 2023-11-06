// we import the user and thought models
const User = require('./user');
const Thought = require('./Thoughts');

// then we export the models for use in other parts of the app
module.exports = { User, Thought };