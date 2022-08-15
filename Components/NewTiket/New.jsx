import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';



export default function New() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Ticket</Text>
            <Text style={styles.input}>Title</Text>
            <Text style={styles.input}>Description</Text>
            <Text style={styles.input}>Category</Text>
            <Text style={styles.input}>Priority</Text>
            <Text style={styles.input}>Status</Text>
            <Text style={styles.input}>Assigned to</Text>
            <Text style={styles.input}>Due date</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B3F2DD',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 20,
    },
});