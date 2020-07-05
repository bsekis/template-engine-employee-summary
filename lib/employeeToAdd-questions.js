const jest = require(`jest`);

module.exports = [
  {
    type: 'list',
    message: `Add another employee? `,
    choices: [
      {
        name: jest.yellow(`Engineer`),
        value: `Engineer`
      },
      {
        name: jest.cyan(`Intern`),
        value: `Intern`
      },
      {
        name: jest.red(`None`),
        value: `None`
      }],
      name: 'newEmployee',
    default: 2
  }
];