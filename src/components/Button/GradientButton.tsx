import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientButtonI} from '../../interfaces/ButtonInterface';
import styles from './ButtonStyles';

export const GradientButton = ({
  text,
  colorsArray = [],
  handlePress,
}: GradientButtonI) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // console.log('gradient button pressed!');
          if (handlePress) {
            handlePress();
          }
        }}>
        <LinearGradient
          colors={colorsArray.length > 0 ? colorsArray : ['#A573FF', '#645AFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};
