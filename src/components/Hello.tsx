import React from 'react';
import {Text, View} from 'react-native';

type Props = {};

const Hello = ({}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello Storybook!</Text>
    </View>
  );
};

export default Hello;
