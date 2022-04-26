import React from "react";
import { Route, Switch } from "react-router-dom";

import Bbox from "./components/class-box";
import Main from './components/Main';

const Routes = () => {
    return (
        <Switch>
            <Route component={Main} path="/" exact />
            <Route component={Bbox} path="/image/:filename" />
        </Switch>
    )
}

export default Routes;