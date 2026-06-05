import fs from 'fs';

const fileContent = `"use strict";\nconst pkg = require("./index.js");\nmodule.exports = pkg;\n`;

for (const dir of fs
  .readdirSync('./dist')
  .filter((name) => !name.includes('.') && !(name === 'class')))
  fs.createWriteStream(`./dist/${dir}/index.cjs`).write(fileContent);

fs.createWriteStream('./dist/index.cjs').write(fileContent);
