import "./LayoutSwitch.css";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "../App";

type LayoutSwitchProps = {
    layout: Layout,
    setLayout: Function,
};

function LayoutSwitch({layout, setLayout}: LayoutSwitchProps) {
    const leftButtonClassNames = "left-button " + (layout === Layout.Grid? "active":"inactive");
    const rightButtonClassNames = "right-button " + (layout === Layout.List? "active":"inactive");
    return(
        <div className="layout-switch">
            <button
                className={leftButtonClassNames}
                onClick={() => {
                    if(layout !== Layout.Grid) {
                        setLayout(Layout.Grid);
                    }
                }}
            ><FontAwesomeIcon icon={faTh}/></button>
            <button
                className={rightButtonClassNames}
                onClick={() => {
                    if(layout !== Layout.List) {
                        setLayout(Layout.List);
                    }
                }}
            ><FontAwesomeIcon icon={faThList}/></button>
        </div>
    );
}

export default LayoutSwitch;