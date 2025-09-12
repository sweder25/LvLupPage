
document.addEventListener('DOMContentLoaded', function() {
    const accountMenu = document.getElementById('account-menu');
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    function renderAccountMenu() {
        if (!accountMenu) return;
        accountMenu.innerHTML = '';
        if (loggedIn) {
            accountMenu.innerHTML = `
                <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
                <li><a class="dropdown-item" href="#">Mis pedidos</a></li>
                <li><a class="dropdown-item" href="#" id="logout-link">Cerrar sesión</a></li>
            `;
        } else {
            accountMenu.innerHTML = `
                <li><a class="dropdown-item" href="Login.html">Ingresar</a></li>
                <li><a class="dropdown-item" href="Registry.html">Registrarse</a></li>
            `;
        }
    }

    renderAccountMenu();

    accountMenu.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'logout-link') {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
            localStorage.removeItem('correo');
            renderAccountMenu();
            window.location.reload();
        }
    });

});