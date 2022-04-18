import React from 'react';
import {View} from 'react-native';
import {TabI} from '../../interfaces/TabsInterface';
import {styles} from './TabStyles';

const TabContent = ({tabContent}: TabI) => {
  return <View style={styles.tabContentWrapper}>{tabContent}</View>;
};

export default TabContent;
