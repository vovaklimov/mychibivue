import { createAppAPI, createRenderer, type Component } from "@chibivue/runtime-core";
import { nodeOps } from "./nodeOps.js";

const { render } = createRenderer(nodeOps);
const _createApp = createAppAPI(render);

export const createApp = (args: Component) => {
  const app = _createApp(args);
  const { mount } = app;
  app.mount = (selector: string) => {
    const container = document.querySelector(selector);
    if (!container) {
      console.error(`Failed to mount: ${container}`);
      return;
    }
    container.innerHTML = "";
    mount(container);
  };
  return app;
};
