import { ComponentData } from "./component-data";
import React = require("react");
// import { componentTypes } from "./register";
import { errors } from "./errors";
import { PageData } from ".";
import { ComponentWrapper, ComponentWrapperProps } from "./components/component-wrapper";

type ComponentTypes = { [key: string]: React.ComponentClass<any> | string };
export function parseComponentData(componentData: ComponentData, pageData: PageData, componentTypes: ComponentTypes) {
    if (!componentData) throw errors.argumentNull("componentData");
    if (!pageData) throw errors.argumentNull("pageData");
    if (!componentTypes) throw errors.argumentNull("componentTypes");

    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    let childComponentInfos = pageData.children.filter(o => o.parentId == componentData.id);
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map(c => parseComponentData(c, pageData, componentTypes));
    }

    let wrapper = componentTypes[ComponentWrapper.typeName] || ComponentWrapper;
    let wrapperProps: ComponentWrapperProps = {
        componentData: componentData,
    }
    return React.createElement(wrapper, { key: componentData.id, ...(wrapperProps) }, React.createElement(type, componentData.props, ...children));
}

