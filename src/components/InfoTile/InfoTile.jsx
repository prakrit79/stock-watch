import './InfoTile.css'

export const InfoTile = (props) => {
    const {headline,image,source,url,summary} = props.info
    return(
        <div className={'tile-container'}>
            <h4>{headline}</h4>
            <div className={'image-container'}>
                <img src={image} alt={headline}/>
            </div>
            <h5>{`Source: ${source}`}</h5>
            <p>{summary}</p>
            <a href={url}>
                Read More
            </a>
        </div>
    )

}