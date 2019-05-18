import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Multilist extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }
    render() {
        if (this.props.data) {
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"multi__list_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            const styleIcon = "multi__list_icon_" + this.props.data.styles.type;
            const styleList = "multi__list_list_" + this.props.data.styles.type;

            return (
                <div className={"multi__list_container"}>
                    {console.log(this.props.data)}

                    <div className={"multi__list_title"}>{this.props.data.title.value}</div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <ul className={"multi__list_menu"}>
                        {this.props.data.options.elements.map((option, index) => {
                            let id = "multilist_" + this.props.index;
                            return <li className={"multi__list_element"} key={id + `_${index}`}>
                                <label>
                                    {/*<input id={id + `_${index}`} type="checkbox" name={id} value={option.title}/>*/}
                                    <input type="checkbox" name={id} value={option.title}/>
                                    <span className={"multi__list_element_icon " + styleIcon}></span>
                                    <span className={"multi__list_element_list " + styleList}>{option.title}</span>
                                </label>
                            </li>
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

export default Multilist