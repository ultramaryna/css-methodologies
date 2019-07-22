import React from "react";
import { Container, Info, Text, Form } from './styles';
import Subtitle from '../../shared/Subtitle';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import FormBtn from '../../shared/FormBtn';
import Section from '../../shared/Section';

const Contact = () => {

  return (
      <Section color="blue">
          <Container>
                <Info>
                    <Subtitle color="blueLighter">
                        <span>
                            Kontakt
                        </span>
                    </Subtitle>
                    <Text>
                        Lorem ipsum
                    </Text>
                </Info> 
                <Form>
                    <Label htmlFor="topic">Temat</Label>
                    <Input type="text" name="topic" id="topic" placeholder="Temat" variant="contact" />
                    <Label htmlFor="name">Imię</Label>
                    <Input type="text" name="name" id="name" placeholder="Imię" variant="contact" />
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" name="email" id="email" placeholder="Adres e-mail" variant="contact" />
                    <Label htmlFor="message">Wiadomość</Label>
                    <Input as="textarea" name="message" id="message" placeholder="Wiadomość" className="form__textarea" rows="8" />
                    <FormBtn type="submit" variant="contact">Wyślij</FormBtn>
                </Form>    
        </Container>
      </Section>
  )
}

export default Contact;