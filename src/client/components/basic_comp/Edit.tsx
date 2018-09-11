import * as React from "react";

export interface IEditProps {
    hint?: string;
    handleChange?: (val: string) => void;
    isPassword?: boolean;
}

//basic input component
//TODO:add style

export class Edit extends React.Component<IEditProps, {}> {

    constructor(props: IEditProps) {
        super(props);
    }

    handleChange: (e: any) => void = (e: any) => {
        this.props.handleChange(e.target.value);
    };

    render() {
        return (
            <input
                type={this.props.isPassword ? "password" : "text"}
                placeholder={this.props.hint || ""}
                onChange={this.handleChange}>
            </input>
        );
    }
}