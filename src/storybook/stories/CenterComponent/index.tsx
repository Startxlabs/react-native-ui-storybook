import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: JSX.Element;
}

const CenterComponent = ({children}: Props) => {
  return <View style={styles.root}>{children}</View>;
};

export default CenterComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
