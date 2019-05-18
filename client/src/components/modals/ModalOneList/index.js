import React, { Component} from "react";
import "./style.css";

class ModalOneList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Answer the question",
            subtitle: "Answer the question",
            elements: [],
            element: "",
            other: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);
        this.handleAddElementClick = this.handleAddElementClick.bind(this);
    }

    handleClose() {
        this.setState({
            title: "Answer the question",
            subtitle: "Answer the question",
            elements: [],
            element: "",
            other: false
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

    handleOtherChange() {
        this.setState(state => ({
            other: !state.other
            })
        );
        console.log("handleOtherChange", this.state.other);
    }

    handleAddElementClick() {
        // const newElementsArray = this.state.elements.push(this.state)
        const newElementsArray = [... this.state.elements, {id: new Date(), title: this.state.element}];
        // console.log("newElementsArray", newElementsArray);
        this.setState(state => ({
            elements: newElementsArray,
            element: ""
        }));
    }

    handleSubmit() {
        this.props.showAdder();
        this.props.showModal();
        // if (this.state.other) {
        //     const elementsForAddElement = [... this.state.elements, {id: new Date(), title: "Other"}];
        //     this.setState(state => ({
        //         elements: elementsForAddElement
        //     }));
        // }
        this.props.addElement({
                index: this.props.index,
                data: {
                    type: "Onelist",
                    data: {
                        options: {
                            elements: this.state.other ? [... this.state.elements, {id: new Date(), title: "Other"}] : this.state.elements
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
            elements: [],
            element: "",
            other: false
        });
    }


    componentDidMount() {
        console.log("modal input born");
    }

    render() {
        const other = this.state.other ? "Убрать элемент Другое" : "Добавить элемент Другое";

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
                    <div className="adder_modal_row" >
                        <button onClick={this.handleOtherChange}>{other}</button>
                    </div>
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

export default ModalOneList