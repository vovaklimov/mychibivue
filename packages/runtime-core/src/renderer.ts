import type { VNode } from "./vnode.js";

export interface RendererNode {
  [key: string]: any;
}

export interface RendererElement extends RendererNode {}

export interface RendererOptions<HostNode = RendererNode> {
  createElement(type: string): HostNode;
  createText(text: string): HostNode;
  setElementText(node: HostNode, text: string): void;
  insert(child: HostNode, parent: HostNode, anchor?: HostNode | null): void;
}

export type RootRendererFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement,
) => void;

export function createRenderer(options: RendererOptions) {
  const {
    createElement: hostCreateElement,
    createText: hostCreateText,
    insert: hostInsert,
  } = options;

  function renderVNode(vnode: VNode | string) {
    if (typeof vnode === "string") {
      return hostCreateText(vnode);
    }

    const el = hostCreateElement(vnode.type);
    for (const child of vnode.children) {
      hostInsert(renderVNode(child), el);
    }

    return el;
  }

  const render: RootRendererFunction = (message, container) => {
    hostInsert(renderVNode(message), container);
  };

  return { render };
}
