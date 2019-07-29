import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  SignInView,
  Title,
  SubTitle,
  ItemView,
  UserInput,
  PasswordInput,
  ForgetPasswordText,
  ConfirmButton,
  LogInButtonText,
  HyperLinkText,
  RegularText,
} from './styleComponent';

const background = require('../../assets/AuthScreen.png');

const SignInScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <AuthContainer>
      <Title>Login</Title>
      <SubTitle>Username</SubTitle>
      <ItemView rounded>
        <UserInput />
      </ItemView>
      <SubTitle>Password</SubTitle>
      <ItemView rounded>
        <PasswordInput />
      </ItemView>
      <ForgetPasswordText>Forget password?</ForgetPasswordText>
      <ConfirmButton rounded>
        <LogInButtonText>Log in</LogInButtonText>
      </ConfirmButton>
    </AuthContainer>
    <SignInView>
      <RegularText>Don't have a med-i account ? </RegularText>
      <TouchableOpacity>
        <HyperLinkText> Sign Up</HyperLinkText>
      </TouchableOpacity>
    </SignInView>
  </ImageContainer>
);
export default SignInScreen;
