import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, GradientButton} from '../../../components/Button';
import CenterComponent from '../CenterComponent';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';

export const actions = {
  handlePress: action('button pressed'),
};

storiesOf('Button', module)
  .add('Primary', () => (
    <CenterComponent>
      <Button text={'Primary Button'} {...actions} />
    </CenterComponent>
  ))
  .add('Disabled', () => (
    <CenterComponent>
      <Button text={'Disabled Button'} disabled />
    </CenterComponent>
  ))
  .add('Custom', () => (
    <CenterComponent>
      <Button
        text={'Custom Button'}
        bgColor={'#fff'}
        borderColor={'crimson'}
        textColor={'#0D0113'}
        {...actions}
      />
    </CenterComponent>
  ))
  .add('Gradient', () => (
    <CenterComponent>
      <>
        <GradientButton text={'Gradient Button'} {...actions} />
        <View style={{marginBottom: 20}} />
        <GradientButton
          text={'Gradient Button'}
          colorsArray={['crimson', '#333']}
          {...actions}
        />
      </>
    </CenterComponent>
  ));
