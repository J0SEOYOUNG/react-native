import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const EditHeader = ({
    done,
}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => { navigation.goBack(); }}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                activeOpacity={0.8}
            >
                <Icon name="chevron-back-outline" size={28} color="#DA5746" />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { done(); navigation.goBack(); }}
                hitSlop={{ top: 16, bottom: 16, left: 32, right: 32 }}
                activeOpacity={0.8}
            >
                <Text style={styles.done}>
                    완료
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    done: {
        fontSize: 16,
        color: '#DA5746'
    },
})

export default EditHeader