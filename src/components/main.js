import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Portfolio from './portfolio';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;