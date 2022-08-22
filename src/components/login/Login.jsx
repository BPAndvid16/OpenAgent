import React from 'react'
import styled from "styled-components"
import "./Login.css"
import Input from './Input'
import Button from './Button'
import { FaApple, FaGoogle } from "react-icons/fa"
import Icon from './Icon'

const Login = () => {

  const GoogleBackground = "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);";
  const FaAppleBackground = "linear-gradient(225deg, #ffffff 0%, #000000 100%);";
  
  return (
    <body className='body-login'>
    <Maincontainer>

      <WelcomeText>Login</WelcomeText>

      <InputContainer>

        <Input id = "email" type="text" placeholder="Email"/>
        <Input id = "password" type="password" placeholder="Password"/>

      </InputContainer>

      <ButtonContainer>
        <Button content="Login"/>
      </ButtonContainer>

      <LoginOptions>Or Login With</LoginOptions>
      <HorizontalRule/>
      <IconsContainer>
        <Icon color = {GoogleBackground}>
          <FaGoogle/>
        </Icon>
        <Icon color = {FaAppleBackground}>
          <FaApple/>
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password?</ForgotPassword>
    </Maincontainer>
    </body>
  )
}

const Maincontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  height:80vh;
  width:30vw;
  background: rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  letter-spacing: 0.4rem;

  @media only screen and (max-width: 320px){
    width: 80vw;
    height: 90vh;
    hr{
      margin-bottom: 0.3rem;
    }
    h4{
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px){
    width: 80vw;
    height: 90vh;
    hr{
      margin-bottom: 0.3rem;
    }
    h4{
      font-size: small;
    }
  }

  @media only screen and (min-width: 411px){
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px){
    width: 80vw;
    height: 80vh;
  }

  @media only screen and (min-width: 1024px){
    width: 70vw;
    height: 50vh;
  }

  @media only screen and (min-width: 1280px){
    width: 30vw;
    height: 80vh;
  }
`;

const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginOptions = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #3d5581 0%, #4a689a 79% );
  backdrop-filter: blur(25px);

`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login