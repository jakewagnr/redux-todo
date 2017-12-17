require("./main.scss");

import React from "react";
import {render} from "react-dom";
import Main from "./components/Main";
import reducers from "./reducers/Reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

let state = {
    todoList: [
        {key: 1, id: 1, text: "Learn React", status: 1},
        {key: 2, id: 2, text: "Learn Redux", status: 1},
        {key: 3, id: 3, text: "Reduxify this app", status: 0},
        {key: 4, id: 4, text: "Learn React Native", status: 0}
    ],
    addTodoValue: ""
};

const store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById("react-app")
);