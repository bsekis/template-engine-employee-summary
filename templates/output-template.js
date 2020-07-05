const generateManager = require('./manager-template');
const generateEngineer = require('./engineer-template');
const generateIntern = require('./intern-template');

module.exports = (teamManager, engineersArray, internsArray) => {
  const managerHTML = generateManager(teamManager);
  const engineerHTML = generateEngineer(engineersArray);
  const internHTML = generateIntern(internsArray);

  console.log(managerHTML);

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Roster</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../templates/style.css">
    </head>
    <body>
    <section class="hero has-text-centered has-background-link margin-bottom">
      <div class="hero-body">
        <h1 class="title has-text-white">The Team</h1>
      </div>
    </section>
    <section class="columns ">
      ${managerHTML}
      ${engineerHTML}
      ${internHTML}
    </section>
    </body>
  </html>
  `
};