import react from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { withContext } from 'react-simplified-context'
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';

const ListScreen = ({
    articles,
}) => {
    return (
        <SafeAreaView styles={styles.container}>
            <Header title={"나의 글"} />
            <FlatList 
                data={articles}
                renderItem={({ item }) => {
                    return <ArticleItem article={item} />
                }}
                keyExtractor={(item) => {
                    return `${item.id}`
                }}
            />
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default withContext(ListScreen);