import React from "react";
import "./styles.scss";

import ListItem from "../../atoms/ListItem/ListItem";

const ShowsList = ({ data, onShowSelect }) => {
    const { allRepertoireJson: { edges: shows } } = data;

    return (
        <ul className="m-showsList">
            {shows.map((item) => {
                const { node: show } = item;
                return (
                <ListItem
                    className="m-showsList_item"
                    onClick={onShowSelect}
                    key={show.name}
                    show={show}
                >
                    {show.name}
                </ListItem>
                );
            })}
        </ul>
    )
}

export default ShowsList;