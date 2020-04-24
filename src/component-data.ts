
export interface ComponentData {
    /** 组件类型名称 */
    type: string;
    /** 组件属性 */
    props: {
        style?: any,
        ref?: any,
        key?: string,
        className?: string,
    };
    /** 子组件 */
    children: (ComponentData | string)[];
    id: string;
    parentId?: string;
    selected?: boolean;
    name?: string;
}
