// SplashScreens.tsx
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

const splash1 = require('../assets/images/industry.jpeg');
const splash2 = require('../assets/images/industry.jpeg');
const splash3 = require('../assets/images/industry.jpeg');

const splashData = [
    {
        id: 1,
        title: 'Connect & Collaborate',
        description: 'Bring visionaries, ideas and people together in one hub',
        image: splash1
    },
    {
        id: 2,
        title: 'Discover Opportunities',
        description: 'Find mentors, guides and industry experts to help you grow',
        image: splash2
    },
    {
        id: 3,
        title: 'Together for Better Future',
        description: 'Connecting with industry leaders and working jointly',
        image: splash3
    }
];

export default function SplashScreen2() {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setCurrentIndex(index);
    };

    const goToNext = () => {
        if (currentIndex < splashData.length - 1) {
            scrollViewRef.current?.scrollTo({
                x: width * (currentIndex + 1),
                animated: true
            });
        } else {

            navigation.navigate('RolesScreen' as never);
        }
    };

    const handleSkip = () => {
        navigation.navigate('RolesScreen' as never);
    };

    return (
        <View style={styles.container}>

            {currentIndex < splashData.length - 1 && (
                <TouchableOpacity
                    onPress={handleSkip}
                    style={styles.skipButton}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            )}


            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {splashData.map((item) => (
                    <View key={item.id} style={[styles.slide, { width }]}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                {/* Dots Indicator */}
                <View style={styles.dotsContainer}>
                    {splashData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                index === currentIndex ? styles.activeDot : styles.inactiveDot
                            ]}
                        />
                    ))}
                </View>


                <TouchableOpacity
                    onPress={goToNext}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        {currentIndex === splashData.length - 1 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    skipButton: {
        position: 'absolute',
        top: 48,
        right: 24,
        zIndex: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    skipText: {
        color: '#64748b',
        fontWeight: '600',
        fontSize: 16,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    imageContainer: {
        width: 288,
        height: 288,
        borderRadius: 24,
        overflow: 'hidden',
        marginBottom: 48,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 16,
    },
    bottomSection: {
        paddingBottom: 48,
        paddingHorizontal: 32,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        width: 32,
        backgroundColor: '#2563eb',
    },
    inactiveDot: {
        width: 8,
        backgroundColor: '#cbd5e1',
    },
    button: {
        backgroundColor: '#2563eb',
        borderRadius: 28,
        paddingVertical: 16,
        paddingHorizontal: 32,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
