import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/colors';
import {CheckboxI} from './CheckboxInterface';
import {styles} from './CheckboxStyles';

export const Checkbox = ({
  variant = 'square',
  value,
  handleChange,
  checkboxStyle = {},
  hasGradient = false,
}: CheckboxI) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    if (handleChange) handleChange();
    else setIsChecked(prev => !prev);
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={toggleCheck}>
        {!hasGradient ? (
          <View
            style={[
              styles.checkbox,
              {
                borderWidth: 1,
                borderRadius: variant === 'circle' ? 50 : 4,
                borderColor: value || isChecked ? '#645AFF' : '#949494',
                backgroundColor: value || isChecked ? '#645AFF' : 'transparent',
              },
              checkboxStyle,
            ]}>
            {(value || isChecked) && (
              <Icon
                name={variant === 'circle' ? 'circle' : 'check'}
                size={14}
                color={COLORS.white}
                style={styles.checkIcon}
              />
            )}
          </View>
        ) : (
          <LinearGradient
            style={[
              {...StyleSheet.absoluteFillObject},
              styles.checkbox,
              {
                borderWidth: value || isChecked ? 0 : 1,
                borderRadius: variant === 'circle' ? 50 : 4,
                borderColor: '#949494',
                width: value || isChecked ? 20 : 19,
                height: value || isChecked ? 20 : 19,
                backgroundColor: value || isChecked ? '#645AFF' : 'transparent',
              },
            ]}
            colors={
              value || isChecked ? ['#645AFF', '#A573FF'] : ['transparent']
            }
            start={{x: 0.0, y: 1.0}}
            end={{x: 0.0, y: 0.0}}>
            {(value || isChecked) && (
              <Icon
                name={variant === 'circle' ? 'circle' : 'check'}
                size={14}
                color={COLORS.white}
                style={[styles.checkIcon, {top: 3, left: 3}]}
              />
            )}
          </LinearGradient>
        )}
      </TouchableOpacity>
    </View>
  );
};
