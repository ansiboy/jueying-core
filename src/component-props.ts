import { ComponentFactory } from "./component-factory";

export interface ComponentProps {
    context: any | undefined,
    factory: ComponentFactory
}