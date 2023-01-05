import React from 'react';
import {View, Text} from 'react-native';
import { CalcButton } from '../components/CalcButton';
import useCalculator from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const {clean, number, previosNumber, createNumber, changeSymbol, deleteFunction, makeOperation, showResult} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
        {previosNumber !== '0' && <Text style={styles.smallResult}>{previosNumber}</Text>}
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>

        <View style={styles.row}>
            <CalcButton text="C" color="#9B9B9B" onPress={clean}/>
            <CalcButton text="+/-" color="#9B9B9B" onPress={changeSymbol}/>
            <CalcButton text="del" color="#9B9B9B" onPress={deleteFunction}/>
            <CalcButton text="/" color="#FF9427" onPress={() => makeOperation('divide')}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="7" onPress={() => createNumber('7')}/>
            <CalcButton text="8" onPress={() => createNumber('8')}/>
            <CalcButton text="9" onPress={() => createNumber('9')}/>
            <CalcButton text="X" color="#FF9427" onPress={() => makeOperation('multiply')}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="4" onPress={() => createNumber('4')}/>
            <CalcButton text="5" onPress={() => createNumber('5')}/>
            <CalcButton text="6" onPress={() => createNumber('6')}/>
            <CalcButton text="-" color="#FF9427" onPress={() => makeOperation('substract')}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="1" onPress={() => createNumber('1')}/>
            <CalcButton text="2" onPress={() => createNumber('2')}/>
            <CalcButton text="3" onPress={() => createNumber('3')}/>
            <CalcButton text="+" color="#FF9427" onPress={() => makeOperation('add')}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="0" isCero onPress={() => createNumber('0')}/>
            <CalcButton text="." onPress={() => createNumber('.')}/>
            <CalcButton text="=" color="#FF9427" onPress={showResult}/>
        </View>
    </View>
  );
};
