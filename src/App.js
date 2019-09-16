import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/AdminPage/Admin";
import PrivateRouter from "./components/PrivateRoute/PrivateRouter";
import NotFound from "./pages/404 Not Found/404 Not Found";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/news" component={News}/>
                <Route path="/profile" component={Profile}/>
                <PrivateRouter path="/admin" component={Admin}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
