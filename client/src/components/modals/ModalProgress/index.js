import React, { Component} from "react";
import "./style.css";

class ModalProgress extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Answer the question",
            subtitle: "Answer the question",
            start: 1,
            end: 10
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleClose() {
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            start: 1,
            end: 10
        });
        this.props.showModal();
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSubtitleChange(e) {
        this.setState({ subtitle: e.target.value });
    }

    handleStartChange(e) {
        this.setState({ start: e.target.value });
    }

    handleEndChange(e) {
        this.setState({ end: e.target.value });
    }

    handleSubmit() {
        this.props.showAdder();
        this.props.showModal();
        this.props.addElement({
                index: this.props.index,
                data: {
                    type: "Progress",
                    data: {
                        options: {
                            start: Number(this.state.start),
                            end: Number(this.state.end),
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
            start: 1,
            end: 10
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
                        Шкала
                    </div>
                    <div className={"adder_modal_header_icon"} onClick={this.handleClose}>
                        {/*<button>*/}
                            <i className="fas fa-times"> </i>
                        {/*</button>*/}
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
                                   placeholder="Your name.."
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
                                   placeholder="Your last name.."
                                   value={this.state.subtitle}
                                   onChange={this.handleSubtitleChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label htmlFor="adder_modal_start">Начало</label>
                        </div>
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   id="adder_modal_start"
                                   name="help"
                                   placeholder="Your last name.."
                                   value={this.state.start}
                                   onChange={this.handleStartChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label htmlFor="adder_modal_end">Конец</label>
                        </div>
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   id="adder_modal_end"
                                   name="help"
                                   placeholder="Your last name.."
                                   value={this.state.end}
                                   onChange={this.handleEndChange}
                            />
                        </div>
                    </div>
                    <div className="adder_modal_row" >
                        {/*<button onClick={this.handleShowModal}>Submit</button>*/}
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalProgress