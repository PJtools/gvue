// ----- 扩展定义全局通用的函数方法 -----

// 将带传值的地址栏字符串解析转换成Object对象
export const url2object = url => {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};

export default { url2object };
