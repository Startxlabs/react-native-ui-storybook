import React from 'react';
import {TextStyle, Text} from 'react-native';
import {COLORS} from '../../constants/colors';

type InlineMessageProps = {
  message: string;
  style?: TextStyle;
};

const InlineMessage = ({message, style}: InlineMessageProps) => {
  return (
    <Text
      style={{
        fontSize: 10,
        color: COLORS.black_rgba(1),
        marginTop: 9,
        textAlign: 'right',
        ...style,
      }}>
      {message}
    </Text>
  );
};

export default InlineMessage;
