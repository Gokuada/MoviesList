import React from "react";

const SearchBox = (props) => {
    return (
        <div class Name="col col-sm-4">
            <input 
            className="from-control"
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Recherchez"></input>
        </div>
    )
    
}
export default SearchBox;
