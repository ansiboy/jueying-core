import { ComponentData } from "../out";
import { ComponentPlaceHolder, PageData } from "../src";
import { componentTypeNames } from "./components";

export let simpleDivComponentDataId = "string-component-data";
export let simpleDivComponentDataText = "Hello World";
export let simpleDivComponentData: ComponentData = {
    id: "string-component-data",
    props: { "data-testid": simpleDivComponentDataId },
    type: componentTypeNames.div,
    children: [simpleDivComponentDataText]
}

export let classComponentData: ComponentData = {
    id: componentTypeNames.classHelloWord,
    props: {},
    type: componentTypeNames.classHelloWord
}

export let functionComponentData: ComponentData = {
    id: componentTypeNames.functionHelloWorld,
    props: {},
    type: componentTypeNames.functionHelloWorld,
}

export let composeComponentData1Id = "composeComponentData1";
export let composeComponentData1: ComponentData = {
    id: composeComponentData1Id,
    props: { "data-testid": composeComponentData1Id },
    type: "div",
    children: [
        { id: componentTypeNames.classHelloWord, type: componentTypeNames.classHelloWord, props: {} }
    ]
}

let composeComponentData2Id = "composeComponentData2";
export let composeComponentData2: ComponentData = {
    id: composeComponentData2Id,
    props: { "data-testid": composeComponentData2Id },
    type: "div",
    children: [
        { id: componentTypeNames.functionHelloWorld, type: componentTypeNames.functionHelloWorld, props: {} }
    ]
}

export let pageData: PageData = {
    id: "page-data",
    children: [
        simpleDivComponentData,
        composeComponentData1
    ]
}

export const placeholderId = "placeholder";
export const placeholderChildId = "placeholder-child";
// export let placeholderChildProps: ChildComponentProps = { parentId: placeholderId };
export const placeholderChildText = "placeholder child";
export const placeholderPageDataRootId = "page-data-root";
export const placeholderPageData: PageData = {
    id: "page-data",
    children: [
        {
            id: placeholderPageDataRootId,
            type: "div",
            props: { "data-testid": placeholderPageDataRootId },
            children: [
                {
                    id: placeholderId,
                    type: ComponentPlaceHolder.typeName, props: {}
                },
            ]
        },
        {
            id: placeholderChildId,
            type: "div",
            props: { "data-testid": placeholderChildId },
            children: [placeholderChildText],
            parentId: placeholderId,
        }
    ]
}