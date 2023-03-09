import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../index.css';

function App() {
  return (
    <div className="App">

      <div className="page__container">
        <Header />
        <main className="content">
          <section className="profile">
            <div className="profile__card">
              <img
                  alt="аватарка"
                  className="profile__avatar"
                  src="<%=require('./images/zhak.png')%>"
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
        <Footer />
        <div className="popup popup_type_user">
          <div className="popup__container">
            <button
                className="popup__close popup__close_type_user"
                type="button"
                title="Закрыть окно"
                aria-label="Закрыть"
            ></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_type_user" name="edit-profile">
              <label htmlFor="name" className="popup__label">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="popup__input popup__input_type_name"
                    placeholder="Введите имя"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="popup__error name-error" id="name-error"></span>
              </label>
              <label htmlFor="description" className="popup__label">
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="popup__input popup__input_type_description"
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                    required
                />
                <span
                    className="popup__error description-error"
                    id="description-error"
                ></span>
              </label>

              <button className="popup__submit popup__submit_type_user">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_place">
          <div className="popup__container">
            <button
                className="popup__close popup__close_type_place"
                type="button"
                title="Закрыть окно"
                aria-label="Закрыть"
            ></button>
            <h2 className="popup__title popup__title_type_place">Новое место</h2>
            <form className="popup__form popup__form_type_place" name="add-place">
              <label htmlFor="place" className="popup__label">
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
              </label>
              <label htmlFor="link" className="popup__label">
                <input
                    type="url"
                    name="link"
                    id="link"
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__error link-error" id="link-error"></span>
              </label>
              <button className="popup__submit popup__submit_type_place">
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_image">
          <figure className="popup__figure">
            <button
                type="button"
                className="popup__close popup__close_type_image"
            ></button>
            <img className="popup__image" src="#" alt=""/>
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть форму"></button>
            <h3 className="popup__title popup__title_type_avatar">Обновить аватар</h3>
            <form className="popup__form" name="user-avatar" noValidate>
              <label htmlFor="avatar-input" className="popup__label popup__label_type_avatar">
                <input id="avatar-input" type="url" className="popup__input"
                       name="avatar" required placeholder="Введите ссылку на аватар" minLength="2" maxLength="200"/>
                  <span className="avatar-input-error popup__input-error"></span>
              </label>
              <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть форму"></button>
            <h3 className="popup__title popup__title_type_delete">Вы уверены?</h3>
            <form className="popup__form" name="delete-card" noValidate>
              <button type="submit" className="popup__submit" aria-label="Сохранить">Да</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
