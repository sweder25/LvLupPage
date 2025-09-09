window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const authMenu = document.getElementById('auth-menu');
  const profileMenu = document.getElementById('profile-menu');

  if (loggedIn) {
    authMenu.classList.add('hidden');
    profileMenu.classList.remove('hidden');
  } else {
    authMenu.classList.remove('hidden');
    profileMenu.classList.add('hidden');
  }
});



