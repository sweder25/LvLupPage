document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simulación de login básico
  if (username === 'usuario' && password === '1234') {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
    window.location.href = 'Index.html';
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
});