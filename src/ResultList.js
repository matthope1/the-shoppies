function ResultList(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    return ( 
        <div className="ResultList">
            {props.dataList.map((movie,i) => {
                let title = movie.Title;
                return(
                    <div> 
                        {title}
                    </div>
                )
            })}
        </div>
    )
}

export default ResultList;