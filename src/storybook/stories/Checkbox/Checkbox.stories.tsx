import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {Checkbox} from '../../../components/Checkbox';

storiesOf('Checkbox', module)
  .add('without gradient', () => {
    return (
      <CenterComponent>
        <Checkbox
          value={false}
          // handleChange={() => {}}
          // checkboxStyle={{}}
          hasGradient={false}
        />
      </CenterComponent>
    );
  })
  .add('with gradient', () => {
    return (
      <CenterComponent>
        <Checkbox
          value={false}
          // handleChange={() => {}}
          // checkboxStyle={{}}
          hasGradient={true}
        />
      </CenterComponent>
    );
  });
