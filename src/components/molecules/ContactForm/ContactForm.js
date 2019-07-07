import React from "react";
import "./styles.scss";

import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Textarea from "../../atoms/Textarea/Textarea";
import Button from "../../atoms/Button/Button";

const ContactForm = () => (

    <form className="m-contactForm">
        <Label htmlFor="topic" color="blue">Temat</Label>
        <Input type="text" name="topic" id="topic" placeholder="Temat" color="blue" />
        <Label htmlFor="name" color="blue">Imię</Label>
        <Input type="text" name="name" id="name" placeholder="Imię" color="blue" />
        <Label htmlFor="email" color="blue">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="Adres e-mail" color="blue" />
        <Label htmlFor="message" color="blue">Wiadomość</Label>
        <Textarea name="message" id="message" placeholder="Wiadomość" className="form__textarea" rows="8" color="blue" />
        <Button type="submit" color="blue">Wyślij</Button>
    </form>
)

export default ContactForm;