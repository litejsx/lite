import { isFunction, isArray, isString } from "./utils";
import { createText, appendChild } from "./nodeOps";
import { setProp } from "./propsOps";
import { createComponent } from "./component";

import type { Component } from "./component";

export type Props = {
  name?: string;
  [key: string]: unknown,
};

export function normalizeContainer(
  container: Element | string | null
): Element | null {
  if (isString(container)) {
    return document.querySelector(container as string);
  }

  return container as Element;
}

export function render(type: string | Component, containerOrSelector: HTMLElement| Element | string | null, init?: Props) {
  const container = normalizeContainer(containerOrSelector);

  if (container) {
    container.innerHTML = '';
    const child = createElement(type, init);

    if (child) {
      appendChild(child, container);
    }
  }
}

export function createElement(type: string | Component | null, props?: Props | null, children?: unknown): Element | null {
  if (!type) {
    return null;
  }
  let el: Element | null = null;
  if (isFunction(type)) {
    el = createComponent(type, props);
  } else {
    el = document.createElement(type);

    // set props
    for (const key in props) {
      setProp(el, key, props[key]);
    }
  }

  if (el && children) {
    if (!isArray(children)) {
      children = [children];
    }

    (children as (Element | string)[]).forEach(element => {
      if (element instanceof Element) {
        appendChild(element, el as Element);
    
      } else {
        appendChild(createText(element), el as Element);
      }
    });
  }
  
  return el;
}
