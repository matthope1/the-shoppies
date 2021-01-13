
function Movie(props) {
    const {title, year, posterUrl} = props;
    return(
        <div className="Movie">
            {/* <img className="movie-poster" src={posterUrl} alt="movie-poster"/> */}
            <p>{title} ({year})</p>
            <button>Nominate</button>
        </div>
    )
}

export default Movie;