import { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultList from './ResultList.js';
import NominationList from './NominationList.js';

 class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    
    fetch('http://www.omdbapi.com/?s=Star&apikey=82a91ad2')
    .then(response => response.json())
    .then(data => console.log(data));

    return (
      <div className="App">
        <div className="wrapper">
          <h1>The Shoppies</h1>
          <SearchForm label="Movie Title" placeholder="Search Movies" id="movie-input" />
          <ResultList />
          <NominationList />
        </div>
      </div>
    );
  }
}

export default App;
