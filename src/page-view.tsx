import React = require("react");
import { ComponentProps } from "./component-props";

export class PageView<P extends ComponentProps, S> extends React.Component<P, S> {
    render() {
        return <div className="page-view">
            {this.props.children}
        </div>
    }
}