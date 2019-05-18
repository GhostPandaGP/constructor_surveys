import React, { Component} from "react";
import "./style.css";
import Loader from "../../Loader";

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: undefined
        }
    }

    componentDidMount() {
        // this.setState(
        //     state => ({
        //         options: this.props.data
        //     })
        // );
        // console.log("component set", this.state.options);
    }

    componentWillMount() {
        // if (this.props.data) {
        //     this.setState(
        //         state => ({
        //             options: this.props.data
        //         })
        //     );
        //     console.log("data input before updating", this.state.options);
        // } else {
        //     console.log("data is underfined");
        // }
        // console.log("update");
    }

    render() {
        console.log("input - ", this.props.data);
        if (this.props.data) {
            const data = this.props.data;
            const id = "input_" + this.props.index;
            const Subtitle = this.props.data.subtitle.value ?
                (props) => {return (<div className={"input_small_label"}>{props.data}</div>)}  :
                (props) => {console.warn("warn", props);
                    return ""};

            return (
                <div className={"input_content"}>
                    {console.log("input - true - ", this.props.data)}
                    <div className={"input_label"}><label htmlFor={id}>{data.title.value}</label></div>
                    {<Subtitle data={this.props.data.subtitle.value}/>}
                    <div className={"input_box_input"}><input className={"input_input"} id={id} type="text" placeholder={data.options.placeholder}/></div>
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

export default Input