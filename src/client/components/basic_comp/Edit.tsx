import * as React from "react";

export interface IEditProps {
    hint?: string;
    handleChange?: (e: any) => void;
    isPassword?: boolean;
	externalStyle?: any;
}

//basic input component
//TODO:add style

export function Edit(props: IEditProps) {
    return (
        <input
            type={props.isPassword ? "password" : "text"}
            placeholder={props.hint || ""}
            onChange={props.handleChange}
			style={props.externalStyle}>
        </input>
    );
}
