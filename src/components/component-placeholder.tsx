import * as React from "react";
import { ComponentContainer } from "../component-container";
import { ComponentProps } from "../component-data";
import { registerComponent } from "../register";

export class ComponentPlaceHolder extends React.Component<ComponentProps> {

    static typeName = "PlaceHolder";

    render() {
        return <ComponentContainer  {...this.props} />
    }
}

registerComponent(ComponentPlaceHolder.typeName, ComponentPlaceHolder);