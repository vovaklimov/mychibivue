import type { VNode, VNodeProps } from "./vnode.js";

export function h(type: string, props: VNodeProps, children: (string | VNode)[]): VNode {
  return { type, props, children };
}
