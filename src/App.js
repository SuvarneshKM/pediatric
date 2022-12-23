import "./font.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Body = styled.body`
  background: url("./images/bg.jpeg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    padding-top: 20px;
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width: 850px) {
    width: 50px;
    height: 50px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 850px) {
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 850px) {
    display: none;
  }
`;
const Div = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
`;
const P = styled.p`
  margin-left: 40px;
  font-size: x-large;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  color: white;
  &:hover {
    transition: 0.2s all ease-in-out;
    color: #036301;
    cursor: pointer;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 200px;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
const HeroImage = styled.img`
  border-radius: 50%;
  @media (max-width: 850px) {
    width: 50%;
    height: 50%;
  }
`;

const HeroH1 = styled.h1`
  font-size: xx-large;
  text-align: center;
  color: white;
`;
const HeroP = styled.p`
  font-size: x-large;
  font-weight: 700;
  color: white;
  font-family: "Roboto", sans-serif;
  padding-top: 20px;
  text-align: center;
  
`;
const HeroCash = styled.h2`
  font-size: 120px;
  color: #036301;
  text-align: center;
`;

const HeroButton = styled.button`
  font-family: "Roboto", sans-serif;
  display: flex;
  color: white;
  background-color: #51a533;
  border-radius: 24px;
  padding: 10px;
  border: none;
  width: 300px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
const HeroButtonCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
  }
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 790px) {
    width: 60%;
  }
  background-color: rgb(58, 66, 81, 0.9);
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.p`
  text-decoration: none;
  font-size: clamp(3rem, 4vw, 6vw);
  font-family: "Roboto", sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.2s all ease-in-out;
  padding-bottom: 16px;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  &:hover {
    transition: 0.2s all ease-in-out;
    color: #036301;
  }
`;

const CloseToggle = styled.button`
  position: fixed;
  top: 5%;
  right: 4%;
  background: none;
  color: white;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;
const StyledToggle = styled.button`
  display: none;
  @media (max-width: 850px) {
    display: flex;
  }
  color: white;
  background: none;
  border: none;
  padding: 0.75rem;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

function App() {
  const [cash, setCash] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Check();
  }, []);

  const Check = async () => {
    await fetch(
      "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
    )
      .then((response) => response.json())
      .then((data) => setCash(data[0]));
  };

  return (
    <Body>
      <Nav>
        <Image src="./images/pic.jpeg" />
        <Menu>
          <P>home</P>
          <P>about</P>
          <P>tokenomics</P>
          <P>donations</P>
          <P>socials</P>
        </Menu>
        <StyledToggle
          onClick={() => setIsOpen(true)}
          className="animate__animated animate__fadeInRight"
        >
          <FaBars />
        </StyledToggle>
        {isOpen ? (
          <StyledMenu>
            <StyledLink className="animate__animated animate__fadeInRight">
              Home
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight">
              about
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight">
              tokenomics
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight">
              donations
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight">
              socials
            </StyledLink>
            <CloseToggle
              onClick={() => setIsOpen(false)}
              className="animate__animated animate__fadeInRight"
            >
              <FaTimes />
            </CloseToggle>
          </StyledMenu>
        ) : (
          <></>
        )}
        <Div></Div>
      </Nav>
      <Hero>
        <HeroText>
          <HeroH1>
            The Pediatric Cancer Research
            <br /> Foundation
          </HeroH1>
          <HeroP>Amount Donated So Far</HeroP>
          <HeroCash>${cash}</HeroCash>
          <HeroButtonCont>
            <HeroButton>check our donations wallet</HeroButton>
          </HeroButtonCont>
        </HeroText>
        <HeroImage src="./images/pic.jpeg"></HeroImage>
      </Hero>
    </Body>
  );
}

export default App;
