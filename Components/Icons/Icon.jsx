import {View, Text, Image, StyleSheet} from 'react-native';


export default function Icon({image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 45,
        height: 45,
        margin: 10,

        borderWidth: 1,
        marginVertical: 5,
        padding: 15,
        transform: [{ scale: 0.8 }]
        
    },

});