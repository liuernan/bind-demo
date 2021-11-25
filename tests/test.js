const myBind = require('../src/index.js');

Function.prototype.myBind = myBind;

test1('✅ 1.️ myBind 是一个函数');
test2('✅ 2.️ myBind 接受的第一个参数作为 this 传给新的 fn');
test3('✅ 3.️ myBind 接受的其余参数作为 args 传给新的 fn');
test4('✅ 3.️ myBind 支持 fn.myBind(asThis, args1) 之后调用时再传更多的参数');

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

function test3(msg) {
  const fn = function () {
    return arguments;
  };
  const args = ['args1', 2, [3], {args: 4}]
  const fn2 = fn.myBind(null, args[0], args[1], args[2], args[3]);

  console.assert(fn2()[0] === args[0]);
  console.assert(fn2()[1] === args[1]);
  console.assert(fn2()[2] === args[2]);
  console.assert(fn2()[3] === args[3]);

  console.log(msg);
}
function test4(msg) {
  const fn = function () {
    return arguments;
  };
  const args = ['args1', 2, [3], {args: 4}]
  const fn2 = fn.myBind(null, args[0], args[1]);

  console.assert(fn2()[0] === args[0]);
  console.assert(fn2()[1] === args[1]);
  console.assert(fn2(args[2])[2] === args[2]);
  console.assert(fn2(args[2], args[3])[3] === args[3]);

  console.log(msg);
}