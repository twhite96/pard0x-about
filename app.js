var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  strings: ['My name is Tiffany, and I am a frontend dev and wannabe hacker.']
});

typewriter
  .pauseFor(50)
  // .typeString('My name is Tiffany, and I am a frontend dev and wannabe hacker.')
  .deleteAll(1)
  .typeString('I work for <strong>[REDACTED]</strong> as a frontend dev, and I code, write, and shoot and edit videos on weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="https://tiffanywhite.dev">Blog</a> <br />')
  .typeString('<a href="https://www.tiffanyrwhite.com">Portfolio</a> <br />')
  .typeString('<a href="https://resume.tiffanyrwhite.com">Resume</a> <br />')
  .typeString('<a href="http://linkedin.com/in/tiffanyrwhite">LinkedIn</a> <br />')
  .typeString('<a href="http://twitter.com/tiffanywhitedev">Twitter</a> <br />')
  .typeString('<a href="http://instagram.com/tiffanywhitedev">Instagram</a> <br />')
  .typeString('<a href="http://github.com/twhite96">GitHub</a> <br />')
  .pauseFor(1000)
