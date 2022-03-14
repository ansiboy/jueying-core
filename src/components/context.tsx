import * as React from "react";
import type { PageData } from "../component-data";

export let AppContext = React.createContext<{ pageData?: PageData, componentTypes: { [key: string]: React.ComponentClass<any> } }>({
    componentTypes: {}
});
export let PageContext = AppContext;
