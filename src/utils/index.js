import markdownIt from 'markdown-it';

let globalMarkDownInstance = null;

/**
 * markdownIt 实例
 * @returns 
 */
export const getMarkDownIt = () => {
  if (!globalMarkDownInstance) {
    globalMarkDownInstance = markdownIt();
  }
  return globalMarkDownInstance;
}


