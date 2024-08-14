
function renderHeader() {
    const header = document.getElementById('header');
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    if (document.body.classList.contains('login-page') || document.body.classList.contains('register-page')) {
      header.innerHTML = '<h1>Hello, Welcome to Flat Finder!</h1>';
    } else if (currentUser) {
      header.innerHTML = `<h1>Hello, ${currentUser.firstName} ${currentUser.lastName}! Welcome to Flat Finder!</h1>`;
    } else {
      header.innerHTML = '<h1>Hello, Guest! Welcome to Flat Finder!</h1>';
    }
  }
  
  document.addEventListener('DOMContentLoaded', renderHeader);