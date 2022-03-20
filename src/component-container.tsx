import * as React from "react";
import { AppContext } from "./components/context";
import { parseComponentData } from "./parse-component-data";
import { ComponentData } from "./component-data";
import { PageData, registerComponent } from ".";

export interface ComponentContainerProps {
    id: string,
    // className?: string,
    // style?: CSSProperties,
    // wrapper?: string,
}

/** 组件容器，实现组件的渲染 */
export class ComponentContainer<P extends ComponentContainerProps = ComponentContainerProps, S = any> extends React.Component<P, S> {

    static typeName = "ComponentContainer";

    renderChild(componentData: ComponentData, pageData: PageData, componentTypes: { [typeName: string]: React.ComponentClass }) {
        return <React.Fragment key={componentData.id}>
            {parseComponentData(componentData, pageData, componentTypes)}
        </React.Fragment>
    }
    render() {
        return <AppContext.Consumer>
            {args => {
                let children = args.pageData?.children.filter(o => o.parentId == this.props.id) || [];
                return React.createElement(React.Fragment, this.props,
                    ...children.map(o => this.renderChild(o, args.pageData as PageData, args.componentTypes)))
            }}
        </AppContext.Consumer>
    }
}

ComponentContainer.contextType = AppContext;
registerComponent(ComponentContainer.typeName, ComponentContainer);