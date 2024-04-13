export interface RendererNode {
  [key: string]: any;
}

export interface RendererElement extends RendererNode {}

export interface RendererOptions<HostNode = RendererNode> {
  setElementText(node: HostNode, text: string): void;
}

export type RootRendererFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement,
) => void;

export function createRenderer(options: RendererOptions) {
  const { setElementText } = options;

  const render: RootRendererFunction = (message, container) => {
    setElementText(container, message);
  };

  return { render };
}
