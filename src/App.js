import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Searchbar from "./Searchbar";

const App = () => {
    return (
    <BrowserRouter>
       <header>
        <Link to="/">Anime Recommender</Link>
       </header>
        {/* <Searchbar /> */}
    </BrowserRouter>
    )
}


render(<App />, document.getElementById("root"));