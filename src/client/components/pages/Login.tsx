import * as React from "react"
import { LoginBlock } from "../complex_comp/LoginBlock";

const h1Style = {
    //workaround because textAlign:"center" is not working
    textAlign:"center" as "center",
    fontSize:"40px",
    color:"#087220"
}

export class Login extends React.Component<{},{}> {
    render() {
        return (
            <div>
                <div style={h1Style}>
                    <h1> Welcome to Marinet</h1>                    
                </div>
                <LoginBlock/>
            </div>
        );
    }
}
