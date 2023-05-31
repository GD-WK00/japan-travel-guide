import icon from "../images/star-icon.png"

const Item = (props) => {
    return (
        <div className="item">
            <img src={require('../cityImages/' + props.info.image + '.jpg')} alt="locationPhoto.jpg" className="item-img"/>
            <div className="item-content">
                <div className="item-title">
                    <span className="item-text-bold">{props.info.cityName}</span>
                    <img src={icon} alt="staricon.png" className="item-star"/>         
                    <span className="item-rating">{props.info.rating}</span>
                </div>
                <p className="item-text">{props.info.description}</p>
                <p className="item-text-bold">Top 3 attractions:</p>
                <ul>
                    <li className="item-text">{props.info.attractionFirst.place} <span className="item-rating">({props.info.attractionFirst.votes})</span></li>
                    <li className="item-text">{props.info.attractionSecond.place} <span className="item-rating">({props.info.attractionSecond.votes})</span></li>
                    <li className="item-text">{props.info.attractionThird.place} <span className="item-rating">({props.info.attractionThird.votes})</span></li>
                </ul>
            </div>
        </div>
            
    );
}
 
export default Item;