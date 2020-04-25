
interface BaseProps {
    ref?: any,
    key?: string,
}

export interface ComponentData<P extends BaseProps = BaseProps> {
    /** 组件类型名称 */
    type: string;
    /** 组件属性 */
    props: P;
    /** 子组件 */
    children: (ComponentData | string)[];
    id: string;
    parentId?: string;
    selected?: boolean;
    name?: string;
}
