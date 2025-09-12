document.addEventListener("DOMContentLoaded", function() {

    // Mostrar/ocultar 
    const authMenu = document.getElementById('auth-menu');
    const profileMenu = document.getElementById('profile-menu');
    
    const estaAutenticado = localStorage.getItem('autenticado') === 'true';

    if (estaAutenticado) {
        if (authMenu) authMenu.classList.add('hidden');
        if (profileMenu) profileMenu.classList.remove('hidden');
    } else {
        if (authMenu) authMenu.classList.remove('hidden');
        if (profileMenu) profileMenu.classList.add('hidden');
    }

    //Filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        const productCards = document.querySelectorAll('.product-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                productCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || filter === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});