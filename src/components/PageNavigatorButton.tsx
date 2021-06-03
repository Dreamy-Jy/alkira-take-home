import "./PageNavigatorButton.css";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PageNavigatorButtonProps = {
    mode: PageNavigatorButtonModes,
    pageNavigationFunction: () => void,
    extraClassNames?: string
};

export enum PageNavigatorButtonModes {
    start,
    previous,
    next,
    end,
}

function PageNavigatorButton({mode, pageNavigationFunction, extraClassNames}: PageNavigatorButtonProps) {
    let icon;

    switch (mode) {
        case PageNavigatorButtonModes.start:
            icon = faAngleDoubleLeft;
            break;
        case PageNavigatorButtonModes.previous:
            icon = faAngleLeft;
            break;
        case PageNavigatorButtonModes.next:
            icon = faAngleRight;
            break;
        case PageNavigatorButtonModes.end:
            icon = faAngleDoubleRight;
            break;
    }

    return(
        <button className={"page-navigator-button "+ extraClassNames} onClick={pageNavigationFunction}><FontAwesomeIcon icon={icon}/></button>
    );
}

export default PageNavigatorButton;