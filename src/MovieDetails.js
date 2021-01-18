import {Component, useEffect, useState} from 'react';


class MovieDetails extends Component {
    componentDidMount() {
        const endPoint = `http://www.omdbapi.com/?i=${this.props.imdbID}`
        fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                let dataList = [...data.Search];
                console.log(dataList);
            }
            else {
                console.log("no data yet");
            }
        });
    }

    constructor() {
        return(
            <div>
                movieDetails
            </div>
        )
    }
}

export default MovieDetails;