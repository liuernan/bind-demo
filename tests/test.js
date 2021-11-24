const myBind = require('../src/index.js');

Function.prototype.myBind = myBind;

const fn = ()=>{}

console.log(fn.myBind);