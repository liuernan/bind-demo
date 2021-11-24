function myBind(asThis, ...args) {
  const thisFn = this;
  return function () {
    return thisFn.call(asThis, ...args);
  }
};

module.exports = myBind;