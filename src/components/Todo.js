import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Actions";

class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.toggleStatus}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        )
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        toggleStatus : () => dispatch(actions.toggleStatus(ownProps.id))
    };
}

export default connect(undefined, mapDispatchToProps)(Todo);