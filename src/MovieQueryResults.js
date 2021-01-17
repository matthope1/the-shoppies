import Movie from './Movie';

function MovieQueryResults(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    return ( 
        <div className="MovieQueryResults">
            <p>Results for "{props.searchTerm}"</p>
            {props.dataList.map((movie,i) => {

                const title = movie.Title;

                let found = false;

                try  {
                    for (let i = 0; i < props.nList.length; i ++) {
                        if (props.nList[i].Title === title) {
                            found = true;
                        }
                    }
                }
                catch(err) {
                    console.log("error: ", err);
                }
                
                return (
                    <Movie key={i} disabled={found} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} addNewNomination={() => props.addNewNomination(movie)} />
                )
            })}
        </div>
    )
}

export default MovieQueryResults;