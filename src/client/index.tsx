import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById("main");

const render = (Component:any) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );
}

render(App);

if (module.hot) {
    module.hot.accept(() => {
        render(App);
    });
}