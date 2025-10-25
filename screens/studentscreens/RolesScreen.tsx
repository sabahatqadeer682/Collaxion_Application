import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const RolesScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={["#ffffff", "#E2EEF9", "#D9F0FF"]}
            style={styles.container}
        >
            <StatusBar backgroundColor="#193648" barStyle="light-content" />

            {/* 🔹 Logo Section */}
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* 🔹 Headings */}
            <Text style={styles.title}>Begin Your Journey</Text>
            <Text style={styles.subtitle}>
                Select how you want to get started on CollaXion.
            </Text>

            {/* 🔹 Buttons */}
            <View style={styles.buttonsContainer}>
                {/* Student */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("StudentRegister")}
                    activeOpacity={0.85}
                >
                    <MaterialIcons name="school" size={22} color="#fff" style={styles.icon} />
                    <Text style={styles.buttonText}>Continue as Student</Text>
                </TouchableOpacity>

                {/* Industry */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert("Industry registration coming soon")}
                    activeOpacity={0.85}
                >
                    <FontAwesome5 name="building" size={20} color="#fff" style={styles.icon} />
                    <Text style={styles.buttonText}>Continue as Industry</Text>
                </TouchableOpacity>
            </View>

            {/* 🔹 Footer tagline */}
            <Text style={styles.footerText}>Building Connections. Empowering Futures.</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#193648",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        color: "#475569",
        textAlign: "center",
        marginBottom: 35,
        paddingHorizontal: 25,
        lineHeight: 22,
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        width: "85%",
        borderRadius: 14,
        backgroundColor: "#193648",
        marginBottom: 20,
        shadowColor: "#193648",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    icon: {
        marginRight: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    footerText: {
        position: "absolute",
        bottom: 40,
        fontSize: 13,
        color: "#64748b",
        textAlign: "center",
    },
});

export default RolesScreen;
