import React from 'react';
import { View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
return (
    <View style={styles.container}>
      {/*  <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
        </Appbar.Header>
        */}
        <View style={styles.teksti}>
            <Text>HomeScreen</Text>
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

