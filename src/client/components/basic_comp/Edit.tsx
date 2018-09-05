import * as React from "react";

export interface IStateEdit {
    value: string;
}

//basic input component
//TODO:add style

export class Edit extends React.Component<{}, IStateEdit> {

    constructor(props: any) {
        super(props);
        this.state = { value: "" };
    }

    handleChange: (e: any) => void = (e: any) => {
        this.setState({ value: e.target.value });
        console.log(this.state.value);
    };

    render() {
        return <input onChange={this.handleChange}></input>;
    }
}