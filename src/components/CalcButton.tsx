import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: string;
    isCero?: boolean;
    onPress: (textNumber: string) => void;
}

export const CalcButton = ({text, color = '#2D2D2D', isCero = false, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={ () => onPress(text)}>
        <View style={{...styles.button, backgroundColor: color, width: isCero ? 180 : 80}}>
            <Text style={{...styles.textButton, color: color === '#9B9B9B' ? 'black' : 'white'}}>{text}</Text>
        </View>
    </TouchableOpacity>

  );
};
