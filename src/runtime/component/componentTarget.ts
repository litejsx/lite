import { LifecycleHooks } from "../constant";

type LifecycleHook<TFn = Function> = TFn[] | null

export interface ComponentTarget {
  [LifecycleHooks.BEFORE_RENDER]: LifecycleHook;
  [LifecycleHooks.RENDERED]: LifecycleHook;
  [LifecycleHooks.BEFORE_UPDATE]: LifecycleHook;
  [LifecycleHooks.UPDATED]: LifecycleHook;
  [LifecycleHooks.BEFORE_UNMOUNT]: LifecycleHook;
  [LifecycleHooks.UNMOUNTED]: LifecycleHook;
}

export function createComponentComponentTarget(): ComponentTarget {
  return {
    [LifecycleHooks.BEFORE_RENDER]: null,
    [LifecycleHooks.RENDERED]: null,
    [LifecycleHooks.BEFORE_UPDATE]: null,
    [LifecycleHooks.UPDATED]: null,
    [LifecycleHooks.BEFORE_UNMOUNT]: null,
    [LifecycleHooks.UNMOUNTED]: null,
  }
}