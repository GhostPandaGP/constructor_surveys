import React, { Component} from "react";
import "./style.css";

class ModalMultiList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Answer the question",
            subtitle: "Answer the question",
            elements: [],
            element: "",
            type: "consent"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
        this.handleAddElementClick = this.handleAddElementClick.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleClose() {
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            elements: [],
            element: "",
            type: "consent"
        });
        this.props.showModal();
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSubtitleChange(e) {
        this.setState({ subtitle: e.target.value });
    }

    handleElementChange(e) {
        this.setState({ element: e.target.value });
    }

    handleTypeChange() {
        if (this.state.type === "consent") {
            this.setState({ type: "decline" });
        } else {
            this.setState({ type: "consent" });
        }
    }

    handleAddElementClick() {
        // const newElementsArray = this.state.elements.push(this.state)
        if (this.state.element) {
            const newElementsArray = [... this.state.elements, {id: new Date(), title: this.state.element}];
            // console.log("newElementsArray", newElementsArray);
            this.setState(state => ({
                elements: newElementsArray,
                element: ""
            }));
        }
    }

    handleSubmit() {
        this.props.showAdder();
        this.props.showModal();
        this.props.addElement({
                index: this.props.index,
                data: {
                    type: "Multilist",
                    data: {
                        options: {
                            elements: this.state.elements
                        },
                        title: {value: this.state.title, styles: {}},
                        subtitle: {value: this.state.subtitle, styles: {}},
                        condition: {},
                        styles: {
                            type: this.state.type
                        }
                    }
                }
            });
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            elements: [],
            element: "",
            type: "consent"
        });
    }


    componentDidMount() {
        console.log("modal input born");
    }

    render() {
        const typeText = this.state.type === "consent" ? "Список на добавление" : "Список на исключение";

        return (
            <>
                <div className="adder_modal_header">
                    <div>
                        Список
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
                        <div className="adder_modal_col-75">
                            <label>
                                {typeText}
                            </label>
                        </div>
                        <div className="adder_modal_col-25">
                            <button onClick={this.handleTypeChange}>
                                Изменить тип
                            </button>
                        </div>
                    </div>
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-25">
                            <label>Элементы:</label>
                        </div>
                        <div className="adder_modal_col-75">
                        </div>
                    </div>
                    {this.state.elements.map((element, index) => {
                        return (
                            <div className="adder_modal_row" key={index}>
                                {element.title}
                            </div>
                        )
                    })}
                    <div className="adder_modal_row">
                        <div className="adder_modal_col-75">
                            <input type="text"
                                   placeholder={"Введите пункт"}
                                   onChange={this.handleElementChange}
                                   value={this.state.element}
                            />
                        </div>
                        <div className="adder_modal_col-25">
                            <button onClick={this.handleAddElementClick}>
                                Добавить элемент
                            </button>
                        </div>
                    </div>
                    <div className="adder_modal_row" >
                        <button onClick={this.handleSubmit}>Создать</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalMultiList