import * as React from "react";


import { registerComponent } from "../register";
// import { component } from "./decorators";
import { parseComponentData } from "../parse-component-data";
import { CSSProperties } from "react";
import { PageData } from "../component-data";
import { errors } from "../errors";

export interface PageProps {
    pageData: PageData
}

export interface PageViewState {

}

export let PageContext = React.createContext<{ page?: Page, pageData?: PageData }>({})

// @component({ type: Page.typeName })
export class Page extends React.Component<PageProps> {
    //childComponentCreated = new Callback<{ component: React.Component, id: string }>();

    private _components: { [key: string]: React.Component } = {};

    static typeName = "article";
    static className = "page-view";

    constructor(props: PageProps) {
        super(props);

        if (!props.pageData)
            throw errors.propsFileNull("pageData");
    }

    get components() {
        return this._components;
    }

    render() {
        let pageStyle: CSSProperties = {};
        let pageData = this.props.pageData;
        let children = pageData.children.filter(o => o.parentId == pageData.id);
        let childComponents = children.map(o => <React.Fragment key={o.id}>
            {parseComponentData(o, pageData)}
        </React.Fragment>)
        let elementId = "_" + pageData.id.split("-").join("");
        return <div id={elementId} className={`${Page.className}`} style={pageStyle}>
            <PageContext.Provider value={{ page: this, pageData }}>
                {childComponents}
            </PageContext.Provider>
        </div>
    }
}

//========================================================
// 兼容旧代码
registerComponent("PageView", Page);
//========================================================
registerComponent(Page.typeName, Page);



