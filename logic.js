// Lógica básica para mostrar menú de perfil si el usuario está "logueado"
document.addEventListener('DOMContentLoaded', function() {
	// Simulación de login
	let loggedIn = false;
	const authMenu = document.getElementById('auth-menu');
	const profileMenu = document.getElementById('profile-menu');

	// Cambia el menú al hacer clic en "Ingresar"
	if (authMenu) {
		authMenu.addEventListener('click', function(e) {
			if (e.target.textContent === 'Ingresar') {
				loggedIn = true;
				authMenu.classList.add('hidden');
				profileMenu.classList.remove('hidden');
			}
		});
	}

	// Cerrar sesión
	if (profileMenu) {
		profileMenu.addEventListener('click', function(e) {
			if (e.target.textContent === 'Cerrar sesión') {
				loggedIn = false;
				profileMenu.classList.add('hidden');
				authMenu.classList.remove('hidden');
			}
		});
	}
});
