// EXERCICE DARK / LIGHT MODE
/*let title = document.getElementById('title')
title.innerHTML = "IIM" // perchanger info après clic ou autres animations


title = document.querySelector("#title")
title.addEventListener("click", function() {
    console.log("element cliqué")
    this.classList.toggle('red')
})
// test comme pour le texte en rouge mais pour le dark mode
let bouton = document.getElementById('bouton')
bouton = document.querySelector('#bouton')
bouton.addEventListener("click",function myFunction() { // lorsque le bouton est cliqué
    console.log("element cliqué") // affiche qu'il est cliqué
    let element = document.body; // sélectionne et modifie le body (et pas seulement le bouton)
    element.classList.toggle("dark_mode"); // switch entre le dark mode et le mode de base (light)
}

    
)*/
/*
let image = document.getElementById('image')
image.src = 'img/iim.webp'
*/

/************************************************************************************************************************* */
// gestion du bouton du dark / light mode
let switchButton = document.getElementById('bouton')
switchButton.addEventListener('click', function(){
  document.body.classList.toggle('dark_mode')

  if(this.classList.contains('light')){
    this.classList.remove('light')
    this.classList.add('dark')
  }else{
    this.classList.remove('dark')
    this.classList.add('light')
  }
})
let mainElement = document.getElementById('gestion_index')
switchButton.addEventListener('click', function(){
  mainElement.body.classList.toggle('dark_mode')

  let mainTexteElement = mainElement.querySelectorAll('Texte')
  mainTexteElement.forEach(function(element){
    element.classList.toggle('dark_mode')
  })

})

/************************************************************************************************************************* */
//EXERCICE TABS

var tablinks = document.querySelectorAll('.tablink');
var tabcontents = document.querySelectorAll('.tabcontent');

// Verifie si ca a bien ete clique (ajoute ce test a chaque tabs)
tablinks.forEach(function(tablink, index) {
    tablink.addEventListener('click', function() {
        // retire la classe 'active' de tous les tabs 
        tablinks.forEach(function(link) {
            link.classList.remove('active');
        });
        tabcontents.forEach(function(content) {
            content.classList.remove('active');
        });

        // Met 'actif' la classe du tab clique correspondant 
        var tabId = this.classList[1]; // Prends le nom de la classe
        var tabContent = document.getElementById(tabId); // trouve le tab correspondant
        this.classList.add('active');
        tabContent.classList.add('active');
    });
});


/************************************************************************************************************************* */
// EXERCICE SWIPER

//<!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next", //fait en sorte que ça passe bien à la slide suivante
      prevEl: ".swiper-button-prev", // pareil mais avec la slide précédente
    },
});

/************************************************************************************************************************* */
// EXERCICE FETCH Requete Fetch
/*
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json)
  .then((data) => {
    console.log(data)
  })
*/

/*
// Fetch nom et image du pokemon demande
function fetchPokemon(pokemon){
  return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => response.json())
}

async function displayPokemon(pokemon){
  const data = await fetchPokemon(pokemon)
  document.getElementById("pokemon").innerHTML = `
  <h1>${data.name}</h1>
  <img src="${data.sprites.front_default}" alt="${data.name}" />
  `
}

displayPokemon('pikachu')
*/


//fonctionne mais n'affiche qu'un seul perso
/*Ici c'est les personnages dans le swiper*/

/*Swiper avec Harry*/
function fetchHP(HP){
  return fetch('https://hp-api.lainocs.fr/characters/' + HP)
    .then((response) => response.json())
}

async function displayHP(HP){
  const data = await fetchHP(HP)
  document.getElementById("sorciers_swiper").innerHTML += `
  <img  class="imageImportee_swiper" src="${data.image}" alt="${data.name}" />
  `
}
displayHP('harry-potter')

/*Swiper avec Voldemort*/
function fetchHP2(HP){
  return fetch('https://hp-api.lainocs.fr/characters/' + HP)
    .then((response) => response.json())
}

async function displayHP2(HP){
  const data = await fetchHP2(HP)
  document.getElementById("sorciers_swiper2").innerHTML += `
  <img  class="imageImportee_swiper" src="${data.image}" alt="${data.name}" />
  `
}
displayHP2('lord-voldemort')


/*Swiper avec Hermione*/
function fetchHP3(HP){
  return fetch('https://hp-api.lainocs.fr/characters/' + HP)
    .then((response) => response.json())
}

async function displayHP3(HP){
  const data = await fetchHP3(HP)
  document.getElementById("sorciers_swiper3").innerHTML += `
  <img  class="imageImportee_swiper" src="${data.image}" alt="${data.name}" />
  `
}
displayHP3('hermione-granger')

/*permet d'afficher la collection de l'utilisateur*/
function fetchHPCollection(HP){
  return fetch('https://hp-api.lainocs.fr/characters/' + HP)
    .then((response) => response.json())
}

async function displayHPCollection(HP){
  const data = await fetchHPCollection(HP)
  document.getElementById("sorciersCollection").innerHTML += `
  <p class="imageImportee">${data.id}</p>
  <h4 class="imageImportee">${data.name}</h4>
  <p class="imageImportee">${data.role}</p>
  <img  class="imageImportee" src="${data.image}" alt="${data.name}" />
  `
}

displayHPCollection('ginny-weasley')
displayHPCollection('remus-lupin')
displayHPCollection('lucius-malfoy')
displayHPCollection('lord-voldemort')



/*
// permet d'afficher 3 perso
function fetchHP(HP){
  return fetch('https://hp-api.lainocs.fr/characters/' + HP)
    .then((response) => response.json())
}

async function displayHP(HP){
  const data = await fetchHP(HP)
  document.getElementById("sorciers").innerHTML += `
  <h1>${data.name}</h1>
  <p>${data.role}</p>
  <img  class="imageImportee" src="${data.image}" alt="${data.name}" />
  `
}

displayHP('hermione-granger')
displayHP('harry-potter')
displayHP('ron-weasley')
*/
//faut faire un for i et au lieu de mettre objet bah faut mettre [i] (comme avec les listes lol)
// faut prendre l'id


/*permet de récupérer toutes les cartes*/
function fetchAll(){
  return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response) => response.json())
}

async function displayAll(){
  const data = await fetchAll()
  // const size = data.lenght
  const size = data.lenght
  console.log(size)
  // boucle for i = 0 ; size; data[i]
  for (let i = 0; i<31; i++){
    document.getElementById("sorciers").innerHTML += `
    <div class="toutesCartes">
      <h1 class="toutesCartes">${data[i].name}</h1>
      <p class="toutesCartes">${data[i].role}</p>
      <img  class="imageImportee" src="${data[i].image}" alt="${data.name}" />
    </div>
    `
  }
}

displayAll()
// boucle for; data.lenght; 












