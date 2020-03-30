import React, { Component } from "react";
class Cons extends Component {
  render() {
    return (
      <dl id="consDl">
        <dd className="consLi">
          <hr className="solid"></hr>
          <div className="row text-center">
            <div className="col-sm-1 ml-4">
              <span className="cons border border-white rounded shadow p-2 mb-2 rounded">
                {this.props.cons.point}
              </span>
            </div>
            <h6 className="card-title col-sm-10 m-1">
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
          <hr className="solid"></hr>
        </dd>
      </dl>
    );
  }
}

export default Cons;
