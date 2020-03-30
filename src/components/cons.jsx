import React, { Component } from "react";
class Cons extends Component {
  render() {
    return (
      <dd className="consLi">
        <hr className="solid"></hr>
        <div className="row justify-content-md-center">
          <div className="col-1">
            <span className="cons border border-white rounded shadow p-2 mb-2 rounded">
              {this.props.cons.point}
            </span>
          </div>
          <div className="col-10">
            <h6 className="card-title">
              {this.props.cons.consDescription}
              <button
                onClick={() =>
                  this.props.onDeleteACons(
                    this.props.cons.consId,
                    this.props.decision
                  )
                }
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </h6>
          </div>
        </div>
        <hr className="solid"></hr>
      </dd>
    );
  }
}

export default Cons;
