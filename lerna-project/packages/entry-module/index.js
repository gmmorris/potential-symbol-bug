const referencesModule = require('referenced-module');
const paintWithSymbol = require('gmmorris-symbol-module');

const objectToPaintViaReferencedModule = referencesModule.paint({}) 
const objectToPaint = paintWithSymbol.paint({}) 

console.log(`Is objectToPaintViaReferencedModule painted? ${referencesModule.isPainted(objectToPaintViaReferencedModule) ? 'Yes' : 'No'}`);
console.log(`Is objectToPaint painted? ${paintWithSymbol.isPainted(objectToPaint) ? 'Yes' : 'No'}`);

console.log(`Does the paint work via both modules? ${referencesModule.isPainted(objectToPaint) && paintWithSymbol.isPainted(objectToPaintViaReferencedModule) ? 'Yes' : 'No'}`)
