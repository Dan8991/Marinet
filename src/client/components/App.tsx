import * as React from "react";
import { MarinetPage } from "./pages/MarinetPage";
import { Login } from "./pages/Login";

export interface IAppState {
    isLogged: boolean;
    isNewUser: boolean;
}

const h1Style = {
    //workaround because textAlign:"center" is not working
    textAlign: "center" as "center",
    fontSize: "40px",
    color: "#087220"
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = { isLogged: false, isNewUser: false }
    }

    private onLogInClick: () => void = () => {
        this.setState({ isLogged: true })
    }

    private onSignUpClick: () => void = () => {
        this.setState({ isLogged: true, isNewUser:true })
    }

    render() {
        return (
            <div>
                <div style={h1Style}>
                    <h1> Welcome to Marinet</h1>
                </div>
                {
                    this.state.isLogged ? 
                    <MarinetPage isNewUser={this.state.isNewUser} /> : 
                    <Login onLogInClick={this.onLogInClick} onSignUpClick={this.onSignUpClick}/>
                }
            </div>
        );
    }
}