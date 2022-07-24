import { Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { H1, View, H2 } from '../../components/Themed';
import AppContainer from '../../components/layouts/AppContainer';
import React from 'react';
import PrimaryButton from '../../components/buttons/Primary';
import DefaultStyles from '../../Style';
import LinkButton from '../../components/buttons/link';

export default function LoginWithEmailScreen() {
  return (
    <AppContainer >
      <View style={DefaultStyles.containerFull}>
        <ImageBackground
          source={require('../../assets/images/login-bg/1.png')}
          resizeMode="cover"
          style={styles.image}>
          <H1 style={DefaultStyles.title}>
            Welcome You've {'\n'}
            been missed.
          </H1>
          <LinkButton text={"Skip"} style={{position: 'absolute', right: 15, top: 55}} />
        </ImageBackground>
        <View style={DefaultStyles.container}>
          <H2 style={DefaultStyles.title2}>Login with phone number</H2>
          <Text style={DefaultStyles.title3}>Please add your login details below</Text>

          <Text style={[DefaultStyles.title3, DefaultStyles.mt1]}>Email</Text>
          <TextInput
            style={DefaultStyles.input}
            onChangeText={() => { }}
            placeholder="Enter Your Email"
            keyboardType="email-address"
          />

          <Text style={[DefaultStyles.title3, DefaultStyles.mt1]}>Password</Text>
          <TextInput
            style={DefaultStyles.input}
            onChangeText={() => { }}
            placeholder="Your Password"
            keyboardType="visible-password"
          />

          <PrimaryButton onPress={() => { }} text={"Login"} />

          <Text style={[DefaultStyles.m2, DefaultStyles.title3, { textAlign: 'center' }]}>Or continue with</Text>
          <View style={[{
            flexDirection: "row",
            justifyContent:'space-between',
          }, DefaultStyles.m2]}>
            <View style={[DefaultStyles.flexCenter, DefaultStyles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/google.png")} />
            </View>
            <View style={[DefaultStyles.flexCenter, DefaultStyles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/facebook.png")} />
            </View>
            <View style={[DefaultStyles.flexCenter, DefaultStyles.border1, {width:110}]}>
              <Image source={require("../../assets/images/login-bg/email.png")} />
            </View>
          </View>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
  }
});