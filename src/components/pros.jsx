import React, { Component } from "react";
class Pros extends Component {
  render() {
    return (
      <div>
        <dl id="prosUl">
          <dd className="prosLi">
            <hr className="solid"></hr>
            <div className="row text-center">
              <div className="col-sm-1 ml-4">
                <span className="border border-white rounded shadow p-2 mb-2 rounded">
                  {this.props.pros.point}
                </span>
              </div>

              <h6 className="card-title col-sm-10 m-1">
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
            <hr className="solid"></hr>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Pros;
