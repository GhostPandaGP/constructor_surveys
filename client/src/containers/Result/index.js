import React, { Component} from "react";
import "./style.css";

import Bar1Chart1 from "../../components/charts/Bar1Chart1";
import RadarChart1 from "../../components/charts/RadarChart1";
import Pie1Chart1 from "../../components/charts/Pie1Chart1";

class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className={"result_container"}>
                    <div className={"result_chart_container"}>
                        <Bar1Chart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <RadarChart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <Pie1Chart1/>
                    </div>
                </div>
                <div className={"result_container"}>
                    <div className={"result_chart_container"}>
                        <Bar1Chart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <RadarChart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <Pie1Chart1/>
                    </div>
                </div>
                <div className={"result_container"}>
                    <div className={"result_chart_container"}>
                        <Bar1Chart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <RadarChart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <Pie1Chart1/>
                    </div>
                </div>
                <div className={"result_container"}>
                    <div className={"result_chart_container"}>
                        <Bar1Chart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <RadarChart1/>
                    </div>
                    <div className={"result_chart_container"}>
                        <Pie1Chart1/>
                    </div>
                </div>
            </>
        )
    }
}

export default Result