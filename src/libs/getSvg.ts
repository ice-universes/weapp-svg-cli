const chalk = require('chalk');
const { readAllFiles, R } = require('./utils');

// 抽取 svg 内路径
function getSvg(svg: string): string | void {
  const re = /<svg.*viewBox="(?<viewBox>.+?)".*?>(?<content>.+?)<\/svg>/g;
  const p: any = re.exec(svg.replace(/[\r\n]/g, ''));

  if (p) {
    const {
      groups: { viewBox, content },
    } = p;

    const s = content.replace(/\"/g, "'").replace(/\t/g, '');

    return `<svg viewBox='${viewBox}' xmlns='http://www.w3.org/2000/svg'>${s}</svg>`
      .replace(/</g, '%3C')
      .replace(/>/g, '%3E')
      .replace(/#/g, '%23');
  }

  console.error(chalk.red('Invalid SVG.'));
}

// 获取路径下全部的 svg 文件, 并生成 dom 字符串
function getSvgs(path: string) {
  const svgs: Array<typeof R> = readAllFiles(path),
    dom: string[] = [],
    names: string[] = [];

  for (let i = 0; i < svgs.length; i++) {
    const content = getSvg(svgs[i].svg);

    if (content) {
      dom.push(
        `<!--${svgs[i].id}-->\n<view wx:if="{{name === '${svgs[i].id}'}}" style="width:{{size}}px;height:{{size}}px;background:url({{quote}}data:image/svg+xml;utf8,${content}{{quote}})" class="icon"></view>`
      );

      names.push(svgs[i].id);

      console.log(
        `${chalk.green('√')} Generated icon "${chalk.yellow(svgs[i].id)}"`
      );
    }
  }

  return { names, dom };
}

module.exports = {
  getSvgs,
};

export {};
