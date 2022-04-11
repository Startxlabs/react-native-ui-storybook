import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {DefaultSwitch} from '../../../components/Switch';
import {COLORS} from '../../../constants/colors';
// import {action} from '@storybook/addon-actions';

// don't pass placeholder if using label
storiesOf('Switch', module).add('Default', () => {
  return (
    <CenterComponent>
      <DefaultSwitch
        value={true}
        handleToggle={() => {}}
        disabled={false}
        ios_backgroundColor={'#ddd'}
        activeThumbColor={'#fff'}
        inactiveThumbColor={'#fff'}
        trackColor={{false: '#fff', true: COLORS.purple_rgba(0.8)}}
      />
    </CenterComponent>
  );
});
