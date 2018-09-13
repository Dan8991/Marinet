import * as React from "react";

export interface IEditProps {
    hint?: string;
    handleChange?: (e: any) => void;
    isPassword?: boolean;
}

//basic input component
//TODO:add style

export function Edit(props: IEditProps) {
    return (
        <input
            type={this.props.isPassword ? "password" : "text"}
            placeholder={this.props.hint || ""}
            onChange={this.props.handleChange}>
        </input>
    );
}