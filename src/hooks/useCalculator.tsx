import {useRef, useState} from 'react';

enum Operations {
    add, multiply, divide, substract,
}

export default function useCalculator () {


    const [number, setNumber] = useState('0');
    const [previosNumber, setPreviosNumber] = useState('0');
    const lastOperation = useRef<Operations>();

    const clean = () => {
        setNumber('0');
        setPreviosNumber('0');
    };

    const createNumber = (textNumber: string) => {
        if (textNumber === '.' && number.includes('.')){
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')) {
            if ( textNumber === '.'){
                setNumber(number + textNumber);
            } else if ( textNumber === '0' && number.includes('.')){
                setNumber(number + textNumber);
            } else if (textNumber !== '0' && !number.includes('.')){
                setNumber(textNumber);
            } else if (textNumber === '0' && !number.includes('.')){
                setNumber(number);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    const deleteFunction = () => {
        if (number.length === 2 && number.startsWith('-')){
            setNumber('0');
        } else if (number.length > 1) {
            setNumber(number.slice(0, -1));
        } else {
            setNumber('0');
        }
    };

    const changeSymbol = () => {
        if (number.includes('-')){
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const makeOperation = (operation: string) => {
        if (number.endsWith('.')){
            setPreviosNumber(number.slice(0, -1));
        } else {
            setPreviosNumber(number);
            setNumber('0');
        }
        lastOperation.current = Operations[operation as keyof typeof Operations];
    };

    const showResult = () => {
        switch (lastOperation.current) {
            case Operations.add:
                setNumber(`${Number(number) + Number(previosNumber)}`);
            break;
            case Operations.divide:
                setNumber(`${Number(previosNumber) / Number(number)}`);
            break;
            case Operations.multiply:
                setNumber(`${Number(number) * Number(previosNumber)}`);
            break;
            case Operations.substract:
                setNumber(`${Number(previosNumber) - Number(number)}`);
            break;
            default:
            break;
        }
    }

    return {
        clean,
        number,
        previosNumber,
        createNumber,
        changeSymbol,
        deleteFunction,
        makeOperation,
        showResult,
    };
}

