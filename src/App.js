import React from "react";
import './App.css';
import { Header } from './components/header';
import { Home } from './components/home';
import { About } from './components/about';
import { Cv } from './components/cv';

function App() {
    return (
        <div id="page">
            <div id={"container-wrap"}>
                <Header></Header>
                <Home></Home>
                <About></About>
                <Cv></Cv>
            </div>
        </div>
    );
}

export default App;
