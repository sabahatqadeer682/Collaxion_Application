// RolesScreen.tsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RolesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Role</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('StudentRegister')}
            >
                <Text style={styles.buttonText}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Industry registration not implemented yet')}
            >
                <Text style={styles.buttonText}>Industry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 30 },
    button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, width: '80%', marginBottom: 15 },
    buttonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
});

export default RolesScreen;
