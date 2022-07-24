import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

interface IProps{
  children:any;
  bgColor?:string;
}
export default function AppContainer(props:IProps) {
  const bgColor = props.bgColor ? props.bgColor : "#fff";
  return (
      <SafeAreaView style={[styles.container, {backgroundColor : bgColor}]}>
        <StatusBar />
        {props.children}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ddd'
  }
});
