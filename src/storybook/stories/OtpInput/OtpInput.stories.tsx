import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {AllOtp} from '../../../components/OtpInput';

storiesOf('OtpInput', module)
  .add('Default', () => {
    return (
      <CenterComponent>
        <AllOtp
          inputStatusType="default"
          onSubmit={otp => {
            // console.log('otp--', otp);
          }}
        />
      </CenterComponent>
    );
  })
  .add('with four fields', () => {
    return (
      <CenterComponent>
        <AllOtp
          inputStatusType="default"
          numberOfInputs={4}
          onSubmit={otp => {
            // console.log('otp--', otp);
          }}
        />
      </CenterComponent>
    );
  });
