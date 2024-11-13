const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", 'utf-8')

const second = readFileSync("./content/second.txt", 'utf-8')



writeFileSync("./content/business.txt", `Node will create this file for ${first} and ${second}`, {flag:"a"})

