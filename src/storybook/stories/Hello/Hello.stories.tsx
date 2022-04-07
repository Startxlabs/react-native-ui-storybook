import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Hello from '../../../components/Hello';

storiesOf('Welcome', module).add('to storybook', () => <Hello />);
