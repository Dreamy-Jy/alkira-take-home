import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchBarProps = {
    searchQuery: string,
    onSearchQueryChange: Function,
    searchFunction: SearchFunction,
}

export type SearchFunction = (searchQuery: string) => void;

function SearchBar({searchQuery, onSearchQueryChange, searchFunction}: SearchBarProps) {
    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input 
                type="text"
                value={searchQuery}
                placeholder="Search for players"
                onChange={(e) => onSearchQueryChange(e)}
                onKeyPress={(event) => {
                    if(event.key === "Enter") {
                        searchFunction(searchQuery);
                    }
                }}
            />
        </div>
    );
}

export default SearchBar;