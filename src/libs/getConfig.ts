const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

export interface Config {
  dir: string;
  save_dir: string;
  default_size: number;
}

let cacheConfig: Config;

module.exports = {
  getConfig() {
    if (cacheConfig) return cacheConfig;

    const targetFile = path.resolve('./config.json');

    // 配置文件不存在
    if (!fs.existsSync(targetFile)) {
      console.warn(
        chalk.red(
          `😭 File config.json doesn't exist. Use 'ice--init' to generate a template.`
        )
      );
      process.exit(1);
    }

    const config = require(targetFile) as Config;

    if (!fs.existsSync(path.resolve(config.dir))) {
      console.warn(chalk.red("😅 Folder doesn't exist."));
      process.exit(1);
    }

    config.default_size = config.default_size ?? 20;
    config.save_dir = config.save_dir ?? './icon';

    cacheConfig = config;

    return config;
  },
};

export {};
