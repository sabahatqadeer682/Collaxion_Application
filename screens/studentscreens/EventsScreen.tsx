// screens/studentscreens/EventsScreen.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const events = [
    { id: '1', title: 'Job Fair 2025', date: 'Oct 30, 2025' },
    { id: '2', title: 'Tech Talk: AI', date: 'Nov 5, 2025' },
    { id: '3', title: 'Workshop: React Native', date: 'Nov 12, 2025' },
];

const EventsScreen = () => {
    const renderCard = (item: any) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events</Text>
            <FlatList
                data={events}
                renderItem={({ item }) => renderCard(item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
    title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: { fontSize: 16, fontWeight: "600" },
    cardSubtitle: { fontSize: 14, color: "#555", marginTop: 5 },
});

export default EventsScreen;
