
import React = require("react");
import { ComponentData } from "./component-data";
import { errors } from "./errors";
import { ComponentProps } from "./component-props";

type compoenntTypes = { [name: string]: typeof React.Component | React.ComponentType };


export class CompoenntFactory {
    private compoenntTypes: compoenntTypes;

    constructor(compoenntTypes: compoenntTypes) {
        this.compoenntTypes = compoenntTypes;
    }

    createComponent(componentData: ComponentData, context?: any) {
        try {
            return this._createComponent(componentData, context);
        }
        catch (e) {
            return this.createErrorElement(e);
        }
    }

    /** 创建视图组件 */
    createViewComponent(props?: any, ...children: React.ReactNode[]) {
        return React.createElement("div", props, ...children);
    }

    protected createErrorElement(err: Error) {
        // return <div>
        //     <div>Error:</div>
        //     <div>{err.message}</div>
        // </div>
        return this.createViewComponent(
            this.createViewComponent("Error:"),
            this.createViewComponent(err.message));
    }

    private _createComponent(componentData: ComponentData | string, context?: any) {

        if (typeof componentData == "string")
            return componentData;

        let children = (componentData.children || []).map(c => this._createComponent(c));

        let props = (componentData.props || {}) as ComponentProps;

        let defaultProps: ComponentProps = { factory: this, context };
        let name = componentData.typeName;
        let compoenntType = this.compoenntTypes[name];

        if (compoenntType == null) {
            throw errors.componentNotExists(name);
        }

        let r = React.createElement(compoenntType, props as any, children);
        return r;
    }
}
