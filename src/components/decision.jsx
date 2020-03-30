import React, { Component } from "react";
import Cons from "./cons";
import Pros from "./pros";

class Decision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prosDescription: "",
      consDescription: "",
      prosSelectValue: 1,
      consSelectValue: 1,
      prosAndConsClass: "",
      decisionButtonInnerHtml: "Decision Title"
    };
    this.handleChangeOfProsDescriptionInput = this.handleChangeOfProsDescriptionInput.bind(
      this
    );
    this.createAPros = props.onCreateAPros.bind(this);
    this.handleChangeOfConsDescriptionInput = this.handleChangeOfConsDescriptionInput.bind(
      this
    );
    this.createACons = props.onCreateACons.bind(this);
  }

  decisionEachExtend = () => {
    let prosAndConsClass = "";
    let decisionButtonInnerHtml = "";
    if (this.state.prosAndConsClass === "open") {
      decisionButtonInnerHtml = "Decision Title";
    } else {
      prosAndConsClass = "open";
      decisionButtonInnerHtml = "Hide Decision Title";
    }
    this.setState({ prosAndConsClass, decisionButtonInnerHtml });
  };

  handleChangeOfProsDescriptionInput(event) {
    this.setState({ prosDescription: event.target.value });
  }

  handleProsCreation = event => {
    event.preventDefault();
    console.log(this.state.prosDescription);
    this.createAPros(
      this.state.prosDescription,
      this.props.decision,
      parseInt(this.state.prosSelectValue)
    );
  };

  handleChangeOfProsSelectValue = event => {
    this.setState({ prosSelectValue: event.target.value });
  };

  handleChangeOfConsDescriptionInput(event) {
    this.setState({ consDescription: event.target.value });
  }

  handleConsCreation = event => {
    event.preventDefault();
    console.log(this.state.consDescription);
    this.createACons(
      this.state.consDescription,
      this.props.decision,
      parseInt(this.state.consSelectValue)
    );
  };

  handleChangeOfConsSelectValue = event => {
    this.setState({ consSelectValue: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <button
                id="decisionTitle"
                className="btn btn-dark"
                onClick={this.decisionEachExtend}
              >
                <div className="row">
                  <span className="col-sm-1 ml-5 text-warning">
                    {this.props.decision.point}
                  </span>
                  <div className="col-sm-8 pr-5 ml-5">
                    {this.props.decision.tag}
                  </div>
                  <button
                    onClick={() =>
                      this.props.onDeleteADecision(
                        this.props.decision.decisionId
                      )
                    }
                    type="button"
                    className="close ml-5 pl-5 text-secondary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </button>
              <div id="prosAndCons" className={this.state.prosAndConsClass}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <h5 className="card-title text-success">Pros</h5>

                      <div>
                        {this.props.decision.pros.map(pros => (
                          <Pros
                            key={pros.prosId}
                            prosDescription={pros.prosDescription}
                            pros={pros}
                            onDeleteAPros={this.props.onDeleteAPros}
                            decision={this.props.decision}
                          ></Pros>
                        ))}
                      </div>

                      <div id="pros" className={this.props.addAdvantageClass}>
                        <form onSubmit={this.handleProsCreation}>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-10">
                                <label className="ml-4" htmlFor="prosDesc">
                                  Enter a positive factor about your decision,
                                  than give it a point
                                </label>
                                <input
                                  onChange={
                                    this.handleChangeOfProsDescriptionInput
                                  }
                                  value={this.state.prosDescription}
                                  type="text"
                                  id="prosDesc"
                                  className="form-control ml-4"
                                  placeholder="positive value"
                                />
                              </div>
                              <select
                                value={this.state.prosSelectValue}
                                onChange={this.handleChangeOfProsSelectValue}
                                id="prosDrop"
                                className="mt-5 ml-3"
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
                            <button className="btn btn-info mt-1" type="submit">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                      <button
                        id="createNewPros"
                        className="btn btn-success"
                        onClick={this.props.onExtendAdvantage}
                      >
                        {this.props.advantageButtonInnerHtml}
                      </button>
                    </div>
                  </div>
                  <div className="col pl-0">
                    <div className="card">
                      <h5 className="card-title text-danger">Cons</h5>

                      <div>
                        {this.props.decision.cons.map(cons => (
                          <Cons
                            key={cons.consId}
                            consDescription={cons.consDescription}
                            cons={cons}
                            onDeleteACons={this.props.onDeleteACons}
                            decision={this.props.decision}
                          ></Cons>
                        ))}
                      </div>

                      <div
                        id="cons"
                        className={this.props.addDisadvantageClass}
                      >
                        <form onSubmit={this.handleConsCreation}>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-10">
                                <label className="ml-4" htmlFor="prosDesc">
                                  Enter a negative factor about your decision,
                                  than give it a point
                                </label>
                                <input
                                  onChange={
                                    this.handleChangeOfConsDescriptionInput
                                  }
                                  value={this.state.consDescription}
                                  type="text"
                                  id="prosDesc"
                                  className="form-control ml-4"
                                  placeholder="negative value"
                                />
                              </div>
                              <select
                                value={this.state.consSelectValue}
                                onChange={this.handleChangeOfConsSelectValue}
                                id="consDrop"
                                className="mt-5 ml-3"
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
                            <button className="btn btn-info mt-1" type="submit">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                      <button
                        id="createNewCons"
                        className="btn btn-warning"
                        onClick={this.props.onExtendDisadvantage}
                      >
                        {this.props.disadvantageButtonInnerHtml}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Decision;
