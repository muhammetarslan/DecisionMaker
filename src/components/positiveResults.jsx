import React, { Component } from "react";
import PositiveResult from "./positiveResult";
class PositiveResults extends Component {
  render() {
    if (this.props.decisionResults[0] == undefined) {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.decisionResults[0].map(pR => (
          <PositiveResult
            key={pR[0].decisionId}
            decision={pR[0]}
            resultPoint={pR[1]}
          ></PositiveResult>
        ))}
      </React.Fragment>
    );
  }
}

export default PositiveResults;
