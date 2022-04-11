import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {COLORS} from '../../constants/colors';
import {DefaultSwitchI} from '../../interfaces/SwitchInterface';

export const DefaultSwitch = ({
  disabled = false,
  value,
  handleToggle,
  ios_backgroundColor,
  activeThumbColor = '#fff',
  inactiveThumbColor = '#fff',
  trackColor,
}: DefaultSwitchI) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Switch
        disabled={disabled}
        trackColor={{
          false: trackColor?.false ? trackColor.false : COLORS.black_rgba(0.1),
          true: trackColor?.true ? trackColor.true : COLORS.purple_rgba(0.8),
        }}
        thumbColor={value ? activeThumbColor : inactiveThumbColor}
        ios_backgroundColor={ios_backgroundColor || ''}
        onValueChange={handleToggle ? handleToggle : toggle}
        value={value ? value : isEnabled}
        style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
      />
    </View>
  );
};
