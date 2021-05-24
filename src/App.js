import React, { Suspense } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Writers from "./components/Writers";
import { Spinner } from "react-bootstrap";

function App() {
    return (
        <Suspense fallback={<Spinner animation="border" />}>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Writers/:id?" component={Writers} />
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;