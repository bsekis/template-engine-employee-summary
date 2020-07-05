let engineersHTML = '';

const generateEngineer = engineersArray => {
  engineersArray.forEach(({name, id, email, github}) => {
    let engineerToAdd = `
    \n<div class="column is-one-fourth">
      <div class="content has-background-warning is-marginless">
        <h2 class="title">${name}</h2>
      <h4 class="subtitle">
        <span class="icon"><i class="fas fa-glasses"></i></span>
        Engineer</h4>
      </div>
      <section>
        <div class="tile is-12">
          id: ${id}
        </div> 
        <div class="tile is-12">
          email:&nbsp;
          <a href="mailto:email: ${email}">${email}</a>
        </div> 
        <div class="tile is-12">
          github:&nbsp;
          <a href="https://github.com/${github}">${github}</a>
        </div> 
      </section>
    </div>
    `
    engineersHTML = engineersHTML + engineerToAdd;
  });
  return engineersHTML;
}

module.exports = generateEngineer;