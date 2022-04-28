import React from 'react';
import {Image, ScrollView, Text, View, ViewStyle} from 'react-native';
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
  {
    title: 'Tab 4',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 4 content</Text>
      </View>
    ),
  },
  {
    title: 'Tab 5',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 5 content</Text>
      </View>
    ),
  },
  {
    title: 'Tab 6',
    tabContent: (
      <View style={tabContentStyle}>
        <Text>Tab 6 content</Text>
      </View>
    ),
  },
];

// * example tab data
const exampleTabsData = [
  ...Array(4).fill({
    title: 'Tab Title',
    tabContent: (
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <Image
            source={{uri: 'https://picsum.photos/id/10/400/400'}}
            style={{width: '100%', height: 400}}
          />
          {[
            ...Array(4).fill(
              <View>
                <Text style={{marginBottom: 20, fontSize: 16}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit nihil expedita blanditiis nesciunt corrupti
                  consequuntur, exercitationem nam, quis officia fuga recusandae
                  in sed. Assumenda a impedit ex obcaecati, praesentium aliquam.
                </Text>
              </View>,
            ),
          ]}
        </View>
      </ScrollView>
    ),
  }),
];

storiesOf('Tabs', module)
  .add('Default', () => {
    return (
      <View style={{flex: 1}}>
        <Tabs tabsData={tabsData} />
      </View>
    );
  })
  .add('Example', () => {
    return (
      <View style={{flex: 1}}>
        <Tabs tabsData={exampleTabsData} />
      </View>
    );
  });
