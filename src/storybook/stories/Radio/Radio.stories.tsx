import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {Radio} from '../../../components/Radio';

storiesOf('Radio', module)
  .add('without gradient', () => {
    return (
      <CenterComponent>
        <Radio
          value={false}
          // handleChange={() => {}}
          // radioStyle={{}}
          hasGradient={false}
        />
      </CenterComponent>
    );
  })
  .add('with gradient', () => {
    return (
      <CenterComponent>
        <Radio
          value={false}
          // handleChange={() => {}}
          // radioStyle={{}}
          hasGradient={true}
        />
      </CenterComponent>
    );
  });
