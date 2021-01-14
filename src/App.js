import { Component } from 'react';
import './App.css';
import MovieSearchForm from './MovieSearchForm.js';
import MovieQueryResults from './MovieQueryResults.js';
import UserNominations from './UserNominations.js';
import firebase from './firebase';
import 'firebase/auth';


const auth = firebase.auth();

class App extends Component {

  constructor() {
    super();
    this.state = {
      movieSearchInput: '',
      movieList: [],
      nominationList: [],
      user: null, 
    };

    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.movieSearchQuery = this.movieSearchQuery.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
    this.anonSignIn = this.anonSignIn.bind(this);
    this.addNewNomination = this.addNewNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
  }

  movieSearchQuery(movieTitle) {
    const endPoint = `http://www.omdbapi.com/?s=${movieTitle}&apikey=82a91ad2`;
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        let dataList = [...data.Search];
        this.setState({
          movieList: dataList,
        });
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

  addNewNomination(movie) {
    let newNominationList = [...this.state.nominationList];
    newNominationList.push(movie);
    this.setState({
      nominationList: newNominationList,
    })
  }

  removeNomination(movie) {
    let newNominationList = [...this.state.nominationList];

    let title = movie.Title;

    let found = -1;
    for (let i = 0; i < newNominationList.length; i ++) {
      if (newNominationList[i].Title == title) {
          found = i;
      }
    }

    if (found > -1) {
      newNominationList.splice(found,1);
    }

    this.setState({
      nominationList: newNominationList
    })
  }

  anonSignIn() {
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
  
  componentDidMount() {
    this.anonSignIn();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>The Shoppies</h1>
          <MovieSearchForm 
            label="Movie Title" 
            placeholder="Search Movies"
            id="movie-input" 
            handleSubmit={this.handleInputSubmit} 
            handleChange={this.handleInputChange}/>
          <MovieQueryResults 
            dataList={this.state.movieList} 
            searchTerm={this.state.movieSearchInput} 
            addNewNomination={this.addNewNomination} 
            nList={this.state.nominationList}
          />
          <UserNominations 
            dataList={this.state.nominationList}
            removeNomination={this.removeNomination}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
