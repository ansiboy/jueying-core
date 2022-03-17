import React = require("react");
import { PageData } from "../component-data";
import { parseComponentData } from "../parse-component-data";
import { registerComponent } from "../register";
import { AppContext } from "./context";

export interface AppProps {
    pageData: PageData,
    componentTypes: { [key: string]: React.ComponentClass<any> },
}


export class App extends React.Component<AppProps>{

    static typeName = "App";

    render() {
        let { pageData, componentTypes } = this.props;
        let children = pageData.children.filter(o => o.parentId == pageData.id || o.parentId == null);
        let childComponents = children.map(o => parseComponentData(o, pageData, componentTypes));
        return <AppContext.Provider value={{ pageData: this.props.pageData, componentTypes }}>
            {childComponents}
        </AppContext.Provider>
    }
}

registerComponent(App.typeName, App);