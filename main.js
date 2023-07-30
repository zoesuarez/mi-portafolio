let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrolladora Front-End interesada en el avance tecnológico y ambiental')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  