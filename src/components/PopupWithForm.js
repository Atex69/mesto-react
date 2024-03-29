import React from "react";
function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.onCloseClick} >
            <div className="popup__container">
            <button
            className="popup__close"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__submit">
                            {props.buttonText}
                    </button>
            </form>
            </div>
            </div>
            );
        }
export default PopupWithForm;