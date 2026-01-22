import fs from "fs";

const dirs = fs
  .readdirSync("./dist")
  .filter((name) => !name.includes(".") && name !== "class");

for (const dir of dirs) {
  const subDirs = fs
    .readdirSync(`./dist/${dir}`)
    .filter((name) => !name.includes("."));

  for (const subDir of subDirs) {
    fs.createWriteStream(`./dist/${dir}/${subDir}/index.cjs`).write(
      `"use strict";\nconst pkg = require("./index.js");\nmodule.exports = pkg;\n`,
    );
  }

  fs.createWriteStream(`./dist/${dir}/index.cjs`).write(
      `"use strict";\nconst pkg = require("./index.js");\nmodule.exports = pkg;\n`,
    );
}

fs.createWriteStream("./dist/index.cjs").write(
  `"use strict";\nconst pkg = require("./index.js");\nmodule.exports = pkg;\n`,
);
