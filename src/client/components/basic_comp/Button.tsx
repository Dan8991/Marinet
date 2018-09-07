import * as React from "react";

export interface IButtonProp {
    text?: string;
    onClick?: () => void;
}

export class Button extends React.Component<IButtonProp, {}> {

    constructor(props: IButtonProp) {
        super(props);
    }

    basicOnClick: ()=>void = () => {
        console.log("i am a button with no onClick function");
    }

    render() {
        return (
            <button onClick={this.props.onClick || this.basicOnClick}>
                {this.props.text || "Button"}
            </button>
        );
    }
}   