import React from "react"

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__info">
        <h2 className="heading heading--blue">
          <span className="heading__content">Kontakt</span>
        </h2>
        <p className="contact__text">
          Lorem ipsum
        </p>
      </div>
      <form className="contact__form form form--blue">
        <label htmlFor="topic" className="form__label">Temat</label>
        <input type="text" name="topic" id="topic" placeholder="Temat" className="form__input" />
        <label htmlFor="name" className="form__label">Imię</label>
        <input type="text" name="name" id="name" placeholder="Imię" className="form__input" />
        <label htmlFor="email" className="form__label">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Adres e-mail" className="form__input" />
        <label htmlFor="message" className="form__label">Wiadomość</label>
        <textarea name="message" id="message" placeholder="Wiadomość" className="form__textarea" rows="8" />
        <button type="submit" className="btn form__button">Wyślij</button>
      </form>
    </div>
  )
}

export default Contact
