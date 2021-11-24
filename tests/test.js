const myBind = require('../src/index.js');

Function.prototype.myBind = myBind;

test1('✅ 1.️ myBind 是一个函数');
test2('✅ 2.️ myBind 接受的第一个参数作为 this 传给新的 fn');

function test1(msg) {
  const fn = () => {};

  console.assert(typeof fn.myBind === 'function');

  console.log(msg);
}

function test2(msg) {
  const fn = function () {
    return this;
  };
  const fn2 = fn.myBind({name: '二男'});

  console.assert(fn2().name === '二男');

  console.log(msg);
}