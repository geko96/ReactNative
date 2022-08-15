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
        width: 55,
        height: 55,
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#E0EFDE',
        borderWidth: 1,
        borderColor: '#49416D',
        marginVertical: 5,
        padding: 15,
        transform: [{ scale: 0.8 }]
        
    },

});