import { Component } from 'react';
import './App.css';
import Search from './Search.js';
import ResultList from './ResultList.js';
import NominationList from './NominationList.js';

 class App extends Component {
   render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>The Shoppies</h1>
          <Search />
          <ResultList />
          <NominationList />
        </div>
      </div>
    );
  }
}

export default App;
