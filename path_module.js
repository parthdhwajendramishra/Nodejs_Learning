const path = require("path");

// Gives seperators i.e. / in ubuntu
console.log(path.sep)

// path.join joins different paths

const filePath=path.join('/sampleFolder','subFolder','text.txt');
console.log(filePath);


//basename will give only last file or folder
const base=path.basename(filePath);
console.log(base);

const absolute =path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);