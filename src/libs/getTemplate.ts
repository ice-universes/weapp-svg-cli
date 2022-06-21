const file = require('../template/weapp');

module.exports = {
  // 读取模板文件内容
  getTemplate(type: string) {
    return file[type];
  },
};
