// eslint-disable-next-line @typescript-eslint/ban-types
const serialize = (value: unknown): value is Function => typeof value === 'function';
const isBoolean = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Boolean]';
};

const isNull = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Null]';
};

const isUndefined = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Undefined]';
};

const isNumber = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Number]';
};

const isString = (val: any) => {
  return Object.prototype.toString.call(val) === '[object String]';
};

export const isObject = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

const isArray = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Array]';
};

const isNullString = (val: string) => {
  return val === 'null';
};

const isUndefinedString = (val: string) => {
  return val === 'undefined';
};

const isBooleanString = (val: string) => {
  return val === 'false' || val === 'true';
};

const isObjectString = (val: string) => {
  try {
    return isObject(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const isArrayString = (val: string) => {
  try {
    return isArray(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const stringify = (val: any) => {
  if (isUndefined(val)) {
    return 'undefined';
  } else if (isNull(val)) {
    return 'null';
  } else if (isBoolean(val)) {
    return val ? 'true' : 'false';
  } else if (isNumber(val)) {
    return isFinite(val) ? val : '';
  } else if (isObject(val) || isArray(val)) {
    return JSON.stringify(val);
  } else if (isString(val)) {
    return val;
  } else {
    return '';
  }
};

const parse = (val: any) => {
  if (isUndefinedString(val)) {
    return undefined;
  } else if (isNullString(val)) {
    return null;
  } else if (isBooleanString(val)) {
    return val === 'true';
  } else if (isArrayString(val)) {
    return JSON.parse(val);
  } else if (isObjectString(val)) {
    return JSON.parse(val);
  } else {
    return val;
  }
};

const objectToQuery = (obj = {}) => {
  return Object.keys(obj).reduce((result, key) => {
    // @ts-ignore
    const value = obj[key];
    const encodeValue = encodeURIComponent(stringify(value));
    return result ? `${result}&${key}=${encodeValue}` : `${key}=${encodeValue}`;
  }, '');
};
function isEmpty(value: any[] | null) {
  if (value == null) {
    return true;
  }
  if (
    isArray(value) &&
    (isArray(value) || typeof value == 'string' || typeof value.splice == 'function')
  ) {
    return !value.length;
  }

  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
export { parse, stringify, objectToQuery, isEmpty };

export default serialize;
