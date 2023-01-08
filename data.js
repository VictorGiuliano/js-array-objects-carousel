/*
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container
e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo
e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia 
verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca
la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare 
alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.*/
const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
const sources = [
  'img/01.webp',
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
]


const prev = document.getElementById('prev');
const next = document.getElementById('next');
const gallery = document.querySelector('#carousel .gallery');
const images = document.querySelectorAll('.gallery img');

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

let imageElement = '';
for(let i=0; i<sources.length;i++){
imageElement +=  `<img src="${sources[i]} " alt = "">`;
}
gallery.innerHTML = imageElement;


next.addEventListener('click',function(){
  images[currentActiveIndex].classList.remove('active');
  currentActiveIndex++;

  if(currentActiveIndex === images.length){
    currentActiveIndex = 0;
  }

  images[currentActiveIndex].classList.add('active');

})

prev.addEventListener('click',function(){
  images[currentActiveIndex].classList.remove('active');
  currentActiveIndex--;

  if(currentActiveIndex < 0) currentActiveIndex = images.length -1;

  images[currentActiveIndex].classList.add('active');

})