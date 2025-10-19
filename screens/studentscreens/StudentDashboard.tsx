// StudentDashboard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StudentDashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Student Dashboard!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
});

export default StudentDashboard;
