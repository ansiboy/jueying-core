
import * as React from "react";
import { ComponentData } from "./component-data";
import { errors } from "./errors";
import { ComponentProps } from "./component-props";

export type CompoenntTypes = { [name: string]: typeof React.Component | React.ComponentType };

export abstract class ComponentFactory {
    private compoenntTypes: CompoenntTypes;

    constructor(compoenntTypes: CompoenntTypes) {
        this.compoenntTypes = compoenntTypes;
    }

    createComponent(componentData: ComponentData, context?: any) {
        try {
            return this._createComponent(componentData, context);
        }
        catch (e) {
            return this.processError(e);
        }
    }

    /** 创建视图组件 */
    abstract createViewComponent(props?: any, ...children: React.ReactNode[]);

    protected processError(err: Error) {
        console.error(err);
        return null;
    }

    private _createComponent(componentData: ComponentData | string, context?: any) {

        if (typeof componentData == "string")
            return componentData;

        let children = (componentData.children || []).map(c => this._createComponent(c));

        let props = (componentData.props || {}) as ComponentProps;

        let defaultProps: ComponentProps = { factory: this, context };
        Object.assign(props, defaultProps);

        let name = componentData.type;
        let compoenntType = this.compoenntTypes[name];

        if (compoenntType == null) {
            throw errors.componentNotExists(name);
        }

        let r = React.createElement(compoenntType, props as any, children);
        return r;
    }
}

export class ReactComponentFactory extends ComponentFactory {

    /** 创建视图组件 */
    createViewComponent(props?: any, ...children: React.ReactNode[]) {
        // return React.createElement("div", props, ...children);
        props = props || {};
        return <div {...props}>{children}</div>
    }

    protected processError(err) {
        return <div>
            <div>Error:</div>
            <div>{err.message}</div>
        </div>
    }
}
