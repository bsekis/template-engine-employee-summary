const chalk = require(`chalk`);

module.exports = [
  {
    type: 'input',
    message: chalk.yellow(`Enter engineer name: `),
    name: 'employeeName',
    validate: function (nameInput) {
      if (nameInput) {
        return true;
      }
      return false;
    }
  },
  {
    type : 'input',
    message: chalk.yellow(`Enter engineer ID: `),
    name: 'id',
    validate: function (idInput) {
      if (idInput) {
        return true;
      }
      return false;
    }
  },
  {
    type: 'input',
    message: chalk.yellow(`Enter engineer email: `),
    name: 'email',
    validate: function(emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    }
  },
  {
    type: 'input',
    message: chalk.yellow(`Enter engineer github username: `),
    name: 'github',
    validate: function (githubInput) {
      if (githubInput) {
        return true;
      }
      return false;
    }
  }
];