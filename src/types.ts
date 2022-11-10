import * as React from "react";

export type ElementFactory = typeof React.createElement;
export type ComponentTypes = { [key: string]: React.ComponentClass<any> | React.FunctionComponent | string };

export interface ComponentProps {
    ref?: any,
    key?: string,
    /** 组件的编号，在页面中唯一 */
    id: string;
    /** 组件的名称，在页面中唯一 */
    name?: string;
    children?: React.ReactNode
}

export interface ComponentData {
    /** 组件类型名称 */
    type: string;
    /** 组件属性 */
    props: any;
    /** 子组件 */
    id: string;
    parentId?: string;
    name?: string;
    status?: ComponentStatus,
    children?: (ComponentData | string)[]
}

export enum ComponentStatus {
    default = 0,
    /** 已选中 */
    selected = 1,
    /** 禁用 */
    disabled = 2,
    /** 不允许删除 */
    asset = 4,
}

export type PageData = { id: string, children: ComponentData[] };

export type ComponentFactory<Context = any> = (componentData: ComponentData, context?: Context) => JSX.Element;


type Item = Omit<ComponentData, "children"> & {
    id: string, parentId: string | null,
};
export type ComponentDataList = Item[];

// export type ChildComponentProps = { parentId: string };