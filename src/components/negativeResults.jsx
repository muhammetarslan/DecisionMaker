import React, { Component } from "react";
import NegativeResult from "./negativeResult";

class NegativeResults extends Component {
  render() {
    if (this.props.decisionResults[1] == undefined) {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.decisionResults[1].map(nR => (
          <NegativeResult
            key={nR[0].decisionId}
            decision={nR[0]}
            resultPoint={nR[1]}
          ></NegativeResult>
        ))}
      </React.Fragment>
    );
  }
}

export default NegativeResults;
