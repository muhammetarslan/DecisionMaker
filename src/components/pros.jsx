import React, { Component } from "react";
class Pros extends Component {
  render() {
    return (
      <dd className="prosLi">
        <hr className="solid"></hr>
        <div className="row justify-content-md-center">
          <div className="col-1">
            <span className="border border-white rounded shadow p-2  mb-2 rounded">
              {this.props.pros.point}
            </span>
          </div>
          <div className="col-10">
            <h6 className="card-title">
              {this.props.pros.prosDescription}
              <button
                onClick={() =>
                  this.props.onDeleteAPros(
                    this.props.pros.prosId,
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

export default Pros;
