import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__text">
        Autorem niniejszego serwisu jest Julia Kwiecień.<br/>
        Serwis ten stanowi integralną część pracy magisterskiej (kierunek: Elektroniczne Przetwarzanie Informacji), przygotowanej pod kierunkiem prof. dr. hab. Mariusza Flasińskiego na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
      </p>
      <p className="footer__version">
        Wersja BEM
      </p>
      <div className="footer__links">
        <a className="footer__link" href="http://leszczyna.wzks.uj.edu.pl/~14_kwiecien/metodologie/atomic-design">Atomic Design</a>
        <a className="footer__link" href="http://leszczyna.wzks.uj.edu.pl/~14_kwiecien/metodologie/css-in-js">CSS-in-JS</a>
      </div>
    </div>
  </footer>
)

export default Footer;
