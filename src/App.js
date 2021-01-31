import { Component } from 'react';
import {
BrowserRouter as Router,
Route, Link } from 'react-router-dom';
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
    const endPoint = `https://www.omdbapi.com/?apikey=82a91ad2&s=${movieTitle}`;
    
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        if (data.Response === "True") {
          let dataList = [...data.Search];
          this.setState({
            movieList: dataList,
          });
        }
        else {
          console.log("no data yet");
        }
      }
    );
  }

  handleInputSubmit(event) {
    this.movieSearchQuery(this.state.movieSearchInput);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({movieSearchInput: event.target.value}, (() => {
      this.movieSearchQuery(this.state.movieSearchInput);
    }));
  }

  writeUserData(userId, nominationList) {
    firebase.database().ref('users/' + userId).set({
      uid: userId,
      nominationList
    })
  }

  addNewNomination(movie) {
    let newNominationList = [...this.state.nominationList];
    newNominationList.push(movie);
    this.setState({
      nominationList: newNominationList,
    });

    this.writeUserData(this.state.user.uid, newNominationList);
  }

  removeNomination(movie) {
    let newNominationList = [...this.state.nominationList];
    const title = movie.Title;
    let found = -1;

    for (let i = 0; i < newNominationList.length; i ++) {
      if (newNominationList[i].Title === title) {
          found = i;
      }
    }

    if (found > -1) {
      newNominationList.splice(found,1);
    }

    this.setState({
      nominationList: newNominationList
    },() => {
      this.writeUserData(this.state.user.uid, newNominationList);
    });
  }

  anonSignIn() {
    if (!(this.state.user)) {
      auth.signInAnonymously()
      .then(() => this.setState({user: auth.currentUser}))
      .then(() => {
        let nominationListRef = firebase.database().ref('users/' + this.state.user.uid + '/nominationList');
        nominationListRef.on('value', (snapshot) => {
          const data = snapshot.val();
          if (data) {
            this.setState({nominationList: data});
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode);
      });
    }
  }
  
  componentDidMount() {
    this.anonSignIn();
  }

  render() {
    let display = 'banner banner-hide';
    if (this.state.nominationList.length >= 5) {
      display = 'banner banner-show';
    }
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="wrapper">
            <h1>The Shoppies</h1>
            <h2 className={display}> YOU HAVE 5 NOMINATIONS</h2>
            <MovieSearchForm 
              label="Movie Title" 
              placeholder="Search Movies"
              id="movie-input" 
              handleSubmit={this.handleInputSubmit} 
              handleChange={this.handleInputChange}
              />
            <h3>Results for {this.state.movieSearchInput}</h3> 
            <MovieQueryResults 
              dataList={this.state.movieList} 
              searchTerm={this.state.movieSearchInput} 
              addNewNomination={this.addNewNomination} 
              nList={this.state.nominationList}
            />
            <h3>Your Nomination(s)</h3>
            <UserNominations 
              dataList={this.state.nominationList}
              removeNomination={this.removeNomination}
            /> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
