const path = require("path")


console.log(path.sep);

const filepath = path.join("content", "filepath", "text.txt")
console.log(filepath);

const base = path.basename(filepath)
console.log(base);


const absolute = path.resolve(__dirname, "content", "filepath", "text.txt")

console.log(absolute);
