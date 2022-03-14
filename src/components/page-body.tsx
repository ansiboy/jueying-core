import { ComponentProps } from "../component-data";
// import { component } from "./decorators";
import * as React from "react";
import { ComponentContainer } from "../component-container";
import { registerComponent } from "../register";

export interface PageBodyProps extends ComponentProps {
    visible: boolean,
}

// @component({ type: PageBody.typeName })
export class PageBody extends React.Component<PageBodyProps> {

    static typeName = "section";
    static className = "body";
    static id = "page-body";

    static defaultProps: PageBodyProps = { id: PageBody.id, visible: true };

    render() {
        return <ComponentContainer className={PageBody.className} {...this.props} />
    }
}

registerComponent(PageBody.typeName, PageBody);