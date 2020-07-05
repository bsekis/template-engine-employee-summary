const chalk = require(`chalk`);

module.exports = [
  {
    type: 'list',
    message: `Add another employee? `,
    choices: [
      {
        name: chalk.yellow(`Engineer`),
        value: `Engineer`
      },
      {
        name: chalk.cyan(`Intern`),
        value: `Intern`
      },
      {
        name: chalk.red(`None`),
        value: `None`
      }],
      name: 'newEmployee',
    default: 2
  }
];