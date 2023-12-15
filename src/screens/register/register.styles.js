import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    containerImage: {
        alignItems: 'center',
        marginBottom: 5
    },
    image: {
        width: 100, height: 100
    },
    appName: {
        fontSize: 30, fontWeight: 'bold', color: '#c5c5c7'
    },
    containerRadioButton: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10
    },
    flex1: {
        flex: 1,

    },
    primaryButton: {
        borderRadius: 31,
        marginTop: 20
    },
    text: {
        fontSize: 18
    },
    containerScrollView: {
        flex: 1,
        paddingTop: 10
    }

})

export default styles