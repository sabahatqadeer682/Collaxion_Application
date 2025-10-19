import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const StudentRegister = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateAndProceed = () => {
        const emailPattern = /^[\w-\.]+@students\.riphah\.edu\.pk$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!emailPattern.test(email)) {
            Alert.alert('Invalid Email', 'Email must end with @students.riphah.edu.pk');
            return;
        }

        if (!passwordPattern.test(password)) {
            Alert.alert('Invalid Password', 'Password must contain letters and numbers, min 6 characters');
            return;
        }

        navigation.navigate('EnterCode', { email });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

                {/* Logo */}
                <Image
                    source={require("../../assets/images/logo.jpeg")}
                    style={styles.logo}
                    resizeMode="contain"
                />



                <Text style={styles.title}>Student Registration</Text>

                {/* Email Input */}
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#888"
                />

                {/* Password Input */}
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor="#888"
                />

                {/* Rectangular Button */}
                <TouchableOpacity style={styles.button} onPress={validateAndProceed} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#193648',
        marginBottom: 30,
    },
    input: {
        width: '85%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#f9f9f9', // soft light gray box look
    },
    button: {
        backgroundColor: '#193648',
        paddingVertical: 14,
        width: '85%',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default StudentRegister;
