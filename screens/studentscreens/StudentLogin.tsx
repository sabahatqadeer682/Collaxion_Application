import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';

const StudentLogin = () => {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const emailPattern = /^[\w-\.]+@students\.riphah\.edu\.pk$/;

        if (!emailPattern.test(email)) {
            Alert.alert('Invalid Email', 'Email must end with @students.riphah.edu.pk');
            return;
        }

        if (password.trim().length < 6) {
            Alert.alert('Invalid Password', 'Password must be at least 6 characters long');
            return;
        }

        Alert.alert('Login Successful', `Welcome ${email}`);
        navigation.navigate('StudentDashboardNavigator'); // ✅ navigate after login
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                {/* 🌟 Status Bar */}
                <StatusBar backgroundColor="#193648" barStyle="light-content" />

                {/* 🏫 App Logo */}
                <Image
                    source={require('../../assets/images/logo.jpeg')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* ✨ Heading */}
                <Text style={styles.headerText}>Login to your CollaXion Account</Text>

                {/* 🔹 Inputs */}
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#888"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor="#888"
                />

                {/* 🔘 Login Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* 🔗 Register Link */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('StudentRegister')}
                >
                    <Text style={styles.switchText}>
                        Don’t have an account?{' '}
                        <Text style={styles.linkText}>Register</Text>
                    </Text>
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
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 15,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 18,
        color: '#193648',
        textAlign: 'center',
        marginBottom: 35,
        fontWeight: '500',
        letterSpacing: 0.3,
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 14,
        marginBottom: 18,
        color: '#000',
        backgroundColor: '#f9f9f9',
        fontSize: 15,
    },
    button: {
        backgroundColor: '#193648',
        paddingVertical: 14,
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    switchText: {
        color: '#333',
        fontSize: 15,
    },
    linkText: {
        color: '#193648',
        fontWeight: 'bold',
    },
});

export default StudentLogin;
