/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const HayfeverScreen = () => {
  const otherProps = {
    symptomDescription: 'Caused by an allergy to pollen or dust',
    symptomOne: 'Sneezing',
    symptomTwo: 'Coughing',
    symptomThree: 'Blocked nose',
    symptomFour: 'Itchy eyes',
    symptomFive: 'Tiredness',
    symptomSix: 'Runny nose',
    drugOne: 'Ceterizine',
    drugTwo: 'Chlorphenamine',
    drugThree: 'Diphenhydramine',
    drugFour: 'Loratidine',
  };
  return <SymptomScreen {...otherProps} />;
};

export default HayfeverScreen;
