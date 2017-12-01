// ----- 定义全局过滤|转义等接口 -----

// 将html标签字符串转换成文本字符串
export const html2Text = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText;
};

export default { html2Text };
