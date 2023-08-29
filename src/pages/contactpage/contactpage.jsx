import React from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";
import Contact from "../../components/contact/contact";

import { ContactPageContainer } from "./contactpage.styles";


const ContactPage = () => {
  return (
    <ContactPageContainer>
      <h2>Contact Us</h2>
      <ColoredDiv
        id={'contact'}
        bg={({ theme }) => theme.palletPurple}
        fc={({ theme }) => theme.palletOrangeFont}
        text={
          <div >
            <h1>Let's Talk</h1>
            <Contact />
          </div>
        }
        rotation="rotate(5deg)"
      ></ColoredDiv>
    </ContactPageContainer>
  );
};

export default ContactPage;
