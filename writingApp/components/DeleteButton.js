import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

const DeleteButton =({
    onPress,
}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={onPress} 
            style={styles.button}
        >
            <Text style={styles.text}>삭제</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FE5746',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        alignItems: 'center',
    },
})

export default DeleteButton