import * as React from "react";
import { Login } from "./pages/Login";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, {}> {
    render() {
        return <Login/>;
    }
}