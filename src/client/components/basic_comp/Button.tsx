import * as React from "react";

export interface IButtonProp {
    text?: string;
    onClick?: () => void;
}

export function Button(props: IButtonProp) {
    return (
        <button onClick={this.props.onClick || this.basicOnClick}>
            {this.props.text || "Button"}
        </button>
    );
}   