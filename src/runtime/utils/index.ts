export const isString = (val: unknown): val is string => typeof val === 'string';
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export const isArray = Array.isArray;
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';
export const camelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

export const capitalize = (str: string) => {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<string>;
}
export const hyphenate = (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
