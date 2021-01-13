import Movie from './Movie';

function ResultList(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    return ( 
        <div className="ResultList">
            <p>Results for "{props.searchTerm}"</p>
            {props.dataList.map((movie,i) => {
                return(
                    <Movie title={movie.Title} year={movie.Year} posterUrl={movie.Poster} />
                )
            })}
        </div>
    )
}

export default ResultList;