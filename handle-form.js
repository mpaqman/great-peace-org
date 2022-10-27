
const processForm = form => {
    const data = new FormData(form)
    data.append('form-name', 'newsletter');
    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    })
  }

  
const emailForm = document.querySelector('.email-form');
if (emailForm) {
  //console.log(emailForm)
  emailForm.setAttribute("data-netlify","false");
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}

const messsageForm = document.querySelector('.message-form');
if (messsageForm) {
  messsageForm.setAttribute("data-netlify","false");
  messsageForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(messsageForm);
  })
}
