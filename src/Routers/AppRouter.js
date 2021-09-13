import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { AboutScreen } from '../Pages/About/AboutScreen';
import { HomeScreen } from '../Pages/Home/HomeScreen';
import { NotFoundScreen } from '../Pages/NotFound/NotFoundScreen';
import { SearchScreen } from '../Pages/Search/SearchScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="av-item active">
                            <Link className="nav-link" to="/Pages/Home">Home</Link>
                        </li>
                        <li className="av-item">
                            <Link className="nav-link" to="/Pages/About">About</Link>
                        </li>
                        <li className="av-item">
                            <Link className="nav-link" to="/Pages/Search/parametro_ejemplo">Search</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/Pages/Home" component={HomeScreen} />
                    <Route exact path="/Pages/About" component={AboutScreen} />
                    <Route exact path="/Pages/Search/:param" component={SearchScreen} />

                    <Route component={NotFoundScreen} />                                    
                </Switch>
            </div>
        </Router>
    )
}