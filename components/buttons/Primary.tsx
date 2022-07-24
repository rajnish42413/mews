import React from 'react'
import { TouchableOpacity as DefaultTouchableOpacity, StyleSheet, Text } from 'react-native'

interface IProps{
    text?: string;
    bgColor?:string;
    textColor?:string;
}

export type TouchableOpacityProps = IProps & DefaultTouchableOpacity['props'];


export default function PrimaryButton(props:TouchableOpacityProps)
{
  const primaryColor = props?.bgColor ? props.bgColor : '#ee0128';
  const whiteColor = props?.textColor ? props.textColor : '#fff';
  const { style, ...otherProps } = props;

  return (
    <DefaultTouchableOpacity style={[style, styles.fullBtn, {backgroundColor: primaryColor}]} {...otherProps}>
        <Text style={[styles.fullBtnText, {color: whiteColor}]}>{props?.text}</Text>
    </DefaultTouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fullBtn: {
      height: 60,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
      marginTop:15,
      borderRadius:4,
    },
    fullBtnText: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
    },
  });