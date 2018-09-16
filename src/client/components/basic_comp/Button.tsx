import * as React from "react";

export interface IButtonProp {
    text?: string;
    onClick: () => void;
    extraStyle?: any;
}

const btnStyle = {
    height: "30px",
    width: "100px",
}

export function Button(props: IButtonProp) {
    return (
        <button style={Object.assign(btnStyle, props.extraStyle)} onClick={props.onClick}>
            {props.text || "Button"}
        </button>
    );
}   