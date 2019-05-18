import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Dropdownlist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        if (this.props.data) {
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"drop__down__list_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                            return ""};

            return (
                <div className={"drop__down__list_wrapper"}>
                    {console.log(this.props.data)}
                    <div className={"drop__down__list_title"}>{this.props.data.title.value}</div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <div className="drop__down__list_select-wrapper">
                        <select multiple={false} className={"drop__down__list_select"}>
                            {this.props.data.options.elements.map((option, index) => {
                                let id = "dropdownlist_" + this.props.index + `_${index}`;
                                return <option value={option.title} key={id}>{option.title}</option>
                            })}
                        </select>
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

export default Dropdownlist