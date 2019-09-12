import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Request from "./components/Request/Request";
import Profile from "./pages/Profile/Profile";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/news" component={News}/>
                <Route path="/request" component={Request}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </div>
    );
}

export default App;
