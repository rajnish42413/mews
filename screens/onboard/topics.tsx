import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Chip, Title } from 'react-native-paper'
const data = ["art", "cryptocurrency", "sports", "Politics", "Science", "Immigration", "Films", "Economics",]

export default function Topics(props: any) {
    return (
        <View style={styles.containerFull}>
            <Title>What are you interested in?</Title>
            <Text style={styles.subTitle}>Add or edit the topics you follow.
            </Text>
            <Text style={styles.subTitle}>Choose five or more</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20, flex: 8, margin: 10 }}>

                {data.map((d, i) => {
                    return <Chip mode="outlined" style={{ margin: 4, backgroundColor: i % 3 == 0 ? "#ee0128" : "white", }} textStyle={{ color: i % 3 == 0 ? "white" : "black" }} selected={i % 3 == 0}>{d}</Chip>

                })}
            </View>
            <View style={{ flex: 2, width: "70%" }}>

                <Button style={{ padding: 5 }} mode="contained">Next</Button>
            </View>


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
        flex: 1
    },
    subTitle: {
        fontSize: 16,
        color: "grey",
        marginTop: 10,
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