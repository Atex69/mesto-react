import React, {useEffect} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

    const [userInfo, setUserInfo] = React.useState({})
    const [cards, setCards] = React.useState([])

useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()]).then(([profileInfo, card]) => {
        setUserInfo(profileInfo)
        setCards(card)
    }).catch((err) => {
        console.error(err);
    })
}, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <img
                        alt={userInfo.name}
                        className="profile__avatar"
                        src={userInfo.avatar}
                    />
                    <button type="button" className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__info-name">
                            <h1 className="profile__info-title">{userInfo.name}</h1>
                            <button
                                type="button"
                                className="profile__info-edit-button"
                                onClick={props.onEditProfile}
                            ></button>
                        </div>
                        <p className="profile__info-subtitle">{userInfo.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((card, id) => (
                        <Card
                            key={card.id}
                            card={card}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;