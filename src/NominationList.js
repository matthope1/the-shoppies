
import Movie from './Movie';

function NominaionList(props){
    // takes a list of objects and displays them

    return (
        <div className="NominationList">
            <p>Nomination List</p>
            {props.dataList.map((movie,i) => {
                // TODO: you should be able to click on a movie
                // then be taken to another page with more information on that movie
                // use react router

                return(
                    <div>
                        <Movie title={movie.Title} year={movie.Year} posterUrl={movie.Poster} />
                    </div>
                )
            })}

            <p>{props.dataList ? "Nothing to show at the moment...": ""}</p>

        </div>
    )
}

export default NominaionList;