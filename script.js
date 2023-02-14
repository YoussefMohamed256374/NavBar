let closer = document.querySelector('#closer');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

closer.onclick = () => {
  closer.style.display = 'none';
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  closer.style.display = 'block';
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
  closer.style.display = 'block';
  loginForm.classList.toggle('active');
}
