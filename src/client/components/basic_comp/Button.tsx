import * as React from "react";

export interface IButtonProp {
    text?: string;
    onClick: () => void;
}

export function Button(props: IButtonProp) {
    return (
        <button onClick={props.onClick}>
            {props.text || "Button"}
        </button>
    );
}   