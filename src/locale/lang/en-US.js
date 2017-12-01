import setLang from '../lang';
import iviewEnUS from 'iview/dist/locale/en-US';

const lang = {
  ...iviewEnUS,
  g: {
    locale: 'en-US',
    // 消息提示
    message: {
      // 表单验证错误提示
      validate: {
        no_empty: '{0} cannot be empty.',
        min_len: '{0} length must not be less than {1} bits.',
        max_len: '{0} length must not be greater than {1} bits.'
      },
      // 输入提示
      placeholder: 'Please input {0}...',
      // 错误提示
      error: {
        auth: 'The token is invalid or incorrect, Please login again.',
        grant: 'Authentication is not passed, no permission to access, Please login again.',
        args: '[{0}]Method arguments error.',
        login_non_exist: 'The username does not exist or the password is incorrect.'
      }
    },
    // 常用名词
    noun: {
      login: 'Login',
      username: 'Username',
      pwd: 'Password'
    }
  }
};

setLang(lang);

export default lang;
