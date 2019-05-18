import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Onelist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        if (this.props.data) {
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"one__list_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            return (
                <div className={"one__list_container"}>
                    <div className={"one__list_title"}>{this.props.data.title.value}</div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <ul className={"one__list_menu"}>
                        {this.props.data.options.elements.map((radio, index) => {
                            let id = "onelist_" + this.props.index;

                            if (radio.title === "Other") {
                                return (
                                    <li className={"one__list_element"} key={id + `_${index}`}>
                                        <label>
                                            {/*<input id={id + `_${index}`} type="checkbox" name={id} value={option.title}/>*/}
                                            <input id={id + `_${index}` + "_0"}
                                                   type="radio"
                                                   name={id}
                                                   value={radio.title.toLowerCase()}
                                            />
                                            <span className={"one__list_element_icon"}> </span>
                                            <span className={"one__list_element_list"}>
                                                {radio.title}
                                            </span>
                                        </label>
                                        <div className="one__list_radio_input_text_box">
                                            <input id={id + `_${index}` + "_1"}
                                                   type="text"
                                                   className={"one__list_radio_input_text"}
                                                   placeholder={radio.title}
                                            />
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                <li className={"one__list_element"} key={id +  `_${index}`}>
                                    <label>
                                        {/*<input id={id + `_${index}`} type="checkbox" name={id} value={option.title}/>*/}
                                        <input id={id + `_${index}` + "_0"}
                                               type="radio"
                                               name={id}
                                               value={radio.title.toLowerCase()}
                                        />
                                        <span className={"one__list_element_icon"}> </span>
                                        <span className={"one__list_element_list"}>
                                            {radio.title}
                                        </span>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
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

export default Onelist