import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item}/>
            )
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todoList
    }
}

export default connect(mapStateToProps)(Todolist);
