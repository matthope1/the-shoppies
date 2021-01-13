import Movie from './Movie';

function ResultList(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    return ( 
        <div className="ResultList">
            <p>Results for "{props.searchTerm}"</p>
            {props.dataList.map((movie,i) => {

                let disabled = false;
                if (props.nList.includes(movie)) {
                    disabled = true;
                }
                return (
                    <Movie disabled={disabled} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} handleClick={() => props.handleClick(movie)} />
                )
            })}
        </div>
    )
}

export default ResultList;