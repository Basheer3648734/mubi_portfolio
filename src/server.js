const nameField = document.querySelector('input[type="text"]');
const emailField = document.querySelector('input[type="email"]');
const commentField = document.querySelector('textarea');
const submit = document.querySelector('input[type="submit"]');
const successText = document.querySelector('#form-validation');
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const body = {
        name: nameField.value,
        email: emailField.value,
        comment: commentField.value
    }
    // console.log(body);
    fetch('/', {

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(body)
    }).then(res => res.json()).
        then(data => {
            nameField.value = "";
            emailField.value = "";
            commentField.value = "";
            successText.classList.remove('error');
            successText.classList.add('success');
            successText.innerHTML = "Response collected succesfully"
        }).catch(Error => {
            successText.classList.remove('succcess')
            successText.classList.add('error');
            successText.innerHTML = "check the data once again"
        })
});