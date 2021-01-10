import { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultList from './ResultList.js';
import NominationList from './NominationList.js';

 class App extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
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
