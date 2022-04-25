import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/colors';
import {RadioI} from './RadioInterface';
import {styles} from './RadioStyles';

export const Radio = ({
  value,
  handleChange,
  radioStyle = {},
  hasGradient = false,
}: RadioI) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleRadio = () => {
    if (handleChange) handleChange();
    else setIsSelected(prev => !prev);
  };

  // * default radio style
  const defaultRadioStyle = {
    borderWidth: value || isSelected ? 0 : 1,
    borderColor: '#949494',
    width: value || isSelected ? 20 : 19,
    height: value || isSelected ? 20 : 19,
    backgroundColor: value || isSelected ? '#645AFF' : 'transparent',
  };

  // * default radio style (with gradient)
  const defaultRadioGradientStyle = {
    borderWidth: value || isSelected ? 0 : 1,
    borderColor: '#949494',
    width: value || isSelected ? 20 : 19,
    height: value || isSelected ? 20 : 19,
    backgroundColor: value || isSelected ? '#645AFF' : 'transparent',
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={toggleRadio}>
        {!hasGradient ? (
          <View style={[styles.radio, defaultRadioStyle, radioStyle]}>
            {(value || isSelected) && (
              <Icon
                name={'circle'}
                size={14}
                color={COLORS.white}
                style={styles.radioIcon}
              />
            )}
          </View>
        ) : (
          <LinearGradient
            style={[
              {...StyleSheet.absoluteFillObject},
              styles.radio,
              defaultRadioGradientStyle,
              radioStyle,
            ]}
            colors={
              value || isSelected ? ['#645AFF', '#A573FF'] : ['transparent']
            }
            start={{x: 0.0, y: 1.0}}
            end={{x: 0.0, y: 0.0}}>
            {(value || isSelected) && (
              <Icon
                name={'circle'}
                size={14}
                color={COLORS.white}
                style={[styles.radioIcon, {top: 3, left: 3}]}
              />
            )}
          </LinearGradient>
        )}
      </TouchableOpacity>
    </View>
  );
};
