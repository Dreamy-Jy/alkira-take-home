import "./ListItem.css";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemExtraDetail, ItemProps } from "./DataView";

function ListItem({name, height, team, position}: ItemProps) {
    return(
        <div className="list-item">
            <FontAwesomeIcon icon={faBasketballBall} className="list-item-icon"/>
            <div className="list-item-text-container">
                <div className="list-item-big-text">
                    <p>{name}</p>
                    <ItemExtraDetail detail={height} />
                </div>
                <div className="list-item-little-text">
                    <p>{team}</p>
                    <ItemExtraDetail detail={height} />
                </div>
            </div>
            
        </div>
    );
}

export default ListItem;