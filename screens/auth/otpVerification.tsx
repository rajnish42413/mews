import { Text, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/buttons/Primary';
import DefaultStyles from '../../Style';
import { H2 } from '../../components/Themed';
import AppContainer from '../../components/layouts/AppContainer';
import LinkButton from '../../components/buttons/link';

export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export default function OtpVerification({ navigation }: any) {

    const submitOtp = () => {
        navigation.navigate("welcome");
    }

    return (
        <AppContainer>
            <View style={[DefaultStyles.containerFull, {alignItems:'center'}, DefaultStyles.px1]}>
                <Image source={require("../../assets/images/otp.png")} style={{width:200, height:200, marginVertical:50}} />
                <H2 style={DefaultStyles.title2}>Verify Your Number</H2>
                <Text style={DefaultStyles.title3}>Enter the OTP sent to +91 9560708674</Text>
                <TextInput
                    style={DefaultStyles.input}
                    onChangeText={() => { }}
                    placeholder="Enter 4 digit OTP"
                    keyboardType="number-pad"
                    maxLength={4}
                />
                <Text style={[DefaultStyles.title3, DefaultStyles.mt2]}>Resend OTP in 25 Sec</Text>
                <LinkButton text={"Resend OTP"} textColor={"#ec0229"} />
                <PrimaryButton text={"Submit OTP"} onPress={submitOtp} />
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({

})