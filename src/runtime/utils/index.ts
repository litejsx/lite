export const isString = (value: any) => Object.prototype.toString.call(value) === '[object String]';
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export function normalizeContainer(
  container: Element | string
): Element | null {
  if (isString(container)) {
    return document.querySelector(container as string)
  }

  return container as Element
}