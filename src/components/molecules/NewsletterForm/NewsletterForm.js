import React from "react";
import "./styles.scss";

import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";

const NewsletterForm = () => (
    <form className="m-newsletterForm">
        <Label htmlFor="email">Adres e-mail</Label>
        <Input
            type="text"
            id="email"
            name="email"
            placeholder="Adres e-mail"
            extraClass="m-newsletterForm_input"
            color="brown"
        />
        <Button type="submit" extraClass="m-newsletterForm_btn" color="brown">
            Wyślij
        </Button>
    </form>
)

export default NewsletterForm;
