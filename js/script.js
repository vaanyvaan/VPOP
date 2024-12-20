let currentIndex = 0; // L'index de l'image visible
const slides = document.querySelectorAll('.slide'); // Sélectionner toutes les images
const totalSlides = slides.length; // Nombre total d'images
const slider = document.querySelector('.slider'); // Le conteneur du carrousel

// Fonction pour changer l'image affichée
function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Passer à l'image suivante
    updateSliderPosition(); // Mettre à jour la position du carrousel
}

// Fonction pour mettre à jour la position du slider
function updateSliderPosition() {
    // Décale les images vers la gauche
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Déplacer les images
}

// Défilement automatique toutes les 5 secondes
setInterval(changeSlide, 7000); // Change l'image toutes les 5 secondes


