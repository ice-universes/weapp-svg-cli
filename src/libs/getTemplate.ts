const fs = require('fs');
const path = require('path');

module.exports = {
  // 读取模板文件内容
  getTemplate(fileName: string) {
    return fs
      .readFileSync(path.join(__dirname, `../template/${fileName}.template`))
      .toString();
  },
};

export {};
