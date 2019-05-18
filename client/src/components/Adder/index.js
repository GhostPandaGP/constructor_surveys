import React, { Component} from "react";
import "./style.css";

import ModalInput from "../modals/ModalInput";
import ModalTextarea from "../modals/ModalTextarea";
import ModalProgress from "../modals/ModalProgress";
import ModalList from "../modals/ModalList";
import ModalOneList from "../modals/ModalOneList";
import ModalMultiList from "../modals/ModalMultiList";

class Adder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModalInput: false,
            showModalTextarea: false,
            showModalProgress: false,
            showModalList: false,
            showModalOneList: false,
            showModalMultiList: false,
            // surveyInfo: props.surveyInfo,
            showAdder: false
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleShowAdder = this.handleShowAdder.bind(this);
        this.handleShowModalInput = this.handleShowModalInput.bind(this);
        this.handleShowModalTextarea = this.handleShowModalTextarea.bind(this);
        this.handleShowModalProgress = this.handleShowModalProgress.bind(this);
        this.handleShowModalList = this.handleShowModalList.bind(this);
        this.handleShowModalOneList = this.handleShowModalOneList.bind(this);
        this.handleShowModalMultiList = this.handleShowModalMultiList.bind(this);
    }

    handleAdd(obj) {
        return this.props.addElement(obj);
    }

    handleShowAdder() {
        this.setState( state => ({
            showAdder: !state.showAdder
            })
        );
    }

    handleShowModalMultiList() {
        this.setState( state => ({
            showModalMultiList: !state.showModalMultiList
            })
        );
    }

    handleShowModalOneList() {
        this.setState( state => ({
            showModalOneList: !state.showModalOneList
            })
        );
    }

    handleShowModalList() {
        this.setState( state => ({
            showModalList: !state.showModalList
            })
        );
    }

    handleShowModalInput() {
        this.setState( state => ({
            showModalInput: !state.showModalInput
            })
        );
        console.log(this.state.showModalInput);
    }

    handleShowModalTextarea() {
        this.setState( state => ({
            showModalTextarea: !state.showModalTextarea
            })
        );
        console.log(this.state.showModalTextarea);
    }

    handleShowModalProgress() {
        this.setState( state => ({
            showModalProgress: !state.showModalProgress
            })
        );
        console.log(this.state.showModalProgress);
    }

    componentDidMount() {
        console.log("adder born");
    }

    render() {
        const showAdder = this.state.showAdder ? "adder_show" : "";
        const showModalInput = this.state.showModalInput ? "adder_modal_show" : "";
        const showModalTextarea = this.state.showModalTextarea ? "adder_modal_show" : "";
        const showModalProgress = this.state.showModalProgress ? "adder_modal_show" : "";
        const showModalList = this.state.showModalList ? "adder_modal_show" : "";
        const showModalOneList = this.state.showModalOneList ? "adder_modal_show" : "";
        const showModalMultiList = this.state.showModalMultiList ? "adder_modal_show" : "";


        return (
            <>
                <div className={"adder_icon"} onClick={this.handleShowAdder}>
                    <i className="fas fa-plus-circle"> </i>
                </div>

                <div className={"adder_wrapper " + showAdder}>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalInput}>
                            Input
                        </button>
                    </div>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalTextarea}>
                            Textarea
                        </button>
                    </div>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalOneList}>
                            List
                        </button>
                    </div>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalMultiList}>
                            Multilist
                        </button>
                    </div>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalProgress}>
                            Progress
                        </button>
                    </div>
                    <div className="adder_component">
                        <button onClick={this.handleShowModalList}>
                            Drop-down list
                        </button>
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalInput}>
                    <div className="adder_modal_container">
                        <ModalInput showModal={this.handleShowModalInput}
                                    showAdder = {this.handleShowAdder}
                                    addElement={this.handleAdd}
                                    index = {this.props.index}
                        />
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalTextarea}>
                    <div className="adder_modal_container">
                        <ModalTextarea showModal={this.handleShowModalTextarea}
                                       showAdder = {this.handleShowAdder}
                                       addElement={this.handleAdd}
                                       index = {this.props.index}
                        />
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalProgress}>
                    <div className="adder_modal_container">
                        <ModalProgress showModal={this.handleShowModalProgress}
                                       showAdder = {this.handleShowAdder}
                                       addElement={this.handleAdd}
                                       index = {this.props.index}
                        />
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalList}>
                    <div className="adder_modal_container">
                        <ModalList showModal={this.handleShowModalList}
                                       showAdder = {this.handleShowAdder}
                                       addElement={this.handleAdd}
                                       index = {this.props.index}
                        />
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalOneList}>
                    <div className="adder_modal_container">
                        <ModalOneList showModal={this.handleShowModalOneList}
                                   showAdder = {this.handleShowAdder}
                                   addElement={this.handleAdd}
                                   index = {this.props.index}
                        />
                    </div>
                </div>

                <div className={"adder_modal_menu " + showModalMultiList}>
                    <div className="adder_modal_container">
                        <ModalMultiList showModal={this.handleShowModalMultiList}
                                      showAdder = {this.handleShowAdder}
                                      addElement={this.handleAdd}
                                      index = {this.props.index}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Adder

