// Fonction pour acheter une œuvre
function acheter(nomOeuvre, prix) {
    alert(`Merci ! Vous avez sélectionné "${nomOeuvre}" pour ${prix}€.\n\nVous serez redirigé vers PayPal pour finaliser votre achat.\n\nAprès paiement, vous recevrez votre fichier en haute résolution immédiatement.`);
    
    // Ici, tu pourrais intégrer un vrai système de paiement PayPal
    // Pour le moment, c'est juste une démo
    console.log(`Achat en cours: ${nomOeuvre} - ${prix}€`);
}

// Fonction pour envoyer un message de contact
function envoyerMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const nom = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;
    
    alert(`Merci ${nom} !\n\nTon message a été reçu.\nJe te répondrai bientôt à ${email}.`);
    
    // Ici, tu pourrais envoyer les données à un serveur
    console.log(`Message de ${nom} (${email}): ${message}`);
    
    form.reset();
}

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.œuvre-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Ajouter l'animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);