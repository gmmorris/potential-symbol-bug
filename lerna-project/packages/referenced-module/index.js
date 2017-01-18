const moduleWithSymbol = require('gmmorris-symbol-module');

module.exports = {
  paint: (objectToPaint) => {
    return moduleWithSymbol.paint(objectToPaint);
  },
  isPainted: (objectToPaint) => {
    return moduleWithSymbol.isPainted(objectToPaint);
  }
}
