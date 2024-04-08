import type { Props } from "../index";

export type Component = (init?: Record<string, unknown>) => Element | null;

export function createComponent(component: Component, props?: Props | null) {
  let el: Element | null = null;
  try {
    el = component(props ?? {});
  } catch (err) {
    el = null;
  }
  return el
}