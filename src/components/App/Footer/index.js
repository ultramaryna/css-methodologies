import React from "react";
import { StyledFooter, Text, Version, Content } from './styles';

const Footer = () => (
    <StyledFooter>
        <Content>
            <Text>
                Autorem niniejszego serwisu jest Julia Kwiecień.<br/>
                Serwis ten stanowi integralną część pracy magisterskiej (kierunek: Elektroniczne Przetwarzanie Informacji), przygotowanej pod kierunkiem prof. dr. hab. Mariusza Flasińskiego na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
            </Text>
            <Version>
                Wersja CSS in JS<br/>
                Styled Components
            </Version>
        </Content>
    </StyledFooter>
)

export default Footer;
