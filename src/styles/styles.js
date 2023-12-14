import { StyleSheet } from 'react-native';

const colors = {
    c1: '#264653',
    c2: '#2A9D8F',
    c3: '#E9C46A',
    c4: '#F4A261',
    c5: '#E76F51',
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.c3,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        width: 200,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        marginHorizontal: 50,
    },
    titleContainer: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: colors.c2,
    },
    backgroundImage: {
        flex: 1,
        width: '100%', // Fill the width of the screen
        height: '100%', // Fill the height of the screen
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { styles };