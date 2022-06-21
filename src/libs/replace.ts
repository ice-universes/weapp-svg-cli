module.exports = {
  // 替换字符串中 #size# 部分
  replaceSize(content: string, size: number) {
    return content.replace(/#size#/g, String(size));
  },

  // 替换 #name# 成 xxx | xxx | ...
  replaceNames(content: string, names: string[]) {
    return content.replace(/#names#/g, names.join(' | '));
  },
};
