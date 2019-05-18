import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { surveysFetchData } from "../actions/surveys";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Constructor from "./Constructor";
import Result from "./Result";
import Options from "./Options";
import Constructorlayout from "../components/Constructorlayout";

class App extends Component {
    componentDidMount() {
      // this.props.fetchData("/api/surveys")
    }

  render() {
      return (
          <div className={"app"}>
              <Router>
                  <Constructorlayout>
                      <Route exact path="/survey" component={Constructor} />
                      <Route path="/options" component={Options} />
                      <Route path="/result" component={Result} />
                  </Constructorlayout>
              </Router>
          </div>

          // <div className={"app"}>
          //   <ul>
          //     {/*{this.props.surveys.map((survey, index) => {*/}
          //       {/*return <li key={survey._id}>*/}
          //         {/*<div>Name is: {survey.name}</div>*/}
          //         {/*<div>Number is: {survey.number}</div>*/}
          //         {/*<div>Title is: {survey.title}</div>*/}
          //         {/*<div>Comment is: {survey.comment}</div>*/}
          //             {/*/!*{survey.map((sur, index) => {*!/*/}
          //               {/*/!*return <div>*!/*/}
          //                 {/*/!*{index} = {sur}*!/*/}
          //               {/*/!*</div>*!/*/}
          //             {/*/!*})}*!/*/}
          //       {/*</li>*/}
          //     {/*})}*/}
          //   </ul>
          //
          // </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      surveys: state.surveys
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(surveysFetchData(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
