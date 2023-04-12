import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, navigate } from 'react-native'
import { withNavigation } from 'react-navigation'
import Title from '../components/title'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title titleText='Quiz Quest' />
            <View style={styles.bannerImg}>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-vector/retro-cartoon-question-sticker-set_52683-84428.jpg?w=740&t=st=1679831852~exp=1679832452~hmac=b784b0a45205c70c74dcaf2838ff9c8984f199f6b42e0796f70d643742329a8b' }}
                    style={styles.banner} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Quiz")}
                style={styles.button}>
                <Text style={styles.btntxt}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,

    },
    bannerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%',
        backgroundColor: 'white'
    },
    button: {
        width: '100%',
        backgroundColor: '#A459D1',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 40,
    },
    btntxt: {
        fontSize: 25,
        fontWeight: '900',
        color: 'white'
    }
})
