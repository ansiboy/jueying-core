import * as React from "react";
import { registerComponent } from "..";

export interface Props {

}

interface State {
    error?: any
}

/** 组件包装，处理组件异常等 */
export class ComponentWrapper extends React.Component<Props, State> {

    static typeName: string = "ComponentWrapper";

    constructor(props: Props) {
        super(props);
        this.state = { error: undefined };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }


    render() {
        let error = this.state.error;
        if (error) {

            var errorMessage: string = "";
            if (typeof error == "string") {
                errorMessage = error;
            }
            else {
                let keys = Object.getOwnPropertyNames(error);
                for (let i = 0; i < keys.length; i++) {
                    errorMessage = errorMessage + `${keys[i]}:${error[keys[i]]} `;
                }
            }

            return <div className="error">{errorMessage}</div>;
        }

        return <>{this.props.children}</>

    }
}

registerComponent(ComponentWrapper.typeName, ComponentWrapper);
