import { ComponentTypes } from "../src/types";
import { componentTypes as defaultComponentTypes } from "../src/register";
import React from "react";

export let componentTypeNames = {
    div: "div",
    classHelloWord: "ClassHelloWorld",
    functionHelloWorld: "FunctionHelloWorld",
}

export class ClassHelloWorld extends React.Component {

    static text = "Class Hello World";

    render(): React.ReactNode {
        return <div id={componentTypeNames.classHelloWord} data-testid={componentTypeNames.classHelloWord}>{ClassHelloWorld.text}</div>
    }
}

export let FunctionHelloWorldText = "Function Hello World";
function FunctionHelloWorld() {
    return <div data-testid={componentTypeNames.functionHelloWorld}>{FunctionHelloWorldText}</div>
}

export let componentTypes: ComponentTypes = Object.assign({}, defaultComponentTypes);
componentTypes[componentTypeNames.div] = "div";
componentTypes[componentTypeNames.classHelloWord] = ClassHelloWorld;
componentTypes[componentTypeNames.functionHelloWorld] = FunctionHelloWorld;

