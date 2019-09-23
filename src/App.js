import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Login from './pages/login';
import News from './pages/news';
import Profile from './pages/profile';
import Admin from './pages/adminPage/Admin';
import PrivateRouter from './components/privateRoute';
import NotFound from './pages/404NotFound';
import About from './pages/aboutPage/AboutPage';

function App() {
    return (
        <div>
            <Switch>
                <PrivateRouter path="/" exact renderHead component={HomePage}/>
                <Route path="/login" renderHead component={Login}/>
                <PrivateRouter path="/news" renderHead component={News}/>
                <PrivateRouter path="/profile" renderHead component={Profile}/>
                <PrivateRouter path="/about" renderHead={false} component={About}/>
                <PrivateRouter path="/admin" renderHead component={Admin}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
