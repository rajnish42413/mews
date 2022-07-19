import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

interface IProps{
  children:any;
}
export default function AppContainer(props:IProps) {
  return (
      <SafeAreaView style={styles.container}>
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
