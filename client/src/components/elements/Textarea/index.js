import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Textarea extends Component{
    constructor(props) {
        super(props);
        this.localState = {

        }
    }

    render() {
        console.log("textarea - ", this.props.data);
        if (this.props.data) {
            const data = this.props.data;
            const id = "textarea_" + this.props.index;
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"textarea_subtitle"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            return (
                <div className={"textarea"}>
                    {console.log("textarea - true - ", this.props.data)}
                    <div className={"textarea_title"}><label htmlFor={id}>{data.title.value}</label></div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <div className={"textarea_textarea_box"}><textarea className={"textarea_textarea"} id={id} type="text" name={id} cols={data.options.cols} rows={data.options.rows} placeholder={data.options.placeholder}/></div>
                </div>
            )
        } else {
            return (
                <div>
                    <Loader/>
                </div>
            )
        }
        // return (
        //     <div>
        //         <div><label htmlFor="label2">Label</label></div>
        //         <div><small><label htmlFor="label2">Label</label></small></div>
        //         <div><textarea name="msg" id="label2" cols="30" rows="10" placeholder="Input text"/></div>
        //     </div>
        // )
    }
}

export default Textarea