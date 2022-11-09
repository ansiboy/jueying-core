import { registerComponent, componentTypes } from "../src";

test("注册组件", () => {
    registerComponent("div", "div");
    let divComponent = componentTypes["div"];
    expect(divComponent).toBe("div");
})