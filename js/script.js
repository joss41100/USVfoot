let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Récupérez les éléments du DOM
const selectCalendrier = document.getElementById("selectCalendrier");
const tableauContainer = document.getElementById("tableauContainer");

// Les tableaux que vous souhaitez afficher
const tableaux = {
    calendrier1: "<table><tr><td>Tableau 1</td></tr></table>",
    calendrier2: "<table><tr><td>Tableau 2</td></tr></table>",
    calendrier3: "<table><tr><td>Tableau 3</td></tr></table>",
    calendrier4: "<table><tr><td>Tableau 4</td></tr></table>",
    calendrier5: "<table><tr><td>Tableau 5</td></tr></table>",
};

// Fonction pour afficher le tableau sélectionné
function afficherTableau() {
    const valeurSelectionnee = selectCalendrier.value;
    const tableauAAfficher = tableaux[valeurSelectionnee];
    tableauContainer.innerHTML = tableauAAfficher;
}

// Ajoutez un écouteur d'événements pour détecter les changements dans le menu déroulant
selectCalendrier.addEventListener("change", afficherTableau);

// Appelez la fonction pour afficher le tableau initial
afficherTableau();
