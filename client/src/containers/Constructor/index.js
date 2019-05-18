import React, { Component} from "react";
import "./style.css";

import Adder from "../../components/Adder";
import Input from "../../components/elements/Input";
import Dropdownlist from "../../components/elements/Dropdownlist";
import Multilist from "../../components/elements/Multilist";
import Onelist from "../../components/elements/Onelist";
import Progress from "../../components/elements/Progress";
import Textarea from "../../components/elements/Textarea";

import addElement from "../../actions/addObject";

import { connect } from "react-redux";



class Constructor extends Component{
    // componentWillReceiveProps(nextProps){
    //     // update the state with the new props
    //     this.setState({
    //         stateComponents: nextProps.surveyInfo.stateComponents
    //     });
    // }

    render() {
        if (this.props.stateComponents.components) {
            return (
                <div className={"constructor_wrapper"}>
                    {this.props.stateComponents.components.map((component, index) => {
                        switch (component.type) {
                            case "Dropdownlist":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Dropdownlist data={ component.data } index={index} key={index}/>
                                    </>
                                    );
                            case "Input":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Input data={ component.data } index={index} key={index}/>
                                    </>
                                );
                            case "Multilist":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Multilist data={ component.data } index={index} key={index}/>
                                    </>
                                );
                            case "Onelist":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Onelist data={ component.data } index={index} key={index}/>
                                    </>
                                );
                            case "Progress":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Progress data={ component.data } index={index} key={index}/>
                                    </>
                                );
                            case "Textarea":
                                return (
                                    <>
                                        <Adder addElement = {this.props.addElementFunction}
                                               surveyInfo = {this.props.stateComponents}
                                               index = {index}
                                               key={"adder" + index}
                                        />
                                        <Textarea data={ component.data } index={index} key={index}/>
                                    </>
                                );
                            default:
                                return console.warn(`component with type ${component.type} not found`);
                        }
                    })}
                    {/*<br/>*/}
                    {/*<hr/>*/}
                    {/*{this.props.stateComponents.components[this.props.stateComponents.components.length - 1].data.title.value}*/}
                    {/*{console.log("constructor components", this.props.stateComponents.components)}*/}
                    {/*<br/>*/}
                    <Adder addElement = {this.props.addElementFunction}
                           surveyInfo = {this.props.stateComponents}
                           index = {this.props.stateComponents.components.length}
                    />
                    {console.log("add", this.props.stateComponents)}
                </div>
            )
        } else {
            return (<div>
                load
            </div>)
        }

    }
}

function mapStateToProps(state) {
    return {
        stateComponents: state.surveyInfo.stateComponents
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addElementFunction: element => {
            dispatch(addElement(element))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)