import React from "react";
import Text from "../../atoms/Text/Text";

const Footer = () => (
  <footer className="o-footer">
      <div className="o-footer_content">
        <Text extraClass="o-footer_text">
        Autorem niniejszego porównania jest Julia Kwiecień.<br/>
        Aplikacja stanowi integralną część pracy magisterskiej (kierunek: Elektroniczne Przetwarzanie Informacji), przygotowanej pod kierunkiem prof. dr. hab. Mariusza Flasińskiego na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
        </Text>
        <p className="o-footer_version">
          Wersja Atomic Design
        </p>
        <div className="o-footer_links">
          <a className="o-footer_link" href="http://leszczyna.wzks.uj.edu.pl/~14_kwiecien/metodologie/bem">BEM</a>
          <a className="o-footer_link" href="http://leszczyna.wzks.uj.edu.pl/~14_kwiecien/metodologie/css-in-js">CSS-in-JS</a>
        </div>
      </div>
  </footer>
)

export default Footer;
