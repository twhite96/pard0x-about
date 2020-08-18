var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Tiffany, and I am a frontend engineer and wannabe hacker.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  // .typeString('My name is Tiffany, and I am a frontend dev and wannabe hacker.')
  .deleteAll(1)
  .typeString('I worked for <strong>[REDACTED]</strong> as a frontend engineer, and I code, write, and shoot and edit videos on weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="https://tiffanywhite.dev">Blog</a> <br />')
  .typeString('<a href="https://www.tiffanyrwhite.com">Portfolio</a> <br />')
  .typeString('<a href="https://resume.tiffanyrwhite.com">Resume</a> <br />')
  .typeString('<a href="https://linkedin.com/in/tiffanyrwhite">LinkedIn</a> <br />')
  .typeString('<a href="https://twitter.com/tiffanywhitedev">Twitter</a> <br />')
  .typeString('<a href="https://codepen.io/tiffanywhitedev">Instagram</a> <br />')
  .typeString('<a href="https://codesandbox.io/u/twhite96">Codesandbox</a> <br />')
  .typeString('<a href="https://github.com/twhite96">GitHub</a> <br />')
  .typeString('<a href="https://glitch.com/@tiffany">Glitch</a> <br />')
  .pauseFor(1000)
