import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
// import { answers } from "./store";

const answers = [];

ReactDOM.render(<App store={answers} />, document.querySelector("#app"));
