import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist/>
                <AddNewTodo/>
            </div>
        )
    }
}

