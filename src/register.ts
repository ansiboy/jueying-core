import * as React from "react";
import { errors } from "./errors";
import { ComponentTypes } from "./types";

export let componentTypes: ComponentTypes = {};
export function registerComponent(componentName: string, componentType: ComponentTypes[0]): void {
    if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = (componentType as React.ComponentClass<any>).name;
        (componentType as any)['componentName'] = componentName;
    }

    if (!componentName)
        throw errors.argumentNull('componentName');

    if (!componentType)
        throw errors.argumentNull('componentType');

    componentTypes[componentName] = componentType;
}

