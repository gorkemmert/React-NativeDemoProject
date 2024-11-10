import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import CustomSwitch from '../components/CustomSwitch';

const ProfileScreen = ({setNotCount}) => {
    useEffect(() => {
        setNotCount(2) 
        }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: 'https://avatars.mds.yandex.net/i?id=47e61f2ee9a6bbc8fc3133d3fc5122c2ab8c6052-7930431-images-thumbs&n=13' }}
                    style={styles.profileIcon}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.userName}>MEHMET UZUN</Text>
                    <Text style={styles.userRef}>Ref: 16486813</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="notifications" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Bildirimler</Text>
                    </View>
                    <CustomSwitch initialValue={true} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="cart" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Satış İşlemleri</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="bus" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Kargo İşlemleri</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="storefront" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Tedarikçiler</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="settings" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Hesap Ayarları</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemContent}>
                        <Ionicons name="headset" size={24} color="#8644db" />
                        <Text style={styles.menuText}>Müşteri Hizmetleri</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#e0e6ef',
    },
    profileInfo: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 12,
        padding: 20,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#fff',
        marginLeft: 10,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#17219a',
    },
    userRef: {
        fontSize: 14,
        color: '#c0c0c0',
    },
    menu: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#eaeaea',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 16,
        color: '#17219a',
        marginLeft: 10,
    },
});

export default ProfileScreen;