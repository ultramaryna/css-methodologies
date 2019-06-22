import React from "react"

const Newsletter = () => (

    <div className="newsletter">
      <h3 className="newsletter__title heading heading--main">Newsletter</h3>
      <form className="form form--brown newsletter__form">
        <label htmlFor="email" className="form__label">
          Adres e-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Adres e-mail"
          className="form__input newsletter__input"
        />
        <button type="submit" className="btn form__button newsletter__button">
          Wyślij
        </button>
      </form>
    </div>

)

export default Newsletter
