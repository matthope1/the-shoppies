function Search() {
    return (
        <div className="Search">
            <form action="">
                <div>
                    <label htmlFor="movie-title">Movie Title</label>
                    <input id="movie-title" type="text" placeholder="Search movies" />
                    <button className="movie-search-btn"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}
export default Search;