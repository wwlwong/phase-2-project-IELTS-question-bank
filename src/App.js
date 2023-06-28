import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Speakingpart1 from "./Speakingpart1";
import Speakingpart2 from "./Speakingpart2";
import Speakingpart3 from "./Speakingpart3";
import QuestionForm from './QuestionForm';
import NavBar from './NavBar';

function App() {
  const [questions, setQuestions] = useState([])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/Speakingpart1">
            <Speakingpart1 questions={questions} setQuestions={setQuestions}/>
          </Route>
          <Route exact path="/Speakingpart2">
            <Speakingpart2 questions={questions} setQuestions={setQuestions}/>
          </Route>
          <Route exact path="/Speakingpart3">
            <Speakingpart3 questions={questions} setQuestions={setQuestions}/>
          </Route>
          <Route exact path="/QuestionForm">
            <QuestionForm questions={questions} setQuestions={setQuestions}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
}

export default App;
