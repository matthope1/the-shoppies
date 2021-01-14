import Movie from './Movie';

function MovieQueryResults(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    return ( 
        <div className="MovieQueryResults">
            <p>Results for "{props.searchTerm}"</p>
            {props.dataList.map((movie,i) => {

                let disabled = false;
                if (props.nList.includes(movie)) {
                    disabled = true;
                }
                return (
                    <Movie key={i} disabled={disabled} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} addNewNomination={() => props.addNewNomination(movie)} />
                )
            })}
        </div>
    )
}

export default MovieQueryResults;