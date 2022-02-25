import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;