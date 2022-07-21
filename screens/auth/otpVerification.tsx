import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export default function OtpVerification({ navigation }: any) {
    return (
        <View style={styles.containerFull}>
            {/* <View style={{}}> */}
            <Image style={styles.image} source={require("../../assets/images/otp.png")} />
            {/* </View> */}
            <Text style={styles.title}>Verify Your Number</Text>
            <Text style={styles.subTitle}>Enter the OTP sent to +91 9560708674</Text>
            {/* <TextInput label="Email" type="oulined" />
            <TextInput
                label="Phone number"
                render={props =>
                    <TextInputMask
                        {...props}
                        mask="+[00] [000] [000] [000]"
                    />
                }
            /> */}

            <TextInput
                label="OTP"
                style={styles.input}
                mode="outlined"
                keyboardType="numeric"


            />
            <Button mode="contained" uppercase={false} labelStyle={{ fontSize: 18, padding: 5 }} onPress={() => navigation.navigate("welcome")} style={styles.button}>
                Submit OTP
            </Button>


        </View>
    )
}

const styles = StyleSheet.create({
    containerFull: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 60

    },
    title: {
        fontSize: 18,
        color: "black",
        marginTop: 30,
    },
    subTitle: {
        fontSize: 16,
        color: "grey",
        marginTop: 10
    },
    input: {
        width: "80%",
        height: 50,
        marginTop: 20

    },
    button: {
        width: "80%",
        // height: 50,
        marginTop: 100

    }
})