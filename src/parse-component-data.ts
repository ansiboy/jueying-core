import { ComponentData } from "./component-data";
import React = require("react");
import { componentTypes } from "./register";
import { errors } from "./errors";
import { PageData } from ".";
import { ComponentWrapper } from "./components/component-wrapper";

export function parseComponentData(componentData: ComponentData, pageData: PageData) {
    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    if (pageData.children) {
        children = pageData.children.filter(o => o.parentId == componentData.id).map(c => parseComponentData(c, pageData));
    }

    return React.createElement(componentTypes[ComponentWrapper.typeName], { key: componentData.id }, componentData.props, React.createElement(type, componentData.props, ...children));
}

