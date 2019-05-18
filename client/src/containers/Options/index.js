import React, { Component} from "react";
import "./style.css";

class Options extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={"options"}>
                <div className="options_container">
                    http://localhost:3000/options/54759eb3c090d83494e2d804
                </div>
            </div>
        )
    }
}

export default Options