function Search(props) {
    return (
        <div className="Search">
            <form onSubmit={props.handleSubmit}> 
                <div>
                    <label>{props.label}</label>
                    <input id={props.id} type="text" placeholder={props.placeholder} onChange={props.handleChange}/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}
export default Search;