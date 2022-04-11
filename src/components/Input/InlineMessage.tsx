import React from 'react';
import {TextStyle, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/colors';
import {inputStatusType} from '../../interfaces/InputInterface';

type InlineMessageProps = {
  message: string;
  style?: TextStyle;
  inputStatus?: inputStatusType;
  hasMessageIcon?: boolean;
  isMessageRight?: boolean;
};

const InlineMessage = ({
  message,
  style,
  inputStatus,
  hasMessageIcon,
  isMessageRight,
}: InlineMessageProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
        marginHorizontal: 5,
        justifyContent: isMessageRight ? 'flex-end' : 'flex-start',
      }}>
      <View style={{marginRight: 5}}>
        {hasMessageIcon && (
          <Icon
            name={
              inputStatus === 'success'
                ? 'check-circle-outline'
                : 'alert-circle-outline'
            }
            size={18}
            color={inputStatus === 'success' ? COLORS.success : COLORS.danger}
          />
        )}
      </View>
      <Text
        style={{
          fontSize: 10,
          color: COLORS.black_rgba(1),
          ...style,
        }}>
        {message}
      </Text>
    </View>
  );
};

export default InlineMessage;
