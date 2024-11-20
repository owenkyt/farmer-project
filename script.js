const menuIcon = document.querySelector('.bx');
const navList = document.querySelector('.list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    navList.classList.remove('active');
});

function redirectToSignIn() {
    window.location.href = "signin.html"; 
}