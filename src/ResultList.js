function ResultList(props) {
    // displays the results of an api call
    // takes an array of objects through dataList prop

    let display = "nothing for now";
    if (props.dataList) {
        display = props.dataList;
    }

    return ( 
        <div className="ResultList">
            <p>{display}</p>
        </div>
    )
}

export default ResultList;