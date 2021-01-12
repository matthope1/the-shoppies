
import Nomination from './Nomination';

function NominaionList(props){
    // takes a list of objects and displays them

    return (
        <div className="NominationList">
            {props.dataList.map((nomination,i) => {
                // TODO:
                let title;
                let year;
                let posterUrl;

                return(
                    <div>
                        <Nomination title={title} year={year} imageUrl={posterUrl} />
                    </div>
                )
            })}

            <p>{props.dataList ? "Nothing to show at the moment...": ""}</p>

        </div>
    )
}

export default NominaionList;