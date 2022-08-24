import {View, Text, StyleSheet} from "react-native";

export default function ConfigSection () {


    return (
        <View style={styles.container}>
            <Text>ConfigSection</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
    }

});