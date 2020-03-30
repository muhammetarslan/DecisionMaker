import React, { Component } from "react";
import Decision from "./decision";

class Decisions extends Component {
  render() {
    return (
      <div>
        {this.props.decisions.map(decision => (
          <Decision
            key={decision.decisionId}
            onExtendAdvantage={this.props.onExtendAdvantage}
            onExtendDisadvantage={this.props.onExtendDisadvantage}
            decision={decision}
            addAdvantageClass={this.props.addAdvantageClass}
            advantageButtonInnerHtml={this.props.advantageButtonInnerHtml}
            addDisadvantageClass={this.props.addDisadvantageClass}
            disadvantageButtonInnerHtml={this.props.disadvantageButtonInnerHtml}
            onDeleteADecision={this.props.onDeleteADecision}
            onCreateAPros={this.props.onCreateAPros}
            onDeleteAPros={this.props.onDeleteAPros}
            onCreateACons={this.props.onCreateACons}
            onDeleteACons={this.props.onDeleteACons}
          ></Decision>
        ))}
      </div>
    );
  }
}

export default Decisions;
