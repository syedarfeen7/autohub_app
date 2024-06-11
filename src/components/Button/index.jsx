import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = ({title, onPress, btnStyle, btnTextStyle}) => {
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
