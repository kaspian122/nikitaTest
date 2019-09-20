import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/AdminPage/Admin";
import PrivateRouter from "./components/PrivateRoute/PrivateRouter";
import NotFound from "./pages/404 Not Found/404 Not Found";
import About from "./pages/AboutPage/AboutPage";

function App() {
    return (
        <div>
            <Switch>
                <PrivateRouter path="/" exact renderHead>
                    <Home/>
                </PrivateRouter>
                <Route path="/login" renderHead>
                    <Login/>
                </Route>
                <PrivateRouter path="/news" renderHead>
                    <News/>
                </PrivateRouter>
                <PrivateRouter path="/profile" renderHead>
                    <Profile/>
                </PrivateRouter>
                <PrivateRouter path="/about" renderHead={false}>
                    <About/>
                </PrivateRouter>
                <PrivateRouter path="/admin" renderHead>
                    <Admin/>
                </PrivateRouter>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
