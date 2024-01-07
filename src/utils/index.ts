/**
 * type: String、Number、Boolean、Null、Undefined、Array、Object、Map、Set、Function、Date、Promise、Error、FormData
 * useage: isType('Number')(1) // true
 */

// 判断变量类型
type Types =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Null'
  | 'Undefined'
  | 'Array'
  | 'Object'
  | 'Map'
  | 'Set'
  | 'Function'
  | 'Date'
  | 'Promise'
  | 'Error'
  | 'FormData'
  | 'Blob';

export const isType =
  (type: Types) =>
  (target: any): boolean =>
    `[object ${type}]` === Object.prototype.toString.call(target);

// 平铺数据结构
export const flatTree = (data: any[], childrenField = 'children') => {
  return data.reduce((prev: any[], next: any) => {
    prev.push(next);
    if (next[childrenField]) {
      const arr = flatTree(next[childrenField], childrenField);
      arr.forEach((item) => prev.push(item));
    }
    return prev;
  }, []);
};

/**
 * 延迟多少毫秒后继续执行
 * @return {Promise}
 */

export function sleep(time = 300) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* 检查是否是图片文件*/
export function checkIsImage(str: string) {
  return /\.(jpg|jpeg|png|gif|webp|bmp|svg)/g.test(str);
}

export function objectToString(param: Record<string, any>) {
  return isType('Object')(param) && !isType('Null')(param) ? JSON.stringify(param) : '{}';
}
export function timestampToTime(timestamp: number) {
  const date = new Date(timestamp); // 时间戳为秒，需要乘以1000转为毫秒
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hour = ('0' + date.getHours()).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  const second = ('0' + date.getSeconds()).slice(-2);
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
export const strParse = (str: string) =>
  JSON.parse(str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/'/g, '"'));
export function downloadApk(url: string) {
  const link = document.createElement('a');
  link.href = url;
  // link.download = 'app.apk';
  link.click();
}

export const getURLParameters = (url: string) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: Record<string, any>, v: string) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {},
  );
export const smoothScroll = (element: string) =>
  document.querySelector(element)?.scrollIntoView({
    behavior: 'smooth',
  });
export const copyToClipboard = (str: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};
export const fullscreen = (mode = true, el = 'body') =>
  mode ? document.querySelector(el)?.requestFullscreen() : document.exitFullscreen();

// 复制文本
export const copyText = (value: string) => {
  // 动态创建 textarea 标签
  const textarea = document.createElement('textarea');
  // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
  textarea.readOnly = true;
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  // 将要 copy 的值赋给 textarea 标签的 value 属性
  textarea.value = value;
  // 将 textarea 插入到 body 中
  document.body.appendChild(textarea);
  // 选中值并复制
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  document.execCommand('Copy');
  document.body.removeChild(textarea);
};
