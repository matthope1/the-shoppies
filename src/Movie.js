
function Movie(props) {
    const {title, year, posterUrl} = props;

    let display = '';
    if (props.addNewNomination) {
        display = <button onClick={props.addNewNomination} disabled={props.disabled}>Nominate</button>;
    }
    else if(props.removeNomination){
        console.log("its remove");
        display = <button onClick={props.removeNomination}>remove</button>
    }
    return(
        <div className="Movie">
            {/* <img className="movie-poster" src={posterUrl} alt="movie-poster"/> */}
            <p>{title} ({year})</p>
            {/* <button onClick={props.addNewNomination} disabled={props.disabled}>Nominate</button> */}
            {display}
        </div>
    )
}

export default Movie;