import React, { Component } from "react";
import "./App.css";
import Decisions from "./components/decisions";
import PositiveResults from "./components/positiveResults";
import NegativeResults from "./components/negativeResults";

class App extends Component {
  state = {
    decisions: [
      {
        decisionId: 2,
        tag: "sample decision",
        point: 3,
        pros: [
          {
            prosId: 1,
            prosDescription: "a positive example",
            point: 2
          }
        ],
        cons: [
          {
            consId: 1,
            consDescription: "a negative example",
            point: 3
          }
        ]
      }
    ],
    addAdvantageClass: "",
    advantageButtonInnerHtml: "Add an advantage",
    addDisadvantageClass: "",
    disadvantageButtonInnerHtml: "Add a disadvantage",
    decisionCreationClass: "closed",
    createADecisionButtonInnerHtml: "Create a decision",
    decisionDescription: "",
    decisionSelectValue: 1,
    decisionResults: [],
    resultsClass: "row",
    seeResultsButtonInnerHtml: "See Results"
  };
  constructor(props) {
    super(props);
    this.createADecision = this.createADecision.bind(this);
    this.handleChangeOfDecisionSelectValue = this.handleChangeOfDecisionSelectValue.bind(
      this
    );
    this.handleChangeOfDecisionDescriptionInput = this.handleChangeOfDecisionDescriptionInput.bind(
      this
    );
  }

  createAPros = (prosDescription, decision, point) => {
    const decisions = [...this.state.decisions];
    const index = decisions.indexOf(decision);
    decisions[index].pros.push({
      prosId:
        decisions[index].pros.length > 0
          ? decisions[index].pros[decisions[index].pros.length - 1].prosId + 1
          : 0,
      prosDescription: prosDescription,
      point: point
    });
    this.setState({ decisions });
  };

  deleteAPros = (prosId, decision) => {
    let decisions = this.state.decisions;
    let index = 0;
    let indexOfDecision = decisions.indexOf(decision);
    console.log("indexOfDecision: ", indexOfDecision);
    for (var i = 0; i < decisions[indexOfDecision].pros.length; i++) {
      if (decisions[indexOfDecision].pros[i].prosId == prosId) index = i;
    }
    if (index == null) {
      console.log("couldn't find index");
    } else {
      decisions[indexOfDecision].pros.splice(index, 1);
    }
    this.setState({ decisions });
  };

  createACons = (consDescription, decision, point) => {
    const decisions = [...this.state.decisions];
    const index = decisions.indexOf(decision);
    decisions[index].cons.push({
      consId:
        decisions[index].cons.length > 0
          ? decisions[index].cons[decisions[index].cons.length - 1].consId + 1
          : 0,
      consDescription: consDescription,
      point: point
    });
    this.setState({ decisions });
  };

  deleteACons = (consId, decision) => {
    console.log("delete ", consId);
    let decisions = this.state.decisions;
    let index = 0;
    const indexOfDecision = decisions.indexOf(decision);
    for (var i = 0; i < decisions[indexOfDecision].cons.length; i++) {
      if (decisions[indexOfDecision].cons[i].consId == consId) index = i;
    }
    if (index == null) {
      console.log("couldn't find index");
    } else {
      decisions[indexOfDecision].cons.splice(index, 1);
    }
    this.setState({ decisions });
  };

  //handling creation of a decision functions
  createADecision = e => {
    e.preventDefault();
    const decisions = this.state.decisions;
    decisions.push({
      decisionId:
        decisions.length > 0
          ? decisions[decisions.length - 1].decisionId + 1
          : 1,
      tag: this.state.decisionDescription,
      point: this.state.decisionSelectValue,
      pros: [],
      cons: [],
      prosAndConsClass: "",
      decisionButtonInnerHtml: "Decision Title"
    });
    this.setState({ decisions });
  };

  handleChangeOfDecisionDescriptionInput(event) {
    this.setState({ decisionDescription: event.target.value });
  }
  handleChangeOfDecisionSelectValue(event) {
    this.setState({ decisionSelectValue: event.target.value });
  }

  //end of handling creation of a decision functions
  deleteADecision = decisionId => {
    const decisions = this.state.decisions.filter(
      d => d.decisionId != decisionId
    );
    this.setState({ decisions });
  };

  extendAdvantage = () => {
    let addAdvantageClass = "";
    let advantageButtonInnerHtml = "";
    if (this.state.addAdvantageClass === "open") {
      advantageButtonInnerHtml = "Add an advantage";
    } else {
      addAdvantageClass = "open";
      advantageButtonInnerHtml = "Cancel adding";
    }
    this.setState({ addAdvantageClass, advantageButtonInnerHtml });
  };
  extendDisadvantage = () => {
    let addDisadvantageClass = "";
    let disadvantageButtonInnerHtml = "";
    if (this.state.addDisadvantageClass === "open") {
      disadvantageButtonInnerHtml = "Add a disadvantage";
    } else {
      addDisadvantageClass = "open";
      disadvantageButtonInnerHtml = "Cancel adding";
    }
    this.setState({ addDisadvantageClass, disadvantageButtonInnerHtml });
  };

