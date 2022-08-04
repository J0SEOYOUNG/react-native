import react from 'react';
import { TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { withContext } from 'react-simplified-context'
import EditHeader from '../components/EditHeader';

const EditScreen = ({
    create,
    update,
    articles,
    route,
}) => {
    const id = route.params.id
    const article = articles.find((a) => { return a.id === id })
    let title = article ? article.title : ''
    let content = article ? article.content : ''
    return (
        <SafeAreaView styles={styles.container}>
            <EditHeader done={() => { 
                if (id > -1) {
                    update(id, title, content)
                } else {
                    create(title, content)
                }
            }} />
            <View style={styles.body}>
                <TextInput 
                    placeholder="제목"
                    onChangeText={(text) => { title = text }}
                    style={styles.title}                
                >
                    {title}
                </TextInput>
                <View style={styles.divider} />
                <TextInput 
                    placeholder="이곳을 눌러 작성을 시작하세요."
                    onChangeText={(text) => { content = text }}
                    multiline={true}
                    style={styles.content} 
                >
                    {content}
                </TextInput>
            </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    content: {
        fontSize: 16,
        lineHeight: 20,
        color: '#424242',
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '100%',
        backgroundColor: '#F1F1F1',
    },
});

export default withContext(EditScreen);