import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Login, Dashboard } from './container';
import requireAuth from './utils/requireAuth';
import Loader from './components/loader/loader';
const Routes = () => (
    <Router>
        <>
            <Loader />
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
        </>   
    </Router>
)

export default Routes;