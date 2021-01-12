import { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import ResultList from './ResultList.js';
import NominationList from './NominationList.js';
import firebase from './firebase';
import 'firebase/auth';

const auth = firebase.auth();

class App extends Component {

  constructor() {
    super();
    this.state = {
      movieSearchInput: '',
      movieQueryRes: [],
      user: null, 
    };

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.movieSearchQuery = this.movieSearchQuery.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  movieSearchQuery(movieTitle) {
    let endPoint = `http://www.omdbapi.com/?s=${movieTitle}&apikey=82a91ad2`;

    fetch(endPoint)
    .then(response => response.json())
    .then(data => {

        let dataList = [...data.Search];

        // this.setState({
        //   movieQueryRes: dataList[0],
        // });
      }
    );
  }

  handleInputSubmit(event) {
    this.movieSearchQuery(this.state.movieSearchInput);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({movieSearchInput: event.target.value});
  }

  writeUserData(userId) {
    firebase.database().ref('users/' + userId).set({
      uid: userId
    })
  }

  componentDidMount() {
    if (!(this.state.user)) {
      auth.signInAnonymously()
      .then(() => {
        this.setState({user: auth.currentUser}, function() {
          this.writeUserData(this.state.user.uid);
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
    }
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
          <ResultList dataList={this.state.movieQueryRes} />
          <NominationList />
        </div>
      </div>
    );
  }
}

export default App;
