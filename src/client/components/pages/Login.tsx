import * as React from "react"
import {Edit} from "../basic_comp/Edit"
import { Button } from "../basic_comp/Button";

export class Login extends React.Component<{},{}> {
    render() {
        return (
            <div>
                <Edit/>
                <Button/>
            </div>
        );
    }
}
