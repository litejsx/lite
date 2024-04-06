import { Component, Props } from "./types";
import { normalizeContainer, isFunction } from "./utils";

export function render(component: Component, containerOrSelector: Element | string) {
  const container = normalizeContainer(containerOrSelector);
  if (container) {
    container.innerHTML = '';
  }
}

export function createElement(type: string | Component, props: Props | undefined, children: Element | Element[] | string | undefined): Element {
  if (isFunction(type)) {

  }
  return document.createElement('div');
}