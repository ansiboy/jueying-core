import * as React from "react";
import { parseComponentData } from "../parse-component-data";
import { ChildComponentProps, ComponentData } from "../types";
import { PageData, registerComponent } from "..";
import { PageDataParserContext } from "./page-data-parser";
import { errors } from "../errors";
import { ComponentTypes, ElementFactory } from "../types";

export interface ComponentContainerProps extends React.ComponentProps<any> {
    id: string,
    children?: React.ReactNode
}

/** 组件容器，实现组件的渲染 */
export class ComponentContainer<P extends ComponentContainerProps = ComponentContainerProps, S = any> extends React.Component<P, S> {

    static typeName = "ComponentContainer";

    renderChild(componentData: ComponentData, pageData: PageData, componentTypes: ComponentTypes,
        elementFactory: ElementFactory) {

        return <React.Fragment key={componentData.id}>
            {parseComponentData(componentData, componentTypes, elementFactory)}
        </React.Fragment>
    }
    render() {
        return <PageDataParserContext.Consumer>
            {args => {
                if (!args)
                    throw errors.nullPageDataParserArguments();

                let children = args.pageData.children.filter(o => (o.props as ChildComponentProps).parentId == this.props.id) || [];
                return React.createElement(React.Fragment, this.props,
                    ...children.map(o => this.renderChild(o, args.pageData as PageData, args.componentTypes, args.elementFactory)))
            }}
        </PageDataParserContext.Consumer>
    }
}

registerComponent(ComponentContainer.typeName, ComponentContainer);