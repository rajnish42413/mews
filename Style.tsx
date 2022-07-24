import { StyleSheet } from 'react-native';

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
    title: {
        fontWeight: "700",
        fontSize: 32,
        marginHorizontal: 15
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
    mt1: {
        marginTop: 15
    },
    mt2: {
        marginTop: 20
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
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    border1: {
        borderWidth: 1,
        borderColor: '#eeeeee',
        padding: 15,
        borderRadius: 4
    },
    px1: {
        paddingHorizontal: 15,
    },
    p1:{
        padding:15
    }
});

export default styles;