import { ComponentData, ComponentTypes } from "./types";
import * as React from "react";
import { errors } from "./errors";
import { PageData } from ".";
import { ElementFactory } from "./types";


export function parseComponentData(componentData: ComponentData, componentTypes: ComponentTypes, createElement: ElementFactory) {
    if (!componentData) throw errors.argumentNull("componentData");
    // if (!pageData) throw errors.argumentNull("pageData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");

    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    let childComponentInfos = componentData.children || [];//pageData.children.filter(o => o.parentId == componentData.id);
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map(c => {
            if (typeof c == "string")
                return c;
            return parseComponentData(c, componentTypes, createElement)
        });
    }

    return createElement(type, componentData.props, ...children);
}

