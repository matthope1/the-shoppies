
function Movie(props) {
    const {title, year, posterUrl} = props;

    let display = '';
    if (props.addNewNomination) {
        display = <button onClick={props.addNewNomination} disabled={props.disabled}>Nominate</button>;
    }
    else if(props.removeNomination){
        display = <button onClick={props.removeNomination}>remove</button>
    }

    const altText = `movie poster for ${title}`;

    return(
        <div className="Movie">
            <img className="movie-poster" src={posterUrl} alt={altText}/>
            <p>{title} ({year})</p>
            {display}
        </div>
    )
}

export default Movie;