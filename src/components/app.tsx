import React = require("react");
import { PageData } from "../component-data";
import { parseComponentData } from "../parse-component-data";
import { registerComponent } from "../register";
import { PageContext } from "./page-context";

export interface AppProps {
    pageData: PageData
}


export class App extends React.Component<AppProps>{

    static typeName = "App";

    render() {
        let pageData = this.props.pageData;
        let children = pageData.children.filter(o => o.parentId == pageData.id);
        let childComponents = children.map(o => parseComponentData(o, pageData));
        return <PageContext.Provider value={{ pageData: this.props.pageData }}>
            {childComponents}
        </PageContext.Provider>
    }
}

registerComponent(App.typeName, App);