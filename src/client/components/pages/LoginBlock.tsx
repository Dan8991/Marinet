import * as React from "react";
import { Edit } from "../basic_comp/Edit"
import { Button } from "../basic_comp/Button";

const externGridStyle = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto auto",
    gridGap: "10px",
    justifyContent: "center",
}

const internGridCenter = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px",
    justifyContent: "center",
}


export class LoginBlock extends React.Component<{}, {}> {

    
    constructor(props: any) {
        super(props);
    }
    
    
    render() {
        return (
            <div style={externGridStyle}>
                <div style={internGridCenter}>
                    <Button text="Log in" />
                    <Button text="Sign in" onClick={()=>{this.signIn("daniele")}}/>
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

    public signIn: (username: string) => void = (user: string) => {
        let myInit = { 
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username:user})
        };
        fetch("http://127.0.0.1:5000/api/users", myInit).then((e:any)=>{
            console.log("done");
        })
    }
}