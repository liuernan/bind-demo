const myBind = require('../src/index.js');

Function.prototype.myBind = myBind;

test1('✅ 1.️ myBind 是一个函数');

function test1(msg) {
  const fn = () => {};

  console.assert(typeof fn.myBind === 'function');

  console.log(msg);
};
