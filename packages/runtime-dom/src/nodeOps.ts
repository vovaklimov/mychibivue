import type { RendererOptions } from "@chibivue/runtime-core";

export const nodeOps: RendererOptions<Node> = {
  setElementText(node, text) {
    node.textContent = text;
  },
  createElement(type) {
    return document.createElement(type);
  },
  createText(text) {
    return document.createTextNode(text);
  },
  insert(child, parent, anchor = null) {
    parent.insertBefore(child, anchor);
  },
};
