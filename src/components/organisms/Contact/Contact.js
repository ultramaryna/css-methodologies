import React from "react";
import "./styles.scss";

import Section from "../../atoms/Section/Section";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Text from "../../atoms/Text/Text";
import ContactForm from "../../molecules/ContactForm/ContactForm";

const Contact = () => {

  return (
      <Section name="contact" extraClass="o-contact">
          <div className="o-contact">
            <div className="o-contact_info">
                <Subtitle color="blue">
                    Kontakt
                </Subtitle>
                <Text extraClass="o-contact_text">
                    Lorem ipsum
                </Text>
            </div>
            <ContactForm />
          </div>
      </Section>
  )
}

export default Contact;