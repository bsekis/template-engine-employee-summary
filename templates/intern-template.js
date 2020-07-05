let internsHTML = '';

const generateIntern = internsArray => {
  internsArray.forEach(({ name, id, email, school }) => {
    const internToAdd = `
    \n<div class="column is-one-fourth">
    <div class="content has-background-warning is-marginless">
      <h2 class="title">${name}</h2>
    <h4 class="subtitle">
      <span class="icon"><i class="fas fa-user-graduate"></i></span>
      Intern</h4>
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
        school: ${school}
      </div> 
    </section>
  </div>
  `
    internsHTML = internsHTML + internToAdd;
  });
  return internsHTML;
}

module.exports = generateIntern;