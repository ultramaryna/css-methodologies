import React from "react";
import "./styles.scss";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";
import NewsletterForm from "../../molecules/NewsletterForm/NewsletterForm";

const Newsletter = () => (

    <Section name="newsletter" extraClass="o-newsletter">
        <Title extraClass="o-newsletter_title">Newsletter</Title>
        <NewsletterForm />
    </Section>
)

export default Newsletter;