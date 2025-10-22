import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const industries = [
    {
        id: "1",
        name: "Tech Solutions Pvt Ltd",
        city: "Lahore",
        category: "Software",
        logo: "https://t3.ftcdn.net/jpg/01/01/89/80/360_F_101898044_FdCtNYaEZXoZtXd4nbhnBpt1RFw67gTC.jpg",
    },
    {
        id: "2",
        name: "Innovatech Industries",
        city: "Karachi",
        category: "Electronics",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNGTFfiJTZfAwJ4fDtaGUsRngR7Y21LsBLg&s",
    },
    {
        id: "3",
        name: "SmartTech Labs",
        city: "Islamabad",
        category: "IT Services",
        logo: "data:image/png;base64,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",
    },
    {
        id: "4",
        name: "FutureTech Innovations",
        city: "Lahore",
        category: "Robotics",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3nP8kV94TY3hvruMku5y1IrkwRFOomyj0Q&s",
    },
    {
        id: "5",
        name: "NextGen Labs",
        city: "Karachi",
        category: "AI & ML",
        logo: "data:image/png;base64,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",
    },
];

const NearbyIndustryScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [refreshing, setRefreshing] = React.useState(false);

    const filteredIndustries = industries.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Industries Around You</Text>
            <Text style={styles.subtitle}>Find companies offering internships & projects</Text>

            <View style={styles.searchContainer}>
                <Entypo name="magnifying-glass" size={20} color="#193648" style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search industries..."
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <FlatList
                data={filteredIndustries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardInfo}>{item.category} • {item.city}</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="#193648" />
                    </TouchableOpacity>
                )}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={{ paddingBottom: 30 }}
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
        fontSize: 22,
        fontWeight: "bold",
        color: "#193648",
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        height: 50,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#193648",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginBottom: 15,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 12,
        marginRight: 15,
        backgroundColor: "#f0f4f7",
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#193648",
        marginBottom: 3,
    },
    cardInfo: {
        fontSize: 13,
        color: "#555",
    },
});

export default NearbyIndustryScreen;
