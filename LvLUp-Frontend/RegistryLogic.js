document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('registroForm');
	const errorMsg = document.getElementById('registroError');

	if (form) {
			form.addEventListener('submit', function(e) {
				e.preventDefault();
				const username = document.getElementById('username').value.trim();
				const password = document.getElementById('password').value.trim();
				const correo = document.getElementById('correo').value.trim();
				const fechaNacimiento = document.getElementById('fechaNacimiento').value;
				const correoFeedback = document.getElementById('correoFeedback');
				const edadFeedback = document.getElementById('edadFeedback');

				if (correoFeedback) {
					correoFeedback.style.display = 'none';
				}
				if (errorMsg) {
					errorMsg.style.display = 'none';
				}
				if (edadFeedback) {
					edadFeedback.style.display = 'none';
				}


				const correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo);
				if (!correoValido) {
					if (correoFeedback) {
						correoFeedback.style.display = 'block';
						correoFeedback.textContent = 'Por favor, ingresa un correo válido.';
					}
					return;
				}

				if (fechaNacimiento) {
					const hoy = new Date();
					const nacimiento = new Date(fechaNacimiento);
					let edad = hoy.getFullYear() - nacimiento.getFullYear();
					const m = hoy.getMonth() - nacimiento.getMonth();
					if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
						edad--;
					}
					if (edad < 18) {
						if (edadFeedback) {
							edadFeedback.style.display = 'block';
							edadFeedback.textContent = 'Debes ser mayor de 18 años para registrarte.';
						}
						return;
					}
				}

				if (username === 'usuario' && password === '1234') {
					localStorage.setItem('loggedIn', 'true');
					localStorage.setItem('username', username);
					localStorage.setItem('correo', correo);
					window.location.href = 'Index.html';
				} else {
					if (errorMsg) {
						errorMsg.style.display = 'block';
						errorMsg.textContent = 'Usuario o contraseña inválidos.';
					}
				}
			});
	}
});