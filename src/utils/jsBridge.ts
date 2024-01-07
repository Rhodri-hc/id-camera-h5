export interface TJsBridge {
  os: {
    isAndroid: boolean;
    isIOS: boolean;
  };
  mapCallbacks: Record<string, any>;
  postBridgeCallback: (key: string, data: any) => any;
  sendCommand: (command: any, params: any, callback: (...args: any[]) => void) => void;
}

const jsBridge: TJsBridge = {
  // 系统判断
  os: {
    isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
    isIOS: Boolean(navigator.userAgent.match(/iphone|ipod|iOS/gi)),
  },
  // 回调 map
  mapCallbacks: {},
  // 移动端调用的回调函数, key 值在第 3 步下发
  postBridgeCallback: function (key, data) {
    const obj = jsBridge.mapCallbacks[key];
    if (obj.callback) {
      const result = obj.callback(data);
      delete jsBridge.mapCallbacks[key];
      return result;
    } else {
      console.log('jsBridge postBridgeCallback', 'callback not found: ' + key);
    }
  },
  // 1. 发送命令，提供了命令格式的封装
  sendCommand: function (command, params, callback) {
    const message: Record<string, any> = {
      command: command,
    };
    if (params && typeof params === 'object') {
      // 支持传参
      message['params'] = params;
    }
    if (callback && typeof callback === 'function') {
      // 支持回调
      const key = generateCallbackKey(); // 2. 生成回调 key，存到 mapCallbacks 中
      jsBridge.mapCallbacks[key] = { callback: callback };
      // 3. 回调函数的 key 封到参数中给移动端
      if (message['params'] && typeof message['params'] === 'object') {
        message['params']['bridgeCallback'] = key;
      } else {
        message['params'] = { bridgeCallback: key };
      }
    }
    if (jsBridge.os.isAndroid) {
      // 4. android 桥接通信，转换成 json 字符串格式
      window.dnwx && window.dnwx.sendCommand(JSON.stringify(message));
    } else if (jsBridge.os.isIOS) {
      // ios 桥接
    }
  },
};

// 5. 移动端调用的回调函数, key 值在第 3 步下发

// 生成回调 key，使用日期 + 随机码防止并发重复
function generateCallbackKey() {
  return 'bridgeCallback_' + new Date().getTime() + '_' + randomCode();
}

// 随机码
function randomCode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}
export { generateCallbackKey };
export default jsBridge;
