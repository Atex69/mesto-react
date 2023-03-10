import React from "react";
function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
            <button
            className="popup__close"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate="">
                    {props.children}
                    <button type="submit" className="popup__submit" onSubmit={onsubmit}>
                            {props.buttonText}
                    </button>
            </form>
            </div>
            </div>
            );
        }
export default PopupWithForm;