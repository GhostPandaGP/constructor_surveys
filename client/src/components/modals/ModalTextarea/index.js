import React, { Component} from "react";
import "./style.css";

class ModalTextarea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Answer the question",
            subtitle: "Answer the question",
            placeholder: "input value"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handlePlaceholderChange = this.handlePlaceholderChange.bind(this);
    }

    handleClose() {
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            placeholder: "input value"
        });
        this.props.showModal();
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSubtitleChange(e) {
        this.setState({ subtitle: e.target.value });
    }

    handlePlaceholderChange(e) {
        this.setState({ placeholder: e.target.value });
    }

    handleSubmit() {
        this.props.showAdder();
        this.props.showModal();
        this.props.addElement({
                index: this.props.index,
                data: {
                    type: "Textarea",
                    data: {
                        options: {
                            placeholder: this.state.placeholder,
                            rows: 10,
                            cols: 40
                        },
                        title: {value: this.state.title, styles: {}},
                        subtitle: {value: this.state.subtitle, styles: {}},
                        condition: {},
                        styles: {}
                    }
                }
            });
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            placeholder: "input value"
        });
    }


    componentDidMount() {
        console.log("modal input born");
    }

    render() {
        return (
            <>
                <div className="adder_modal_header">
                    <div>
                        Input
                    </div>
                    <div className={"adder_modal_header_icon"} onClick={this.handleClose}>
                        <i className="fas fa-times"> </i>
                    </div>
                </div>
                <div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label htmlFor="adder_modal_ask">Вопрос</label>
                        </div>
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   id="adder_modal_ask"
                                   name="ask"
                                   placeholder="Введите вопрос"
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label htmlFor="adder_modal_com">Комментарий</label>
                        </div>
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   id="adder_modal_com"
                                   name="com"
                                   placeholder="Введите комментарий"
                                   value={this.state.subtitle}
                                   onChange={this.handleSubtitleChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label htmlFor="adder_modal_help">Подсказка</label>
                        </div>
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   id="adder_modal_help"
                                   name="help"
                                   placeholder="Your last name.."
                                   value={this.state.placeholder}
                                   onChange={this.handlePlaceholderChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row" >
                        {/*<button onClick={this.handleShowModal}>Submit</button>*/}
                        <button onClick={this.handleSubmit}>Создать</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalTextarea