const chalk= require(`chalk`);

module.exports = [
  {
    type: 'input',
    message: chalk.green(`Enter manager name: `),
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
    message: chalk.green(`Enter manager ID: `),
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
    message: chalk.green(`Enter manager email: `),
    name: 'email',
    validate: function(emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    }
  },
  {
    type: 'input',
    message: chalk.green(`Enter manager office number: `),
    name: 'officeNumber',
    validate: function (officeInput) {
      if (officeInput) {
        return true;
      }
      return false;
    }
  }
];