import { ComponentFactory } from "./component-factory";
import React = require("react");

export type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = any> = React.ComponentProps<T> & {
    context: any | undefined,
    factory: ComponentFactory,
}