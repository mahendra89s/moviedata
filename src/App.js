import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import axios from 'axios';
import Results from './component/Results';
import Popup from './component/Popup';


function App() {

  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=e5004a7b";

  const search = (e) => {

    if (e.key === "Enter") {
      axios.get(`http://www.omdbapi.com/?apikey=e5004a7b&s=${state.s}`)
        .then(({ data }) => {
          let results = data.Search;
          setState(prevState => {
            return { ...prevState, results: results }
          });
        });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    console.log(s);
    setState(prevState => {
      return { ...prevState, s: s }
    })
  };

  const OpenPopup = id => {
    axios.get(`http://www.omdbapi.com/?apikey=e5004a7b&i=${id}`).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }
  const Closepop = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App" >
      <header className="App-header">
        <h1 className="App-title">Movies Database</h1>
      </header>
      <main>
        <Form handleInput={handleInput} search={search} />
        <Results results={state.results} OpenPopup={OpenPopup} />
        {typeof state.selected.Title != "undefined" ? <Popup selected={state.selected} Closepop={Closepop} /> : false}
      </main>
    </div>
  );

}

export default App;
