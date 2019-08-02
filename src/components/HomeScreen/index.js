import React from 'react';
import { SafeAreaView, AsyncStorage, StatusBar } from 'react-native';

import {
  TopView,
  BottomView,
  TopLeftView,
  AvatarView,
  CameraIcon,
  GreetingText,
  TopRightView,
  LogOutIcon,
  HealthBarView,
  StatusViewWrapper,
  StatusView,
  IconView,
  ShadowView,
  FaceHeight,
  FaceWidth,
  RegularText,
  InterrogationText,
  HealthyColors,
  HealthySickColors,
  SickColors,
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import HappyFace from '../../common/Icons/Happy.svg';
import PokerFace from '../../common/Icons/Poker.svg';
import SadFace from '../../common/Icons/Sad.svg';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/HomeScreen.png');

const logout = async props => {
  await AsyncStorage.clear();
  handleRoute(props, 'AuthLoading');
};

const HomeScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TopView>
        <TopLeftView>
          <AvatarView>
            <CameraIcon />
          </AvatarView>
          <GreetingText>Good morning {'\n'}Laarni</GreetingText>
        </TopLeftView>
        <TopRightView>
          <LogOutIcon onPress={() => logout(props)} />
        </TopRightView>
      </TopView>
      <BottomView>
        <RegularText>Your latest report</RegularText>
        <HealthBarView />
        <InterrogationText>How are you feeling today ?</InterrogationText>
        <StatusViewWrapper>
          <StatusView>
            <ShadowView>
              <IconView colors={HealthyColors}>
                <HappyFace width={FaceWidth} height={FaceHeight} />
              </IconView>
            </ShadowView>
            <RegularText>Healthy</RegularText>
          </StatusView>
          <StatusView>
            <ShadowView>
              <IconView colors={HealthySickColors}>
                <PokerFace width={FaceWidth} height={FaceHeight} />
              </IconView>
            </ShadowView>
            <RegularText>Healthy/Sick</RegularText>
          </StatusView>
          <StatusView>
            <ShadowView>
              <IconView colors={SickColors}>
                <SadFace width={FaceWidth} height={FaceHeight} />
              </IconView>
            </ShadowView>
            <RegularText>Sick</RegularText>
          </StatusView>
        </StatusViewWrapper>
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
