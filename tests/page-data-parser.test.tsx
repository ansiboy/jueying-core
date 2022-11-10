import { render, screen } from "@testing-library/react";
import React from "react";
import { PageDataParser } from "../src/components/page-data-parser";
import { componentTypes } from "./components";
import { composeComponentData1Id, pageData, simpleDivComponentDataId, placeholderPageData, placeholderPageDataRootId, placeholderChildId } from "./page-datas";

test("PageDataParser 1", function () {

    render(<PageDataParser pageData={pageData} elementFactory={React.createElement} componentTypes={componentTypes} />)

    // screen.debug();
    let htmlElement1 = screen.getByTestId(simpleDivComponentDataId);
    expect(htmlElement1).not.toBeNull();

    let htmlElement2 = screen.getByTestId(composeComponentData1Id);
    expect(htmlElement2).not.toBeNull();
})

test("parse page data with placeholder", function () {

    render(<PageDataParser pageData={placeholderPageData} elementFactory={React.createElement} componentTypes={componentTypes} />)

    screen.debug();
    let rootElement = screen.getByTestId(placeholderPageDataRootId);
    expect(rootElement).not.toBeNull();

    let childElement = screen.getByTestId(placeholderChildId);
    expect(childElement).not.toBeNull();

    expect(childElement.parentElement).toEqual(rootElement);
})