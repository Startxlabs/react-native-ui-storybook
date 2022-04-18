import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Tabs} from '../../../components/Tabs';

const tabContentStyle: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const tabsData = [
  {
    title: 'Tab 1',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 1 content</Text>
      </View>
    ),
  },
  {
    title: 'Tab 2',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 2 content</Text>
      </View>
    ),
  },
  {
    title: 'Tab 3',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 3 content</Text>
      </View>
    ),
  },
];

storiesOf('Tabs', module).add('Default', () => {
  return (
    <View style={{flex: 1}}>
      <Tabs tabsData={tabsData} />
    </View>
  );
});
