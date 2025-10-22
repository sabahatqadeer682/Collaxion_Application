import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const internships = [
    {
        id: "1",
        title: "React Native Developer",
        company: "Tech Solutions Pvt Ltd",
        type: "Internship",
        duration: "3 Months",
        stipend: "Paid",
        location: "Lahore",
        icon: "mobile-alt",
    },
    {
        id: "2",
        title: "AI Research Assistant",
        company: "SmartTech Labs",
        type: "Project",
        duration: "6 Months",
        stipend: "Unpaid",
        location: "Islamabad",
        icon: "robot",
    },
    {
        id: "3",
        title: "Web Development Intern",
        company: "Innovatech Industries",
        type: "Internship",
        duration: "4 Months",
        stipend: "Paid",
        location: "Karachi",
        icon: "laptop-code",
    },
];

const InternshipsProjectsScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Opportunities For You</Text>

            <FlatList
                data={internships}
                keyExtractor={(item) => item.id}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={{ paddingBottom: 30 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <FontAwesome5 name={item.icon} size={28} color="#193648" />

                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardCompany}>{item.company}</Text>

                            <View style={styles.infoRow}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{item.type}</Text>
                                </View>
                                <Text style={styles.infoText}>{item.duration} • {item.stipend} • {item.location}</Text>
                            </View>
                        </View>

                        <MaterialIcons name="chevron-right" size={24} color="#193648" />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E2EEF9",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#193648",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginBottom: 18,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 5,
    },
    cardContent: {
        flex: 1,
        marginLeft: 15,
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#193648",
        marginBottom: 3,
    },
    cardCompany: {
        fontSize: 14,
        color: "#555",
        marginBottom: 6,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    badge: {
        backgroundColor: "#193648",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 10,
    },
    badgeText: {
        color: "#E2EEF9",
        fontSize: 12,
        fontWeight: "bold",
    },
    infoText: {
        fontSize: 13,
        color: "#555",
    },
});

export default InternshipsProjectsScreen;
