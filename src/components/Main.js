import React from "react";
import ava from "./images/zhak.png";

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <img
                        alt="аватарка"
                        className="profile__avatar"
                        src={ava}
                    />
                    <button type="button" className="profile__avatar-edit"></button>
                    <div className="profile__info">
                        <div className="profile__info-name">
                            <h1 className="profile__info-title">Жак-Ив Кусто</h1>
                            <button
                                type="button"
                                className="profile__info-edit-button"
                            ></button>
                        </div>
                        <p className="profile__info-subtitle">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button"></button>
            </section>
            <section className="elements">
                <ul className="elements__container"></ul>
            </section>
        </main>
    );
}

export default Main;