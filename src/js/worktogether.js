//* Import libraries
import axios from "axios";

//* Find elements
const formEl = document.querySelector('.footer-form');
const emailInputEl = document.querySelector('.email-input');
const textInputEl = document.querySelector('.comment-input');

const modalBackdropEl = document.querySelector('.backdrop');
const modalCloseBtnEl = document.querySelector('.close-modal-button');
const modalTitleEl = document.querySelector('.modal-title');
const modalTextEl = document.querySelector('.modal-text');

//* Validate function
const isValid = email => {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
} 

//* Function
const onFormSubmit = async event => {
    event.preventDefault();
    const userEmail = emailInputEl.value.trim()
    const userComment = textInputEl.value.trim()

    try {
        const postRequest = await axios.post('https://portfolio-js.b.goit.study/api/requests', {
            "email": `${userEmail}`,
            "comment": `${userComment}`
        })

        emailInputEl.value = '';
        textInputEl.value = '';
        
        modalBackdropEl.classList.add('is-open');
    } catch (err) {
        console.log(err);

        modalTitleEl.classList.add('error-title');
        modalTitleEl.textContent = 'Error!';

        modalTextEl.classList.add('error-text');
        modalTextEl.textContent = 'Sorry something went wrong';

        modalBackdropEl.classList.add('is-open');
    }
}

//* Add event listeners to form
formEl.addEventListener('submit', onFormSubmit);
modalCloseBtnEl.addEventListener('click', event => {
    modalBackdropEl.classList.remove('is-open');
})

document.addEventListener('keydown', event => {
    if (event.key === "Escape" || event.keyCode === 27) {
        modalBackdropEl.classList.remove('is-open');
    }
});