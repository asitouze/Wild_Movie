const container= document.getElementById('container');
const loginButton= document.getElementById('login');
const signUpButton= document.getElementById('sign-up');

signUpButton.addEventListener('click',() => {
    container.classList.add('pane1-active');
})

loginButton.addEventListener('click', () => {
    container.classList.remove('pane1-active');
})


