import React from 'react';

export function ItemComponent({item, direction = "add", onClick}) {

    return (
        <li className="item">
            <h2>{item.name}</h2>
            <p>
                {item.dietaries.map(function (dietary) {
                    return <span className="dietary">{dietary}</span>
                })}
            </p>
            <button className="add_remove-item"
                    onClick={(e) => onClick()}>{direction === "add" ? "✓" : "x"}</button>
        </li>
    )
}