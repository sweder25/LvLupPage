
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



document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById('registroForm');
    if (registroForm) { 
        const correoInput = document.getElementById('correo');
        const fechaNacimientoInput = document.getElementById('fechaNacimiento');

        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            registroForm.classList.remove('was-validated');

            let esValido = true;
            const hoy = new Date();
            const fechaNacimiento = new Date(fechaNacimientoInput.value);
            const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();
            const dia = hoy.getDate() - fechaNacimiento.getDate();
            
            if (edad < 18 || (edad === 18 && (mes < 0 || (mes === 0 && dia < 0)))) {
                fechaNacimientoInput.setCustomValidity("Debes ser mayor de 18 años.");
                esValido = false;
            } else {
                fechaNacimientoInput.setCustomValidity("");
            }

            const correo = correoInput.value.trim();
            const esDuoc = correo.toLowerCase().endsWith('@duocuc.cl') || correo.toLowerCase().endsWith('@duoc.cl');
            if (esDuoc) {
                alert('¡Felicitaciones! Como estudiante de Duoc, obtienes un 20% de descuento de por vida en tu primera compra.');
            }

            if (registroForm.checkValidity() === false) {
                esValido = false;
            }

            if (esValido) {
                alert('¡Registro exitoso!');
            }
            
            registroForm.classList.add('was-validated');
        });
    }
});