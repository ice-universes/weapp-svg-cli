const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const targetFile = path.resolve('./config.json');

const json = `{
  "dir": "./assets",
  "save_dir": "./weather-icon",
  "default_size": 18
}`;

if (fs.existsSync(targetFile)) {
  console.error(chalk.red(`config.json already exists.`));
} else {
  fs.writeFile(targetFile, json, (err: Error) => {
    if (err) throw err;

    console.clear();
    console.log(chalk.green(`🎉 config.json created successfully.`));
  });
}

export {};
