import React, { Component} from "react";
import "./style.css";
import Loader from "../elements/Input";
import {Link } from "react-router-dom";


class Constructorlayout extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (true) {
            return (
                <>
                    <nav className={"constructor__layout_nav"}>
                        <input type="checkbox" id={"chk"}/>
                        <label htmlFor="chk" className={"constructor__layout_show-menu-btn"}>
                            <i className="fas fa-ellipsis-h"></i>
                        </label>
                        <ul className={"constructor__layout_menu"}>
                            <li className={"constructor__layout_menu_element"}>
                                <Link to={"survey"} className={"constructor__layout_menu_link"} >Survey</Link>
                            </li>
                            <li className={"constructor__layout_menu_element"}>
                                <Link to={"options"} className={"constructor__layout_menu_link"} >Options</Link>
                            </li>
                            <li className={"constructor__layout_menu_element"}>
                                <Link to={"result"} className={"constructor__layout_menu_link"} >Result</Link>
                            </li>
                            <label htmlFor="chk" className={"constructor__layout_hide-menu-btn"}>
                                <i className={"fas fa-times"}> </i>
                            </label>
                        </ul>
                    </nav>
                    <main className={"constructor__layout_wrapper_main"}>
                        {this.props.children}
                    </main>
                </>
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

export default Constructorlayout