import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const recommendations = [
    { id: "1", title: "Machine Learning Project", type: "Project", description: "Recommended based on your interests" },
    { id: "2", title: "Frontend Development Internship", type: "Internship", description: "Recommended based on your skills" },
    { id: "3", title: "AI Workshop", type: "Workshop", description: "Trending in your field" },
];

const RecommendedFeedScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended for You</Text>

            <FlatList
                data={recommendations}
                keyExtractor={(item) => item.id}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={{ paddingBottom: 30 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <FontAwesome5 name="star" size={26} color="#FFD700" />

                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <View style={styles.infoRow}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{item.type}</Text>
                                </View>
                                <Text style={styles.cardDesc}>{item.description}</Text>
                            </View>
                        </View>
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
        marginBottom: 5,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    badge: {
        backgroundColor: "#193648",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 10,
        marginBottom: 4,
    },
    badgeText: {
        color: "#E2EEF9",
        fontSize: 12,
        fontWeight: "bold",
    },
    cardDesc: {
        fontSize: 13,
        color: "#555",
        flexShrink: 1,
    },
});

export default RecommendedFeedScreen;
