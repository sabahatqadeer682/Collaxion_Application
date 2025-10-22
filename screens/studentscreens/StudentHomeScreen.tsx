import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

// Module data with icons and professional look
const modules = [
    {
        id: "1",
        title: "Nearby Industries",
        description: "Explore industries around your city",
        screen: "NearbyIndustry",
        bgColor: "#E2EEF9",
        icon: <Entypo name="shop" size={32} color="#193648" />,
    },
    {
        id: "2",
        title: "Internships & Projects",
        description: "Find internships and projects offered by industries",
        screen: "InternshipsProjects",
        bgColor: "#E2EEF9",
        icon: <MaterialCommunityIcons name="briefcase-search" size={32} color="#193648" />,
    },
    {
        id: "3",
        title: "Recommended for You",
        description: "Personalized suggestions based on your profile",
        screen: "RecommendedFeed",
        bgColor: "#E2EEF9",
        icon: <FontAwesome5 name="star" size={32} color="#193648" />,
    },
];

const StudentHomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
            <Text style={styles.welcomeText}>Welcome to CollaXion!</Text>
            <Text style={styles.subText}>Discover opportunities & grow your career</Text>

            {modules.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[styles.card, { backgroundColor: item.bgColor }]}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <View style={styles.iconContainer}>{item.icon}</View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDesc}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f0f4f7", paddingHorizontal: 20, paddingTop: 20 },
    welcomeText: { fontSize: 26, fontWeight: "bold", color: "#193648", textAlign: "center" },
    subText: { fontSize: 14, color: "#555", textAlign: "center", marginBottom: 25 },

    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    cardContent: { flex: 1 },
    cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5, color: "#193648" },
    cardDesc: { fontSize: 14, color: "#555" },
});

export default StudentHomeScreen;
