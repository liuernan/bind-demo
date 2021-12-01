function myBind(asThis) {
  const thisFn = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const otherArgs = Array.prototype.slice.call(arguments, 0);
    return thisFn.apply(asThis, args.concat(otherArgs));
  };
};

module.exports = myBind;