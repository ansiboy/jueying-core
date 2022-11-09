import { ComponentData, PageData } from "../out";
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

let composeComponentData1Id = "composeComponentData1";
export let composeComponentData1: ComponentData = {
    id: composeComponentData1Id,
    props: {},
    type: "div",
    children: [
        { id: componentTypeNames.classHelloWord, type: componentTypeNames.classHelloWord, props: {} }
    ]
}