// --------------------
// basket
{/*<button onClick={this.handleClick}>*/}
{/*button*/}
{/*</button>*/}
{/*{console.log("check connect", this.props.stateComponents)}*/}
{/*<Modaltemplate show={this.state.showModal} >modal template</Modaltemplate>*/}
{/*{this.state.surveyInfo.components.map((component, index) => {*/}
{/*switch (component.type) {*/}
{/*case "Dropdownlist":*/}
{/*return <Dropdownlist data={ component.data } index={index} key={index}/>;*/}
{/*case "Input":*/}
{/*return <Input data={ component.data } index={index} key={index}/>;*/}
{/*case "Multilist":*/}
{/*return <Multilist data={ component.data } index={index} key={index}/>;*/}
{/*case "Onelist":*/}
{/*return <Onelist data={ component.data } index={index} key={index}/>;*/}
{/*case "Progress":*/}
{/*return <Progress data={ component.data } index={index} key={index}/>;*/}
{/*case "Textarea":*/}
{/*return <Textarea data={ component.data } index={index} key={index}/>;*/}
{/*default:*/}
{/*return console.warn(`component with type ${component.type} not found`);*/}
{/*}*/}
{/*})}*/}
// if (this.props.stateComponents) {
//     } else {
//         return (
//             <div>
//                 load
//             </div>
//         )
//     }
// function mapStateToProps(state) {
//     return {
//         stateComponents: state.surveyInfo.stateComponents
//     }
// }
////////////////
{/*<div className="adder_modal_header">*/}
    {/*<div>*/}
        {/*Input*/}
    {/*</div>*/}
    {/*<div>*/}
        {/*x*/}
    {/*</div>*/}
{/*</div>*/}
{/*<div>*/}
{/*<div className="adder_modal_row">*/}
    {/*<div className="adder_modal_col-25">*/}
    {/*<label htmlFor="adder_modal_ask">Вопрос</label>*/}
{/*</div>*/}
{/*<div className="adder_modal_col-75">*/}
    {/*<input type="text" id="adder_modal_ask" name="ask" placeholder="Your name.."/>*/}
    {/*</div>*/}
{/*</div>*/}
{/*<div className="adder_modal_row">*/}
    {/*<div className="adder_modal_col-25">*/}
    {/*<label htmlFor="adder_modal_com">Комментарий</label>*/}
{/*</div>*/}
{/*<div className="adder_modal_col-75">*/}
    {/*<input type="text" id="adder_modal_com" name="com" placeholder="Your last name.."/>*/}
    {/*</div>*/}
{/*</div>*/}
{/*<div className="adder_modal_row">*/}
    {/*<div className="adder_modal_col-25">*/}
    {/*<label htmlFor="adder_modal_help">Подсказка</label>*/}
{/*</div>*/}
{/*<div className="adder_modal_col-75">*/}
    {/*<input type="text" id="adder_modal_help" name="help" placeholder="Your last name.."/>*/}
    {/*</div>*/}
{/*</div>*/}
{/*/!*<div className="adder_modal_row">*!/*/}
{/*/!*<div className="adder_modal_col-25">*!/*/}
{/*/!*<label htmlFor="adder_modal_country">Country</label>*!/*/}
{/*/!*</div>*!/*/}
{/*/!*<div className="adder_modal_col-75">*!/*/}
{/*/!*<select id="adder_modal_country" name="country">*!/*/}
{/*/!*<option value="australia">Australia</option>*!/*/}
{/*/!*<option value="canada">Canada</option>*!/*/}
{/*/!*<option value="usa">USA</option>*!/*/}
{/*/!*</select>*!/*/}
{/*/!*</div>*!/*/}
{/*/!*</div>*!/*/}
{/*/!*<div className="adder_modal_row">*!/*/}
{/*/!*<div className="adder_modal_col-25">*!/*/}
{/*/!*<label htmlFor="adder_modal_subject">Subject</label>*!/*/}
{/*/!*</div>*!/*/}
{/*/!*<div className="adder_modal_col-75">*!/*/}
// {/*/!*/!*<textarea id="subject" name="subject" placeholder="Write something.." style={"height:200px"}/>*!/*!/*/}
{/*/!*<textarea id="adder_modal_subject" name="subject" placeholder="Write something.."/>*!/*/}
{/*/!*</div>*!/*/}
{/*/!*</div>*!/*/}
{/*<div className="adder_modal_row" >*/}
    {/*<button onClick={this.handleShowModal}>Submit</button>*/}
    {/*/!*<input type="submit" value="Submit"/>*!/*/}
{/*</div>*/}
{/*</div>*/}