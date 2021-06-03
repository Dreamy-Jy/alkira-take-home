import "./GridItem.css";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemExtraDetail, ItemProps } from "./DataView";

// make a subcomponent?

function GridItem({name, height, team, position}: ItemProps) {
    return(
        <div className="grid-item">
            <FontAwesomeIcon icon={faBasketballBall} className="grid-item-icon"/>
            <div className="grid-item-text-container">
                <div className="grid-item-big-text">
                    <p>{name}</p>
                    <ItemExtraDetail detail={height}/>
                </div>
                <div className="grid-item-little-text">
                    <p>{team}</p>
                    <ItemExtraDetail detail={position}/>
                </div>
            </div>
            
        </div>
    );
}

export default GridItem;