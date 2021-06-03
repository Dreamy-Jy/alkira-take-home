import "./ControlPanel.css";
import { useState } from "react";
import { Layout } from "../App";
import LayoutSwitch from "./LayoutSwitch";
import PageNavigator, { PageNavigationFunction } from "./PageNavigator";
import SearchBar, { SearchFunction } from "./SearchBar";

type ControlPanelProps = {
    layout: Layout,
    setLayout: Function,
    currentPage: number,
    lastPage: number,
    searchFunction: SearchFunction,
    pageNavigationFunction: PageNavigationFunction,
};

function ControlPanel({searchFunction, layout, setLayout, currentPage, lastPage, pageNavigationFunction}: ControlPanelProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [previousSearchQuery, setPreviousSearchQuery] = useState<string>("");

    return(
        <header className="control-panel">
            <div className="control-components-container">
                <SearchBar
                    searchQuery={searchQuery}
                    onSearchQueryChange={(event: any) => setSearchQuery(event.target.value)}
                    searchFunction={(searchQuery: string) => {
                        searchFunction(searchQuery);
                        setPreviousSearchQuery(searchQuery);
                    }}/>
                <LayoutSwitch
                    layout={layout}
                    setLayout={setLayout}/>
                <PageNavigator
                    currentPage={currentPage}
                    lastPage={lastPage}
                    pageNavigationFunction={pageNavigationFunction}/>
            </div>
            <p className="state-text">
                {previousSearchQuery !== ""? 
                    'Showing results for "'+previousSearchQuery+'" search query' :
                    'Showing all players. To return to this state clear the search bar and press enter.'}
            </p>
        </header>
    );
}

export default ControlPanel;