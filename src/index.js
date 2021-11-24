function myBind(asThis) {
  const thisFn = this;
  return function () {
    return thisFn.call(asThis);
  }
};

module.exports = myBind;