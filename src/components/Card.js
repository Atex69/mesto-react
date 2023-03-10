import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }

    return(
    <li className="element">
        <button type="button" className="element__delete-card"></button>
        <img className="element__image"  src={props.link} alt={props.name} onClick={handleClick} />
        <div className="element__description">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__like-container">
                <button type="button" className="element__like"></button>
                <div className="element__like-count">{props.likes}</div>
            </div>
        </div>
    </li>
    )
}

export default Card;