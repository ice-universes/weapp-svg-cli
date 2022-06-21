const fs = require('fs');
const path = require('path');
const { getSvgs } = require('./getSvg');
const { Config } = require('./getConfig');
const { getTemplate } = require('./getTemplate');
const { deleteAllFiles } = require('./utils');
const { replaceNames, replaceSize } = require('./replace');
const chalk = require('chalk');

// 生成小程序组件
module.exports = {
  generateComponent(config: typeof Config) {
    const dir = path.resolve(config.dir);
    const saveDir = path.resolve(config.save_dir);
    const fileName = 'index';

    // 创建文件夹
    fs.mkdir(saveDir, { recursive: true }, (err: Error) => {
      if (err)
        console.error(`😭 Folder ${chalk.green(saveDir)} created failed.`);
      process.exit(1);
    });

    // 删除目录下已经存在的文件
    deleteAllFiles(saveDir);

    const res = getSvgs(dir);

    // 创建文件
    fs.writeFileSync(
      path.join(saveDir, `${fileName}.wxss`),
      getTemplate('weapp.wxss')
    );

    fs.writeFileSync(
      path.join(saveDir, `${fileName}.wxml`),
      res.dom.join('\n').toString()
    );

    // 替换 js 模板中的 #name# 和 #size# 字段
    let jsFile = getTemplate('weapp.js');
    jsFile = replaceSize(jsFile, config.default_size);
    jsFile = replaceNames(jsFile, res.names);

    fs.writeFileSync(path.join(saveDir, `${fileName}.js`), jsFile);

    fs.writeFileSync(
      path.join(saveDir, `${fileName}.json`),
      getTemplate('weapp.json')
    );

    console.log(
      [
        '',
        `${chalk.green('√')} All icons have been putted into dir: ${chalk.green(
          config.save_dir
        )}`,
        '',
      ].join('\n')
    );
  },
};

export {};