  extendDecisionCreation = () => {
    let decisionCreationClass = "closed";
    let createADecisionButtonInnerHtml = "Create a decision";
    if (this.state.decisionCreationClass === "closed") {
      decisionCreationClass = "open";
      createADecisionButtonInnerHtml = "Cancel Creation";
    }
    this.setState({ decisionCreationClass, createADecisionButtonInnerHtml });
  };

  getPositive0AndNegative1Decisions = () => {
    let positiveDecisions = [];
    let negativeDecisions = [];
    const decisions = this.state.decisions;
    for (let i = 0; i < decisions.length; i++) {
      let sums = 0;
      for (let j = 0; j < decisions[i].pros.length; j++) {
        sums += decisions[i].pros[j].point;
      }
      for (let k = 0; k < decisions[i].cons.length; k++) {
        sums -= decisions[i].cons[k].point;
      }
      if (sums >= 0) {
        positiveDecisions.push([decisions[i], sums]);
      } else {
        negativeDecisions.push([decisions[i], sums]);
      }
    }
    let decisionResults = [positiveDecisions, negativeDecisions];

    let resultsClass = "row";
    let seeResultsButtonInnerHtml = "See Results";
    if (this.state.resultsClass == "row") {
      resultsClass = "row open";
      seeResultsButtonInnerHtml = "Hide Results";
    }
    this.setState({ decisionResults, resultsClass, seeResultsButtonInnerHtml });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card text-center">
                <button
                  id="createNewDecision"
                  className="btn btn-secondary"
                  onClick={this.extendDecisionCreation}
                >
                  {this.state.createADecisionButtonInnerHtml}
                </button>
                <div
                  className={this.state.decisionCreationClass}
                  id="createTableRow"
                >
                  <form onSubmit={this.createADecision}>
                    <div className="form-group">
                      <label htmlFor="tableTitle">Enter decision title</label>
                      <input
                        value={this.state.decisionDescription}
                        onChange={this.handleChangeOfDecisionDescriptionInput}
                        type="text"
                        className="form-control"
                        id="tableTitle"
                      />
                      <small id="titleHelp" className="form-text text-muted">
                        to remember what is this decision about
                      </small>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="form-group">
                      <label htmlFor="importanceDrop">
                        How important this decision for you?
                      </label>
                      <select
                        id="importanceDrop"
                        value={this.state.decisionSelectValue}
                        onChange={this.handleChangeOfDecisionSelectValue}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                    <button
                      id="createANewDecision"
                      className="btn btn-info m-2"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Decisions
            decisions={this.state.decisions}
            onExtendAdvantage={this.extendAdvantage}
            onExtendDisadvantage={this.extendDisadvantage}
            addAdvantageClass={this.state.addAdvantageClass}
            advantageButtonInnerHtml={this.state.advantageButtonInnerHtml}
            addDisadvantageClass={this.state.addDisadvantageClass}
            disadvantageButtonInnerHtml={this.state.disadvantageButtonInnerHtml}
            createADecision={this.createADecision}
            onDeleteADecision={this.deleteADecision}
            onCreateAPros={this.createAPros}
            onDeleteAPros={this.deleteAPros}
            onCreateACons={this.createACons}
            onDeleteACons={this.deleteACons}
          />
          {/* compare and result buttons */}

          <div>
            <div className="row">
              <div className="col-sm-6 text-center">
                <button id="decisionTitle" className="btn btn-block btn-light">
                  Compare(will be added soon)
                </button>
              </div>
              <div className="col text-center pl-0">
                <button
                  id="decisionTitle"
                  className="btn btn-light btn-block"
                  onClick={this.getPositive0AndNegative1Decisions}
                >
                  {this.state.seeResultsButtonInnerHtml}
                </button>
              </div>
            </div>

            <div id="resultTables" className={this.state.resultsClass}>
              <table className="table m-5">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Positive Decisions</th>
                    <th scope="col">Result</th>
                    <th scope="col">Decision Value</th>
                  </tr>
                </thead>
                <tbody>
                  <PositiveResults
                    decisionResults={this.state.decisionResults}
                  />
                </tbody>
              </table>
              <table className="table ml-5 mr-5">
                <thead className="thead-secondary">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Negative Decisions</th>
                    <th scope="col">Result</th>
                    <th scope="col">Decision Value</th>
                  </tr>
                </thead>
                <tbody>
                  <NegativeResults
                    decisionResults={this.state.decisionResults}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
