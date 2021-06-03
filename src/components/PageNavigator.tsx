import "./PageNavigator.css";
import PageNavigatorButton, { PageNavigatorButtonModes } from "./PageNavigatorButton";

type PageNavigatorProps = {
    currentPage: number,
    lastPage: number,
    pageNavigationFunction: PageNavigationFunction,
};

export type PageNavigationFunction = (page: number) => void;

function PageNavigator({currentPage, lastPage, pageNavigationFunction}: PageNavigatorProps) {
    const leftButtonsSet: JSX.Element[] = [
        <PageNavigatorButton 
            mode={PageNavigatorButtonModes.start}
            extraClassNames={"push-right "+ (!(currentPage > 2)? "page-navigator-button-invisible":"")}
            pageNavigationFunction={() => pageNavigationFunction(1)}/>,
        <PageNavigatorButton
            mode={PageNavigatorButtonModes.previous}
            extraClassNames={!(currentPage > 1)? "page-navigator-button-invisible":""}
            pageNavigationFunction={() => pageNavigationFunction(currentPage - 1)}/>
    ];
    const rightButtonsSet: JSX.Element[] = [
        <PageNavigatorButton 
            mode={PageNavigatorButtonModes.next}
            extraClassNames={"push-right " + (!(currentPage < lastPage)? "page-navigator-button-invisible" : "")}
            pageNavigationFunction={() => pageNavigationFunction(currentPage + 1)}/>,
        <PageNavigatorButton
            mode={PageNavigatorButtonModes.end}
            extraClassNames={(!(currentPage < lastPage -1)? "page-navigator-button-invisible" : "")}
            pageNavigationFunction={() => pageNavigationFunction(lastPage)}/>
    ];

    return(
        <div className="page-navigator">
            {leftButtonsSet}
            <p>{currentPage+" of "+lastPage}</p>
            {rightButtonsSet}
        </div>
    );
}

export default PageNavigator;