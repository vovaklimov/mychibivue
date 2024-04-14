import { createApp, h } from "chibivue";

createApp({
  render() {
    return h("div", {}, [{ type: "h1", props: {}, children: ["Hello, World!"] }]);
  },
}).mount("#app");
