function ResultList(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    let display = props.dataList ? "Nothing for now": props.dataList;
    return ( 
        <div className="ResultList">
            <p>{display}</p>
        </div>
    )
}

export default ResultList;