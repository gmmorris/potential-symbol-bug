const mySymbol = Symbol('OMG');

function paint(obj) {
  obj[mySymbol] = true;
  return obj;
}

function isPainted(obj) {
  return obj[mySymbol] === true;
}

module.exports = {
  paint,
  isPainted
}