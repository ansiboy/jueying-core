import { render, screen } from "@testing-library/react";
import React from "react";
import { parseComponentData } from "../src/parse-component-data";
import { ClassHelloWorld, componentTypeNames, componentTypes, FunctionHelloWorldText } from "./components";
import { classComponentData, composeComponentData1, composeComponentData2, functionComponentData, simpleDivComponentData, simpleDivComponentDataId, simpleDivComponentDataText } from "./page-datas";

test("parse div component data", function () {
    let componentElement = parseComponentData(simpleDivComponentData, componentTypes, React.createElement);
    render(componentElement);

    // screen.debug();
    let divElement = screen.getByTestId(simpleDivComponentDataId);
    expect(divElement).not.toBeNull();
    expect(divElement.innerHTML.trim()).toBe(simpleDivComponentDataText);
})

test("parse class component data", function () {
    let componentElement = parseComponentData(classComponentData, componentTypes, React.createElement);
    render(componentElement);

    // screen.debug();
    let htmlElement = screen.getByTestId(componentTypeNames.classHelloWord);
    expect(htmlElement).not.toBeNull();
    expect(htmlElement.innerHTML.trim()).toBe(ClassHelloWorld.text);
})

test("parse function component data", function () {
    let componentElement = parseComponentData(functionComponentData, componentTypes, React.createElement);
    render(componentElement);

    // screen.debug();
    let htmlElement = screen.getByTestId(componentTypeNames.functionHelloWorld);
    expect(htmlElement).not.toBeNull();
    expect(htmlElement.innerHTML.trim()).toBe(FunctionHelloWorldText);
})

test("parse compose component data 1", function () {
    let componentElement = parseComponentData(composeComponentData1, componentTypes, React.createElement);
    render(componentElement);

    // screen.debug();
    let htmlElement = screen.getByTestId(componentTypeNames.classHelloWord);
    expect(htmlElement).not.toBeNull();
    expect(htmlElement.innerHTML.trim()).toBe(ClassHelloWorld.text);
})

test("parse compose component data 2", function () {
    let componentElement = parseComponentData(composeComponentData2, componentTypes, React.createElement);
    render(componentElement);

    // screen.debug();
    let htmlElement = screen.getByTestId(componentTypeNames.functionHelloWorld);
    expect(htmlElement).not.toBeNull();
    expect(htmlElement.innerHTML.trim()).toBe(FunctionHelloWorldText);
})