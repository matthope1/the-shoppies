
function Nomination(props) {
    const {title, year, imgUrl} = props;
    // TODO: add alt tag to image
    return(
        <div className="Nomination">
            <h1>{title}</h1>
            <h2>{year}</h2>
            <img src={imgUrl} alt=""/>
        </div>
    )
}

export default Nomination;