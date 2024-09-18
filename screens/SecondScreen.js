import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function SecondScreen({ navigation }) {
    return (
        <View style={styles.container}>
        {/*
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Second Screen" />
        </Appbar.Header>
        */}
            <View style={styles.teksti}>
                <Text>Second screen</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    teksti: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1
    }
});
