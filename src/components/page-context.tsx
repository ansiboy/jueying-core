import * as React from "react";
import type { PageData } from "../component-data";

export let PageContext = React.createContext<{ pageData?: PageData }>({})
