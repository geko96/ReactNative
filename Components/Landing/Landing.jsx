import { StyleSheet, View, Text } from "react-native";

export default function Landing () {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cantilever</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7F7979',
        alignItems: 'center',
        padding: 25,
        paddingTop: 50,
        minHeight: '100%'

    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 50,

    }
});