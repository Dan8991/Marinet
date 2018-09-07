import * as React from "react";
import { Edit } from "../basic_comp/Edit"
import { Button } from "../basic_comp/Button";

const externGridStyle = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto auto",
    gridGap: "10px",
    justifyContent:"center",
}

const internGridCenter = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px",
    justifyContent:"center",
}


export class LoginBlock extends React.Component<{}, {}> {
    render() {
        return (
            <div style={externGridStyle}>
                <div style={internGridCenter}>
                    <Button text="Log in" />
                    <Button text="Sign in" />
                </div>
                <div>
                    <Edit hint="username" />
                </div>
                <div>
                    <Edit hint="password" />
                </div>
            </div>
        );
    }
}