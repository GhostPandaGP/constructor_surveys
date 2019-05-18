import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Progress extends Component{
    constructor(props) {
        super(props);
        this.localState = {
        }
    }

    render() {
        if (this.props.data) {
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"progress_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            const id = "progress_" + this.props.index;

            let arr = [];

            let k = 0;
            for (let i = this.props.data.options.end; i >= this.props.data.options.start; i--,  k++) {
                arr[k] = i;
            }

            return (
                <div className="progress">
                    <div className="progress_box">
                        <div className={"progress_title"}>{this.props.data.title.value}</div>
                        {<Subtitle data={this.props.data.subtitle.value}/>}
                        <div className="progress_rating_container">
                            <div className={"progress_rating"}>
                                {arr.map((value, index) => {
                                    return [
                                        <input type="radio"
                                               name={id}
                                               id={id + `_${index}`}
                                               key={id + "_0"}
                                        />,
                                        <label htmlFor={id + `_${index}`}
                                               key={id + "_1"}>
                                            {value}
                                        </label>
                                    ]
                                }) }
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Loader/>
                </div>
            )
        }
    }
}

export default Progress