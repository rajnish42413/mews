import { Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { H1, View, H2 } from '../../components/Themed';
import AppContainer from '../../components/layouts/AppContainer';
import React from 'react';

export default function LoginWithEmailScreen() {
  return (
    <AppContainer >
      <View style={styles.containerFull}>
        <ImageBackground
          source={require('../../assets/images/login-bg/1.png')}
          resizeMode="cover"
          style={styles.image}>
          <H1 style={styles.title}>
            Welcome You've {'\n'}
            been missed.
          </H1>
          <TouchableOpacity onPress={() => { }} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Skip</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.container}>
          <H2 style={styles.title2}>Login with phone number</H2>
          <Text style={styles.title3}>Please add your login details below</Text>

          <Text style={[styles.title3, styles.mt1]}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => { }}
            placeholder="Enter Your Email"
            keyboardType="email-address"
          />

          <Text style={[styles.title3, styles.mt1]}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => { }}
            placeholder="Your Password"
            keyboardType="visible-password"
          />

          <TouchableOpacity onPress={() => { }} style={[styles.fullBtn, styles.mt1]}>
            <Text style={[styles.fullBtnText]}>Login</Text>
          </TouchableOpacity>

          <Text style={[styles.m2, styles.title3, { textAlign: 'center' }]}>Or continue with</Text>
          <View style={[{
            flexDirection: "row",
            justifyContent:'space-between',
          }, styles.m2]}>
            <View style={[styles.flexCenter, styles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/google.png")} />
            </View>
            <View style={[styles.flexCenter, styles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/facebook.png")} />
            </View>
            <View style={[styles.flexCenter, styles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/email.png")} />
            </View>
          </View>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 15
  },
  image: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "700",
    fontSize: 32,
    marginHorizontal: 15
  },
  appButtonContainer: {
    padding: 5,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 15,
    top: 55
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    textDecorationLine: 'underline'
  },
  input: {
    height: 60,
    borderWidth: 2,
    padding: 10,
    borderColor: '#eeeeee',
    borderRadius: 4,
    fontSize: 18,
    width: '100%'
  },
  fullBtn: {
    height: 60,
    width: '100%',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  fullBtnText: {
    color: '#808080',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  mt1: {
    marginTop: 15
  },
  title2: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5
  },
  title3: {
    color: '#808080',
    fontSize: 18,
    marginBottom: 15
  },
  m2: {
    marginVertical: 20
  },
  flexCenter:{
    alignItems:'center', 
    justifyContent:'center',
  },
  border1:{
    borderWidth:1,
    borderColor:'#eeeeee',
    padding:15,
    borderRadius:4
  }
});