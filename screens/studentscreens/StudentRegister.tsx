import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    Animated,
    Easing,
    StatusBar,
} from "react-native";

const StudentRegister = () => {
    const navigation = useNavigation<any>();

    // 🎓 Form States
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    // Animation Refs
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const logoAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.spring(logoAnim, {
                toValue: 1,
                friction: 6,
                tension: 50,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    // ✅ Validation + Navigation
    const handleRegister = () => {
        const emailPattern = /^[\w-\.]+@students\.riphah\.edu\.pk$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!fullName.trim()) return Alert.alert("Missing Field", "Please enter your full name");
        if (!emailPattern.test(email))
            return Alert.alert("Invalid Email", "Email must end with @students.riphah.edu.pk");
        if (!passwordPattern.test(password))
            return Alert.alert("Weak Password", "Password must contain letters and numbers (min 6 chars)");
        if (!phone.trim()) return Alert.alert("Missing Field", "Please enter your phone number");
        if (!department.trim()) return Alert.alert("Missing Field", "Please enter your department");
        if (!semester.trim()) return Alert.alert("Missing Field", "Please enter your current semester");
        if (!city.trim()) return Alert.alert("Missing Field", "Please enter your city");
        if (!address.trim()) return Alert.alert("Missing Field", "Please enter your address");

        navigation.navigate("EnterCode", { email });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar backgroundColor="#193648" barStyle="light-content" />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    bounces
                >
                    {/* 🎓 App Logo */}
                    <Animated.Image
                        source={require("../../assets/images/logo.jpeg")}
                        style={[
                            styles.logo,
                            {
                                transform: [
                                    {
                                        scale: logoAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.8, 1],
                                        }),
                                    },
                                ],
                            },
                        ]}
                        resizeMode="contain"
                    />

                    {/* ✨ Title */}
                    <Text style={styles.title}>Student Registration</Text>

                    {/* 📝 Input Fields */}
                    {[
                        { placeholder: "Full Name", value: fullName, set: setFullName },
                        {
                            placeholder: "University Email",
                            value: email,
                            set: setEmail,
                            keyboardType: "email-address",
                        },
                        {
                            placeholder: "Password",
                            value: password,
                            set: setPassword,
                            secureTextEntry: true,
                        },
                        {
                            placeholder: "Phone Number",
                            value: phone,
                            set: setPhone,
                            keyboardType: "phone-pad",
                        },
                        { placeholder: "Department / Program", value: department, set: setDepartment },
                        { placeholder: "Current Semester", value: semester, set: setSemester },
                        { placeholder: "City", value: city, set: setCity },
                        { placeholder: "Address", value: address, set: setAddress },
                    ].map((field, index) => (
                        <TextInput
                            key={index}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChangeText={field.set}
                            style={styles.input}
                            keyboardType={field.keyboardType as any}
                            secureTextEntry={field.secureTextEntry}
                            placeholderTextColor="#888"
                        />
                    ))}

                    {/* 🚀 Register Button */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    {/* 🔄 Login Link */}
                    <TouchableOpacity onPress={() => navigation.navigate("StudentLogin")}>
                        <Text style={styles.switchText}>
                            Already have an account?{" "}
                            <Text style={styles.linkText}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 25,
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#193648",
        marginBottom: 25,
        letterSpacing: 0.5,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 14,
        marginBottom: 15,
        backgroundColor: "#f8f9fb",
        fontSize: 15,
        color: "#000",
    },
    button: {
        backgroundColor: "#193648",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginTop: 5,
        marginBottom: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
        letterSpacing: 0.3,
    },
    switchText: {
        color: "#444",
        fontSize: 15,
    },
    linkText: {
        color: "#193648",
        fontWeight: "bold",
    },
});

export default StudentRegister;
