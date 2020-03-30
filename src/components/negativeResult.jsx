import React, { Component } from "react";

class NegativeResult extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th scope="row"></th>
        <td>{this.props.decision.tag}</td>
        <td>{this.props.resultPoint}</td>
        <td>{this.props.decision.point}</td>
      </tr>
    );
  }
}

export default NegativeResult;
