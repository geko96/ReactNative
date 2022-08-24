import {View, Text, StyleSheet} from "react-native";

export default function UserSection () {


    return (
        <View style={styles.container}>
            <Text>UserSection</Text>
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