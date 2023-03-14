import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from '../utils/api'
import '../index.css';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    function handleEditProfileClick() {
            setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(null)
    }

  return (
    <div className="App">

      <div className="page">
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick = {handleCardClick}
        />
        <Footer />
        <PopupWithForm
            name={"edit"}
            title="Редактировать профиль"
            buttonText="Сохранить"
            form={'profileData'}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={(
                <>
                    <input  className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Введите имя" minlength="2" maxlength="40" required/>
                    <span className="popup__error name-error" id="name-error"/>
                    <input className="popup__input popup__input_type_description" id="description"  name="description" type="text" placeholder="О себе" minlength="2" maxlength="200" required/>
                    <span className="popup__error description-error" id="description-error"/>
                </>
            )}
            />

          <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              form={'placeData'}
              buttonText="Сохранить"
              title={'Новое место'}
              name={'add'}
              children={(
                  <>
                      <input
                          type="text"
                          id="place"
                          name="place"
                          className="popup__input popup__input_type_title"
                          placeholder="Название"
                          minLength="2"
                          maxLength="30"
                          required
                      />
                      <span className="popup__error place-error" id="place-error"></span>
                      <input
                          type="url"
                          name="link"
                          id="link"
                          className="popup__input popup__input_type_link"
                          placeholder="Ссылка на картинку"
                          required
                      />
                      <span className="popup__error link-error" id="link-error"></span>
                  </>
              )}
          />
          <PopupWithForm
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              form={'placeData'}
              title={'Обновить аватар'}
              name={'avatar'}
              buttonText="Сохранить"
              children={(
                  <>
                      <input id="avatar-input" type="url" className="popup__input"
                             name="avatar" required placeholder="Введите ссылку на аватар" minLength="2" maxLength="200"/>
                      <span className="popup__error link-error" id="link-error"></span>
                  </>
              )}
          />
          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
          />
      </div>
    </div>
  );
}

export default App;
