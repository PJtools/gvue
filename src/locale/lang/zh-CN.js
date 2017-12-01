import setLang from '../lang';
import iviewZhCN from 'iview/dist/locale/zh-CN'

const lang = {
  ...iviewZhCN,
  g: {
    locale: 'zh-CN',
    // 消息提示
    message: {
      // 表单验证错误提示
      validate: {
        no_empty: '{0}不能为空.',
        min_len: '{0}长度不能小于{1}位.',
        max_len: '{0}长度不能大于{1}位.'
      },
      // 输入提示
      placeholder: '请输入{0}...',
      // 错误提示
      error: {
        auth: 'Token令牌失效或不正确，请重新登录.',
        grant: '身份验证不通过，无权限访问，请重新登录.',
        args: '[{0}]方法输入参数错误.',
        login_non_exist: '用户名不存在或密码错误.'
      }
    },
    // 常用名词
    noun: {
      login: '登录',
      username: '用户名',
      pwd: '密码'
    }
  }
};

setLang(lang);

export default lang;
