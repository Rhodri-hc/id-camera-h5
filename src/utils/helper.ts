// 判断参数类型
export const isType = (obj: never, type: string) => {
  return paramsTypeOf(obj) === type;
};

// 导出一个函数，用于获取参数的类型
export const paramsTypeOf = (obj: never) => {
  // 调用Object.prototype.toString.call方法，获取参数的类型
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// 导出一个函数，用于隐藏手机号
export const hideMobile = (mobile: string) => {
  // 使用正则表达式，将手机号中的前3位和后4位替换为****
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
};

// 导出一个函数，用于进入全屏
export const launchFullscreen = (element: any) => {
  // 如果浏览器支持requestFullscreen方法
  if (element.requestFullscreen) {
    // 则进入全屏
    element.requestFullscreen();
    // 如果浏览器支持mozRequestFullScreen方法
  } else if (element.mozRequestFullScreen) {
    // 则进入全屏
    element.mozRequestFullScreen();
    // 如果浏览器支持msRequestFullscreen方法
  } else if (element.msRequestFullscreen) {
    // 则进入全屏
    element.msRequestFullscreen();
    // 如果浏览器支持webkitRequestFullscreen方法
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
    // 则进入全屏
    element.webkitRequestFullscreen();
  }
};
// 导出一个函数，用于退出全屏
export const exitFullscreen = () => {
  // 如果document对象存在exitFullscreen方法，则调用该方法
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};
// 导出一个名为turnCase的函数，该函数接收两个参数：str和type，type的值可以是'Max'、'Min或'OneMax'
export const turnCase = (str: string, type: 'Max' | 'Min' | 'OneMax') => {
  // 根据type的值，进行不同的操作
  switch (type) {
    // 如果type的值为'Max'，则将字符串转换为大写
    case 'Max':
      return str.toUpperCase();
    // 如果type的值为'Min'，则将字符串转换为小写
    case 'Min':
      return str.toLowerCase();
    // 如果type的值为'OneMax'，则将字符串的第一个字符转换为大写，其余的字符转换为小写
    case 'OneMax':
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    // 如果type的值不是'Max'、'Min或'OneMax'，则返回原字符串
    default:
      return str;
  }
};

// 导出一个函数，用于获取url中的搜索参数
export const getSearchParams = (url: string = window.location.search) => {
  // 创建一个URLSearchParams对象，用于解析url中的参数
  const searchParams = new URLSearchParams(url);
  // 创建一个空对象，用于存放解析出来的参数
  const obj: Record<string, string> = {};
  // 遍历searchParams对象，将参数存入obj对象中
  for (const [key, value] of searchParams.entries()) {
    obj[key] = value;
  }
  // 返回obj对象
  return obj;
};

// 判断手机是Android还是iOS
// 导出一个函数，用于获取操作系统类型
export const getOSType = () => {
  // 获取用户代理
  const u = navigator.userAgent;
  // 判断是否是安卓
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  // 判断是否是iOS
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  // 如果是安卓
  if (isAndroid) {
    return 'Android';
  }
  // 如果是iOS
  if (isIos) {
    return 'iOS';
  }
  // 否则返回空字符串
  return '';
};

// 导出一个函数，用于去除数组中重复的对象
export const uniqueArrayObject = (arr = [], key: string) => {
  // 如果数组为空，则直接返回
  if (!arr.length) return;
  // 创建一个空对象
  const map = {};
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 如果map中不存在arr[i][key]，则将arr[i]添加到map中
    if (!map[arr[i][key]]) {
      map[arr[i][key]] = arr[i];
    }
  }
  // 返回map中的值
  return Object.values(map);
};

// 导出一个函数，用于滚动到顶部
export const scrollToTop = () => {
  // 获取当前文档的滚动高度
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  // 如果高度大于0，则继续执行
  if (height > 0) {
    // 请求动画帧
    window.requestAnimationFrame(scrollToTop);
    // 设置滚动位置
    window.scrollTo(0, height - height / 8);
  }
};

// 导出一个名为smoothScroll的函数，该函数接收一个HTMLElementTagNameMap类型的参数
export const smoothScroll = (element: keyof HTMLElementTagNameMap) => {
  // 使用document.querySelector方法查询传入的参数，并将其滚动到视图中
  document.querySelector(element)?.scrollIntoView({
    // 设置滚动的行为为平滑的
    behavior: 'smooth',
  });
};

// 导出一个uuid函数
export const uuid = () => {
  // 创建一个Blob对象
  const temp_url = URL.createObjectURL(new Blob());
  // 获取Blob对象的url
  const uuid = temp_url.toString();
  // 释放Blob对象
  URL.revokeObjectURL(temp_url);
  // 返回Blob对象的url，并去掉url中的blob:'前缀
  return uuid.substring(uuid.lastIndexOf('/') + 1);
};

export const formatMoney = (num: number, decimals: number, point: string, thousands_sep) => {
  const newNum = num.toString().replace(/[^0-9+-Ee.]/g, '');
  const n = isFinite(+newNum) ? 0 : +newNum;
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep;
  const dec = typeof point === 'undefined' ? '.' : point;
  let s;
  const toFixedFix = function (n: number, prec: number) {
    const k = Math.pow(10, prec);
    return '' + Math.ceil(n * k) / k;
  };
  // eslint-disable-next-line prefer-const
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

export class MyCache {
  private storage: Storage;
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key: string, value: any) {
    if (typeof value === 'object') value = JSON.stringify(value);
    this.storage.setItem(key, value);
  }

  getItem(key: string) {
    try {
      return JSON.parse(this.storage.getItem(key) as any);
    } catch (err) {
      return this.storage.getItem(key);
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index: number) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}
