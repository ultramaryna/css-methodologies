import React from "react";
import { Form, NewsletterInput, Btn, Title } from './styles';
import Label from '../../shared/Label';
import Section from '../../shared/Section';

const Newsletter = () => (

    <Section type="newsletter" color="yellow">
        <Title className="title">Newsletter</Title>
        <Form>
            <Label htmlFor="email">Adres e-mail</Label>
            <NewsletterInput
                type="text"
                id="email"
                name="email"
                placeholder="Adres e-mail"
                variant="newsletter"
            />
            <Btn type="submit" variant="newsletter">
                Wyślij
            </Btn>
        </Form>
    </Section>

)

export default Newsletter;