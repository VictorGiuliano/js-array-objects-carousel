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
const sources = [
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

function changePic(target){
  galleryFigures[currentActiveIndex].classList.remove('active');
  thumb[currentActiveIndex].classList.remove('active');

  if(target === 'next'){
    currentActiveIndex++;

    if(currentActiveIndex === galleryFigures.length)currentActiveIndex = 0;
  } else if(target === 'prev'){
    currentActiveIndex--;

    if(currentActiveIndex < 0) currentActiveIndex = galleryFigures.length -1;
  }else{
    currentActiveIndex = target;
  }

  galleryFigures[currentActiveIndex].classList.add('active');
  thumb[currentActiveIndex].classList.add('active');

}
const startAutoplay = () => {
  autoPlay = setInterval(() =>{
    changePic('next');
  },3000);
}
const stopAutoplay = () => {
  clearInterval(autoPlay);
  isPlaying = false;
  autoplayButton.innerText = 'RESUME AUTOPLAY';
}


const prev = document.getElementById('prev');
const next = document.getElementById('next');
const autoplayButton = document .getElementById('autoplay-button');

const gallery = document.querySelector('#carousel .gallery'); 
const thumbGallery = document.getElementById('thumbnails');

let galleryElement = '';
let thumbElement = '';

sources.forEach((source, i) => { 
  const img = `<img src="${source.image} " alt = "">`;
  thumbElement += img;
  galleryElement += `
  <figure>
    ${img}
    <figcaption>
      <h2>${source.title}</h2>
      <h3>${source.text}</h3>
    </figcaption>
  </figure> `;
});



gallery.innerHTML = galleryElement;
thumbGallery.innerHTML = thumbElement;



const galleryFigures = document.querySelectorAll('.gallery figure');
const thumb = document.querySelectorAll('#thumbnails img');
let currentActiveIndex = 0;
galleryFigures[currentActiveIndex].classList.add('active');
thumb[currentActiveIndex].classList.add('active');

let autoPlay;

startAutoplay();


let isPlaying = true;


autoplayButton.addEventListener('click',function(){
  isPlaying = !isPlaying;

  if(!isPlaying){
    autoplayButton.innerText = 'RESUME AUTOPLAY';
    clearInterval(autoPlay);
  }else{
    autoplayButton.innerText = 'SET AUTOPLAY';
    startAutoplay();
  }
})

next.addEventListener('click',function(){
  stopAutoplay();
  changePic('next');
});

prev.addEventListener('click',function(){ 
  stopAutoplay();
  changePic('prev');
});

for(let i=0; i<thumb.length;i++){
  const thum = thumb[i];

  thum.addEventListener('click', function(){
    stopAutoplay();
    changePic(i);
  });
}



 