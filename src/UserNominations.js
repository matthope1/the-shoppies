
import Movie from './Movie';

function UserNominations(props){
    return (
        <div className="UserNominations">
            <p>Nominations</p>
            {props.dataList.map((movie,i) => {
                return(
                    <div>
                        <Movie key={i} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} removeNomination={() => props.removeNomination(movie)} />
                    </div>
                )
            })}
            <p>{ props.dataList.length > 0 ? "": "Nothing to show at the moment..."}</p>
        </div>
    )
}

export default UserNominations;