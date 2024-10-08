import markdownIt from 'markdown-it';
import { createHighlighter } from 'shiki'

// 代码高亮对象
const highlighter = await createHighlighter({
  themes: ['vitesse-light'],
  langs: ['javascript'],
});

/**
 * 同步方法，代码高亮，返回 html 字符串
 * reference: https://shiki.tmrs.site/guide/install
 * @param {*} str 
 * @returns 
 */
const getHighlightCodeSync = (str) => {
  return highlighter.codeToHtml(str, {
    lang: 'javascript',
    theme: 'vitesse-light'
  });
}

let globalMarkDownInstance = null;

/**
 * markdownIt 实例
 * @returns 
 */
export const getMarkDownIt = () => {
  if (!globalMarkDownInstance) {
    // reference: https://markdown-it.docschina.org/api/MarkdownIt.html#markdownit-new
    // markdownIt 需要其他包提供代码高亮能力
    globalMarkDownInstance = markdownIt({
      highlight: (str) => {
        const codeHtml = getHighlightCodeSync(str);
        return `<div style="font-size: 14px">${codeHtml}</div>`
      },
    });
  }
  return globalMarkDownInstance;
}

let globalCodeHighlighter =  null;

/**
 * 获取代码高亮实例
 * @returns 
 */
export const getGlobalCodeHighlighter = async () => {
  if (!globalCodeHighlighter) {
    // `createHighlighter` 是异步的，它会初始化高亮器
    // 并加载指定的语言和主题。
    globalCodeHighlighter = await createHighlighter({
      themes: ['vitesse-light'],
      langs: ['javascript'],
    })
  }

  return globalCodeHighlighter;
}

/**
 * 使用 shiki 代码高亮包，将传入的代码字符串转换成有高亮效果的 html 字符串
 * 注意这里是一个异步函数
 * reference: https://shiki.tmrs.site/guide/install#%E9%AB%98%E4%BA%AE%E5%99%A8%E7%94%A8%E6%B3%95
 * @param {string} code 
 */
export const getCodeHtml = async (code) => {
  // 获取高亮实例
  const instance = await getGlobalCodeHighlighter();
  // 对 codeToHtml 方法封装，简化传参
  // 注意这里 instance 有可能是 null, 使用 ? 保证代码不报错
  return instance?.codeToHtml(code, {
    lang: 'javascript',
    theme: 'vitesse-light'
  }) || '';
}


