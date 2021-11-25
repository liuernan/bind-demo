function myBind(asThis, ...args) {
  const thisFn = this;
  return function (...otherArgs) {
    return thisFn.call(asThis, ...args, ...otherArgs);
  }
};

module.exports = myBind;