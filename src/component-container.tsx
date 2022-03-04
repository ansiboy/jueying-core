import * as React from "react";
import { PageContext } from "./components/page-context";
import { parseComponentData } from "./parse-component-data";
import { CSSProperties } from "react";
import { ComponentData } from "./component-data";
import { PageData, registerComponent } from ".";

export interface ComponentContainerProps {
    id: string,
    className?: string,
    style?: CSSProperties
}

/** 组件容器，实现组件的渲染 */
export class ComponentContainer<P extends ComponentContainerProps = ComponentContainerProps, S = any> extends React.Component<P, S> {

    static typeName = "ComponentContainer";

    renderChild(componentData: ComponentData, pageData: PageData) {
        return <React.Fragment key={componentData.id}>
            {parseComponentData(componentData, pageData)}
        </React.Fragment>
    }
    render() {
        return <PageContext.Consumer>
            {args => {
                let children = args.pageData?.children.filter(o => o.parentId == this.props.id) || [];
                return <div className={this.props.className} style={this.props.style}>
                    {children.map(o => this.renderChild(o, args.pageData as PageData))}
                </div>
            }}
        </PageContext.Consumer>
    }
}

ComponentContainer.contextType = PageContext;
registerComponent(ComponentContainer.typeName, ComponentContainer);