const maya = require('./information.js');


let cowsay = require("cowsay");

console.log(cowsay.think({
  text : `Hello I am ${maya.name} and I am a student in ${maya.campus}`,
  e : "oO",
  T : "U ",
}));


