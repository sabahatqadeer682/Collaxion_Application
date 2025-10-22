import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Import your screens
import StudentHomeScreen from "./StudentHomeScreen";
import NearbyIndustryScreen from "./NearbyIndustryScreen";
import InternshipsProjectsScreen from "./InternshipsProjectsScreen";
import RecommendedFeedScreen from "./RecommendedFeedScreen";
import StudentLogin from "./StudentLogin"; // Login screen

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = (props: any) => {
    const navigation = useNavigation<any>();

    const handleLogout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            { text: "Cancel", style: "cancel" },
            { text: "Logout", onPress: () => navigation.replace("StudentLogin") }, // Redirect to login screen
        ]);
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#193648", flex: 1 }}>
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
                <Image
                    source={{ uri: "https://i.ibb.co/xmD7dXh/collaxion-logo.png" }}
                    style={styles.logoImage}
                />
                <Image
                    source={require("../../assets/images/logo.jpeg")}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>Hello, Student!</Text>
                <Text style={styles.tagline}>Explore opportunities & grow your career</Text>
            </View>

            {/* Drawer Items */}
            <DrawerItemList
                {...props}
                activeTintColor="#E2EEF9" // Color theme for active item
                inactiveTintColor="#fff"
                labelStyle={{ fontSize: 16 }}
            />

            {/* Logout Button */}
            <DrawerItem
                label="Logout"
                labelStyle={{ color: "#fff" }}
                icon={({ size }) => <MaterialIcons name="logout" color="#fff" size={size} />}
                onPress={handleLogout}
            />
        </DrawerContentScrollView>
    );
};

// Drawer Navigator
const StudentDashboardNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: { backgroundColor: "#193648" },
                headerTintColor: "#fff",
                drawerActiveTintColor: "#E2EEF9", // Active color theme
                drawerInactiveTintColor: "#fff",
                drawerLabelStyle: { fontSize: 16 },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={StudentHomeScreen}
                options={{
                    drawerLabel: "Dashboard",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="dashboard" color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="NearbyIndustry"
                component={NearbyIndustryScreen}
                options={{
                    drawerLabel: "Nearby Industries",
                    drawerIcon: ({ color, size }) => <Entypo name="shop" color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="InternshipsProjects"
                component={InternshipsProjectsScreen}
                options={{
                    drawerLabel: "Internships & Projects",
                    drawerIcon: ({ color, size }) => <MaterialIcons name="work" color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="RecommendedFeed"
                component={RecommendedFeedScreen}
                options={{
                    drawerLabel: "Recommended for You",
                    drawerIcon: ({ color, size }) => <FontAwesome5 name="star" color={color} size={size} />,
                }}
            />
            <Drawer.Screen
                name="StudentLogin"
                component={StudentLogin}
                options={{ drawerItemStyle: { height: 0 } }} // Hide login from drawer
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: "#193648",
        height: 220,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 20,
    },
    logoImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#fff",
        marginBottom: 10,
    },
    userName: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    tagline: {
        color: "#d1d1d1",
        fontSize: 13,
        marginTop: 4,
        textAlign: "center",
    },
});

export default StudentDashboardNavigator;
