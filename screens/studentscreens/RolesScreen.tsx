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

const RolesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* 🔹 Status Bar */}
            <StatusBar backgroundColor="#193648" barStyle="light-content" />

            {/* 🔹 Logo Section */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.jpeg')} // apna sahi logo path yahan dalein
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* 🔹 Title */}
            <Text style={styles.title}>Select Your Role</Text>

            {/* 🔹 Student Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("StudentRegister")}
                activeOpacity={0.8}
            >
                <MaterialIcons
                    name="school"
                    size={22}
                    color="#fff"
                    style={styles.icon}
                />
                <Text style={styles.buttonText}>Student</Text>
            </TouchableOpacity>

            {/* 🔹 Industry Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert("Industry registration not implemented yet")}
                activeOpacity={0.8}
            >
                <FontAwesome5
                    name="building"
                    size={20}
                    color="#fff"
                    style={styles.icon}
                />
                <Text style={styles.buttonText}>Industry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#193648",
        marginBottom: 30,
        letterSpacing: 0.3,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#193648",
        paddingVertical: 14,
        width: "85%",
        borderRadius: 10,
        marginBottom: 18,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
    },
});

export default RolesScreen;
