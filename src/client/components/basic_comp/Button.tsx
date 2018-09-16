import * as React from "react";

export interface IButtonProp {
    text?: string;
    onClick: () => void;
}

const btnStyle = {
    height: "30px",
    width: "100px"
}

export function Button(props: IButtonProp) {
    return (
        <button style={btnStyle} onClick={props.onClick}>
            {props.text || "Button"}
        </button>
    );
}   