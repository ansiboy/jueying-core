
export interface ComponentProps {
    ref?: any,
    key?: string,
}

export interface ComponentData {
    /** 组件类型名称 */
    type: string;
    /** 组件属性 */
    props: any;
    /** 子组件 */
    children: (ComponentData | string)[];
    id: string;
    // parentId?: string;
    selected?: boolean;
    // name?: string;
}
