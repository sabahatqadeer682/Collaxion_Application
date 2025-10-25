import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
} from "react-native";
import axios from "axios";


const API_BASE_URL = "http://192.168.0.205:5000/api/student";

const StudentLogin = () => {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const emailPattern = /^[\w-\.]+@students\.riphah\.edu\.pk$/;

        if (!emailPattern.test(email)) {
            Alert.alert("Invalid Email", "Email must end with @students.riphah.edu.pk");
            return;
        }

        if (password.trim().length < 6) {
            Alert.alert("Invalid Password", "Password must be at least 6 characters long");
            return;
        }

        try {
            const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
            console.log("Server Response:", res.data);

            if (res.data.success) {
                // Navigate to Dashboard
                navigation.navigate("StudentDashboardNavigator");
            } else {
                // Show backend error message
                Alert.alert("Login Failed", res.data.message);
            }
        } catch (err: any) {
            console.log("Axios Error:", err.response?.data || err.message);
            Alert.alert(
                "Error",
                "Server not responding. Make sure backend is running and device/emulator is on the same network."
            );
        }
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <StatusBar backgroundColor="#193648" barStyle="light-content" />

                <Image
                    source={require("../../assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.headerText}>Welcome Back to CollaXion</Text>
                <Text style={styles.tagline}>Where learning meets opportunity.</Text>

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

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("StudentRegister")}>
                    <Text style={styles.switchText}>
                        Don’t have an account?{" "}
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
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    logo: { width: 150, height: 150, marginBottom: 15, borderRadius: 10 },
    headerText: {
        fontSize: 20,
        color: "#193648",
        textAlign: "center",
        marginBottom: 6,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    tagline: { fontSize: 15, color: "#64748b", marginBottom: 30, textAlign: "center" },
    input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 14,
        marginBottom: 18,
        color: "#000",
        backgroundColor: "#f9f9f9",
        fontSize: 15,
    },
    button: {
        backgroundColor: "#193648",
        paddingVertical: 14,
        width: "90%",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        elevation: 2,
    },
    buttonText: { color: "#fff", fontSize: 17, fontWeight: "600", letterSpacing: 0.5 },
    switchText: { color: "#333", fontSize: 15 },
    linkText: { color: "#193648", fontWeight: "bold" },
});

export default StudentLogin;
