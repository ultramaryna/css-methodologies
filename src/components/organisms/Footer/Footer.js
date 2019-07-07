import React from "react";
import "./styles.scss";
import Text from "../../atoms/Text/Text";

const Footer = () => (
  <footer className="o-footer">
      <Text extraClass="o-footer_text">
      Autorem niniejszego serwisu jest Julia Kwiecień.<br/>
      Serwis ten stanowi integralną część pracy magisterskiej (kierunek: Elektroniczne Przetwarzanie Informacji), przygotowanej pod kierunkiem prof. dr. hab. Mariusza Flasińskiego na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
      </Text>
    <p className="o-footer_version">
      Wersja Atomic Design
    </p>
  </footer>
)

export default Footer;
