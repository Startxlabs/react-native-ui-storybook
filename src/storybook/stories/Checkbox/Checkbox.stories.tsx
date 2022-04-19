import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {Checkbox} from '../../../components/Checkbox';

storiesOf('Checkbox', module)
  .add('Check', () => {
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
  })
  .add('Radio', () => {
    return (
      <CenterComponent>
        <Checkbox
          variant={'circle'}
          value={false}
          // handleChange={() => {}}
          // checkboxStyle={{}}
          hasGradient={true}
        />
      </CenterComponent>
    );
  });
