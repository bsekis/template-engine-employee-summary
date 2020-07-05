const chalk = require(`chalk`);

module.exports = [
  {
    type: 'input',
    message: chalk.cyan(`Enter intern name: `),
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
    message: chalk.cyan(`Enter intern ID: `),
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
    message: chalk.cyan(`Enter intern email: `),
    name: 'email',
    validate: function(emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    }
  },
  {
    type: 'input',
    message: chalk.cyan(`Enter intern school: `),
    name: 'school',
    validate: function (schoolInput) {
      if (schoolInput) {
        return true;
      }
      return false;
    }
  }
];