import React from 'react'
import { TouchableOpacity as DefaultTouchableOpacity, StyleSheet, Text } from 'react-native'

interface IProps {
    text?: string;
    textColor?: string;
}

export type TouchableOpacityProps = IProps & DefaultTouchableOpacity['props'];


export default function LinkButton(props: TouchableOpacityProps) {
    const whiteColor = props?.textColor ? props.textColor : '#fff';
    const { style, ...otherProps } = props;

    return (
        <DefaultTouchableOpacity style={[style, styles.linkBtn]} {...otherProps}>
            <Text style={[styles.btnText, { color: whiteColor }]}>{props?.text}</Text>
        </DefaultTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkBtn: {
        padding: 5,
        backgroundColor: 'transparent'
    },
    btnText: {
        fontSize: 16,
        textDecorationLine: 'underline'
    }
});