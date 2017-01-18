const moduleWithSymbol = require('gmmorris-symbol-module');
//check
module.exports = {
  paint: (objectToPaint) => {
    return moduleWithSymbol.paint(objectToPaint);
  },
  isPainted: (objectToPaint) => {
    return moduleWithSymbol.isPainted(objectToPaint);
  }
}
