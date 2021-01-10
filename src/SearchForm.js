function Search(props) {
    return (
        <div className="Search">
            <form> 
                <div>
                    <label>{props.label}</label>
                    <input id={props.id} type="text" placeholder={props.placeholder}/>
                    <button><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}
export default Search;