
import Movie from './Movie';

function UserNominations(props){
    // takes a list of objects and displays them
    return (
        <div className="UserNominations">
            <p>Nominations</p>
            {props.dataList.map((movie,i) => {
                // TODO: you should be able to click on a movie
                // then be taken to another page with more information on that movie
                // use react router

                return(
                    <div>
                        <Movie key={i} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} removeNomination={() => props.removeNomination(movie)} />
                    </div>
                )
            })}

            <p>{props.dataList ? "Nothing to show at the moment...": ""}</p>

        </div>
    )
}

export default UserNominations;