import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Chip, Title } from 'react-native-paper';
import AppContainer from '../../components/layouts/AppContainer';
import DefaultStyles from '../../Style';
import { H2 } from '../../components/Themed';
import PrimaryButton from '../../components/buttons/Primary';
const data = ["art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics", "art", "cryptocurrency", "sports", "politics", "science", "immigration", "films", "economics"]

export default function Topics({ navigation }: any) {
    const [selectedChips, setSelectedChips] = useState([] as Array<string>);

    const handleOnSelect = (i:string) => {
        const sel = [ ...selectedChips, ...[i]];
        // setSelectedChips( Array.from(new Set(sel)));
        setSelectedChips(sel);
    }

    const submitTopics = () => {
        navigation.navigate("Bottom");
    }

    return (
        <AppContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[DefaultStyles.containerFull, { alignItems: "center" }, DefaultStyles.p1]}>
                    <H2 style={DefaultStyles.title2}>What are you interested in?</H2>
                    <Text style={[DefaultStyles.title3, { marginBottom: 0 }]}>Add or edit the topics you follow.</Text>
                    <Text style={[DefaultStyles.title3, { marginVertical: 10 }]}>Choose five or more?</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
                        {data.map((d, i) => {
                            return <Chip
                                mode="flat"
                                textStyle={(selectedChips.indexOf(d) > -1) ? styles.selectedChipText : styles.chipText}
                                style={(selectedChips.indexOf(d) > -1) ? styles.selectedChip : styles.chip}
                                onPress={() => handleOnSelect(d)}
                                selected={(selectedChips.indexOf(d) > -1)}
                                selectedColor={"#fff"}
                            >
                                {d}
                            </Chip>

                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.strickyBtn}>
                {(selectedChips.length >= 5) ? <PrimaryButton text={"Next"}  />
                :<PrimaryButton text={"Next"} textColor={"#808080"} bgColor={"#efefef"} 
                  onPress={() => submitTopics()} />}
            </View>
        </AppContainer>
    )
}



const styles = StyleSheet.create({
    chip: {
        margin: 4,
        borderRadius: 5,
        borderColor: '#e6e6e6',
        borderWidth: 1,
    },
    selectedChip: {
        margin: 4,
        borderRadius: 5,
        borderColor: '#e6e6e6',
        backgroundColor: '#ec0229',
        borderWidth: 1,
    },
    chipText: {
        textTransform: "capitalize",
        color: '#000000'
    },
    selectedChipText: {
        textTransform: "capitalize",
        color: '#fff'
    },
    strickyBtn:{
        width:'100%',
        backgroundColor:'transparent',
        paddingHorizontal:15
    }
})