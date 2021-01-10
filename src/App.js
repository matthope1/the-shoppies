import { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultList from './ResultList.js';
import NominationList from './NominationList.js';

 class App extends Component {

  constructor() {
    super();
    this.state = {
      movieSearchInput: '',
    };

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.movieSearchQuery = this.movieSearchQuery.bind(this);
  }

  movieSearchQuery(movieTitle) {
    let endPoint = `http://www.omdbapi.com/?s=${movieTitle}&apikey=82a91ad2`;
    let res = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        res = data;
      }
    );

    if (!res) {
      console.log("Error: movieSearchQuery");
      return null;
    }

    return res;
  }

  handleInputSubmit(event) {
    let res = this.movieSearchQuery(this.state.movieSearchInput);
    console.log(res);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({movieSearchInput: event.target.value});
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="App">
        <div className="wrapper">
          <h1>The Shoppies</h1>
          <SearchForm 
            label="Movie Title" 
            placeholder="Search Movies"
            id="movie-input" 
            handleSubmit={this.handleInputSubmit} 
            handleChange={this.handleInputChange}/>
          <ResultList />
          <NominationList />
        </div>
      </div>
    );
  }
}

export default App;
