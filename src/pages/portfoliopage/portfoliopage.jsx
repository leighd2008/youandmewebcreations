import React from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";

import {
  PortfolioPageContainer
} from "./portfoliopage.styles";

const PortfolioPage = () => {
  const images = require.context("../../components/assets", true);

  return (
    <PortfolioPageContainer>
      <h2>Portfolio</h2>
      <ColoredDiv
        bg={({ theme }) => theme.palletGreen}
        fc={({ theme }) => theme.palletPurpleFont}
        website={
          <a
            href="http://www.fire-fastpitch.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="fire fastpitch"
              src={images('./FireFastpitch.png')} />
          </a>

        }
        text={
          <div>
            <h3>Fire Fastpitch Softball</h3>
            <h3>This Website was built with React / Redux. Firebase is used for team data storage and administration authorized sign-in. Both the Training page and the Recruiting component include video displays. Each Team Page includes a link to the Team calendar. </h3>
            <h3>Click image to vist the website.</h3>
          </div>
        }
        go_to=''
        rotation="rotate(-10deg)"
      ></ColoredDiv>
      <ColoredDiv
        bg={({ theme }) => theme.palletOrange}
        fc={({ theme }) => theme.palletBlueFont}
        website={
          <a
            href="https://crown-ecommerce.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="crown clothing ecommerce"
              src={images('./CrownClothing.png')} />
          </a>

        }
        text={
          <div>
            <h3>Crown Clothing Ecommerce</h3>
            <h3>This Website was built with React / Redux. Firebase is used for user sign-in, storage of available items as well as storage of user cart items. Stripe is used as means of checkout. </h3>
            <h3>Click image to vist the website.</h3>
          </div>
        }
        go_to=''
        rotation="rotate(5deg)"
      ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletBlue}
          fc={({ theme }) => theme.palletGreenFont}
          website={
            <a
              href="https://leighd2008.github.io/My_Profile/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="My profile page"
                src={images('./my_profile.png')} />
            </a>

          }
          text={
            <div>
              <h3>Profile for Diane Leigh (Me)</h3>
              <h3>This Website was built with HTML and CSS. The resume page includes a carousel for clicking through the various pages. The contact for for email is set up through gform.</h3>
              <h3>Click image to vist the website.</h3>
            </div>
          }
          go_to=''
          rotation="rotate(-10deg)"
        ></ColoredDiv>
      <ColoredDiv
        bg={({ theme }) => theme.palletPurple}
        fc={({ theme }) => theme.palletWhiteFont}
        website={
          <a
            href="https://youandmewebcreations.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="You and Me Web Creations"
              src={images('./youandmewebcreations.png')} />
          </a>

        }
        text={
          <div>
            <h3>You and Me Web Creations</h3>
            <h3>This Website was built with React / Redux. Firebase is used for administration authorized sign-in and sending as well as storage of email messages.</h3>
          </div>
        }
        rotation="rotate(7deg)"
      ></ColoredDiv>
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
