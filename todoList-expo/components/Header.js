import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({
    show,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                할 일 목록
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={show}
              style={styles.button}
              >
                <Ionicons name="ios-add" color="#000000" size ={24} />
              </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 56,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        color: '#212121',
        fontSize: 21,
        fontWeight: '600',
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "212121",
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Header