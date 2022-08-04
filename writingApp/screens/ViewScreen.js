import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { withContext } from 'react-simplified-context'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
    articles,
    route,
    toggle,
}) => {
    const navigation = useNavigation();
    // const id = navigation.setParams({ 'id': -1})
    const id = route.params.id
    // const id = navigate.getParam('id', -1)
    const article = articles.find((a) => { return a.id === id })

    return(
        <SafeAreaView style={styles.container}>
            <ViewHeader title={article.title} bookmarked={article.bookmarked} bookmark={() => { toggle(id)}} />
            <ScrollView>
                <TouchableOpacity activeOpacity={0.8} onLongPress={() => { navigation.navigate('Edit', { id: id }) }}>
                    <Text style={styles.content}>
                        {article.content}
                    </Text>
                    <Text style={styles.date}>
                        {article.date}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        fontSize: 16,
        lineHegiht: 20,
        color: '#424242',
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 12,
        color: '#BDBDBD',
    },
})

export default withContext(ViewScreen)