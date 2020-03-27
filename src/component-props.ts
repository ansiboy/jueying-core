import { ComponentFactory } from "./component-factory";
import * as React from "react";

export type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = any> = React.ComponentProps<T> & {
    context: any | undefined,
    factory: ComponentFactory,
}