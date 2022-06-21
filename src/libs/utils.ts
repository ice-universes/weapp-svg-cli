const fs = require('fs');
const path_ = require('path');

// 删除某个目录下所有文件, path: 绝对路径
function deleteAllFiles(path: string) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    files.forEach((file: string) => {
      const curPath = path_.join(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        deleteAllFiles(curPath); // 递归删除文件夹
      } else {
        fs.unlinkSync(curPath); // 删除文件
      }
    });
  }
}

export interface R {
  id: string;
  svg: string;
}

// 读取目录下的全部 svg 文件, path: 绝对路径
function readAllFiles(path: string): Array<R> {
  const res: Array<R> = [];

  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    for (let i = 0; i < files.length; i++) {
      const curPath = path_.join(path, files[i]);

      if (fs.statSync(curPath).isDirectory()) {
        // 当前是文件夹
        res.push(...readAllFiles(curPath));
      } else {
        // 当前是 svg 文件
        if (files[i].match(/.*\.svg/)) {
          res.push({
            id: files[i].replace('.svg', ''), // 去掉文件后缀
            svg: fs.readFileSync(curPath, 'utf8'),
          });
        }
      }
    }
  }

  return res;
}

module.exports = { deleteAllFiles, readAllFiles };
