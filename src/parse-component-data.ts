import { ComponentData } from "./component-data";
import React = require("react");
import { componentTypes } from "./register";
import { errors } from "./errors";
import { PageData } from ".";

export function parseComponentData(componentData: ComponentData, pageData: PageData) {
    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    if (pageData.children) {
        children = pageData.children.filter(o => o.parentId == o.id).map(c => typeof c == "string" ? c : parseComponentData(c, pageData));
    }

    return React.createElement(type, componentData.props, ...children);
}

export function parsePageData(pageData: PageData) {
    let type = componentTypes[pageData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(pageData.type);
    }

    let children = pageData.children.map(c => parseComponentData(c, pageData));
    return React.createElement(type, pageData.props, ...children);
}
