/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { ItemViewBis, AddIcon } from './styledComponents';
import { CircleView } from '../../../common/styledComponents';
import { ItemTextView, ItemText } from '../../StatusScreen/styledComponents';
import { addItemToCart } from '../../../redux/cartActions';

import Medicine from '../../../../assets/Icons/medicine.svg';

const DrugView = ({ name }) =>
  name ? (
    <ItemViewBis>
      <CircleView>
        <Medicine />
      </CircleView>
      <ItemTextView>
        <ItemText>{name}</ItemText>
      </ItemTextView>
      <TouchableOpacity>
        <AddIcon />
      </TouchableOpacity>
    </ItemViewBis>
  ) : null;

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(DrugView));
