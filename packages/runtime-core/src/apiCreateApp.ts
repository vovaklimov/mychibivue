import type { Component } from "./component.js";
import type { RootRendererFunction } from "./renderer.js";

export interface App<HostElement = any> {
  mount(container: HostElement | string): void;
}

export type CreateAppFunction<HostElement> = (rootComponent: Component) => App<HostElement>;

export function createAppAPI<HostElement>(
  render: RootRendererFunction<HostElement>,
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent: Component): App<HostElement> {
    return {
      mount(container: HostElement) {
        render(rootComponent.render?.(), container);
      },
    } satisfies App<HostElement>;
  };
}
