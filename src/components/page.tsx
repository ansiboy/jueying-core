import * as React from "react";


import { registerComponent } from "../register";
// import { component } from "./decorators";
import { parseComponentData } from "../parse-component-data";
import { CSSProperties } from "react";
import { ComponentProps, PageData } from "../component-data";
import { errors } from "../errors";
import { PageContext } from "./page-context";
import { ComponentContainer } from "../component-container";

export interface PageProps extends ComponentProps {
}

export interface PageViewState {

}

// export let PageContext = React.createContext<{ page?: Page, pageData?: PageData }>({})

export class Page extends React.Component<PageProps> {
    private _components: { [key: string]: React.Component } = {};

    static typeName = "article";
    static className = "page-view";
    static id = "page";

    constructor(props: PageProps) {
        super(props);


    }

    get components() {
        return this._components;
    }

    render() {
        return <ComponentContainer className={Page.className} {...this.props} />
    }
}

//========================================================
// 兼容旧代码
registerComponent("PageView", Page);
//========================================================
registerComponent(Page.typeName, Page);



