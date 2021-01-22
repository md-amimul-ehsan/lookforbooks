import React from "react";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/BookDetails" exact={true} component={BookDetails}/>
            </div>
            </BrowserRouter>
        </div>
    );
};
export default App;