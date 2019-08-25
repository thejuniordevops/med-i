import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { screenWidth } from '../../utils/deviceSize';

const MARGIN_TOP = Platform.OS === 'android' ? 100 : 65;

export const TitleView = styled.View`
  background-color: #fff;
  height: 84px;
  width: ${screenWidth}px;
  margin-top: ${MARGIN_TOP}px;
  shadow-color: #d5d9e6;
  shadow-offset: 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  justify-content: center;
  elevation: 10;
`;

export const TitleText = styled.Text`
  color: #e77565;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
