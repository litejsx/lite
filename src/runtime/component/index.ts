import type { Props } from "../index";
import type { ComponentTarget } from "./componentTarget";

export type Component = (init?: Record<string, unknown>) => Element | null;

const componentTarget: ComponentTarget | null = null;

export function createComponent(component: Component, props?: Props | null) {
  let el: Element | null = null;
  try {
    el = component(props ?? {});
  } catch (err) {
    el = null;
  }
  return el
}