document.addEventListener("DOMContentLoaded", function() {

    const loginForm = document.getElementById('loginForm');
    const correoInput = document.getElementById('correoLogin');
    const passwordInput = document.getElementById('passwordLogin');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const correo = correoInput.value.trim();
            const password = passwordInput.value.trim();

            // Validación 
            if (correo === "" || password === "") {
                alert("Por favor, ingresa tu correo y contraseña.");
                return;
            }


            if (correo === "nicoa.castro@duocuc.cl" && password === "12345678") {
                localStorage.setItem('autenticado', 'true');
                alert("¡Inicio de sesión exitoso!");
                window.location.href = 'index.html'; 
            } else {
                alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
            }
        });
    }
});