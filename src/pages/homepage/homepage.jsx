import React, { Profiler } from "react";

import ColoredDiv from "../../components/coloreddiv/coloreddiv";
import Contact from "../../components/contact/contact";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer background="palletGreen">
      <h2>About us</h2>
      <Profiler
        id="home"
        onRender={(id, phase, actualDuration) => {
          // console.log({ id, phase, actualDuration });
        }}
      >
        <ColoredDiv
          bg={({ theme }) => theme.palletGreen}
          fc={({ theme }) => theme.palletPurpleFont}
          text={
             <div>
              <h3>Welcome to You and Me Web Creations </h3>
              <h3>My name is Diane Leigh, I am a freelance web developer/designer, located in Leavittsburg Ohio. After 30+ years in medical research I needed freedom and flexibility to enjoy my granddaugter. So, let me help you get your presence known to the world. For more background check out my</h3>
            </div>
            }
          go_to={
            <a
              href="https://leighd2008.github.io/My_Profile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3>Profile Page!</h3>
            </a>
          }
          rotation="rotate(-10deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletOrange}
          fc={({ theme }) => theme.palletBlueFont}
          text={
            <div>
              <h3>We can create everything from simple single page websites to multipage progressive web apps using cloud storage, complex forms for retrieving data from end-users and checkout pages for ecommerce. We can integrate your calendar and incorporate a schedualing component.</h3>
            </div>
            }
          go_to={
            <a href="Portfolio" rel="noopener noreferrer">
              <h3>View my work here!</h3>
            </a>
          }
          rotation="rotate(5deg)"
        ></ColoredDiv>
        <ColoredDiv
          bg={({ theme }) => theme.palletBlue}
          fc={({ theme }) => theme.palletGreenFont}
          text={
            <div>
              <h3>My favorite part of web design is figuring out how to put the pieces together in unique and refreshing ways. We can work from your vision, or mine to create the website of your dreams. So let's get you known to the world!</h3>
            </div>
          }
          rotation="rotate(-5deg)"
        ></ColoredDiv>
        <ColoredDiv
          id={'contact'}
          bg={({ theme }) => theme.palletPurple}
          fc={({ theme }) => theme.palletWhiteFont}
          text={
            <div >
              <h1>Let's Talk</h1>
              <Contact />
            </div>
          }
          rotation="rotate(5deg)"
        ></ColoredDiv>
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
