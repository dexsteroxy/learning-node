const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, results) => {
  if (err) {
    console.log(err);
  }

  const first = results;
  readFile("./content/second.txt", "utf8", (err, results) => {
    if (err) {
      console.log(err);
    }
    const second = results;

    writeFile(
      "./content/kaka.txt",
      `this is for the exsynckines ${first}, and ${second}`,
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(results);
      }
    );
  });
});