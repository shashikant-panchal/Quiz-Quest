import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Title from '../components/title'

const Result = ({ navigation, route }) => {
    const { score } = route.params
    const resultBanner = score > 30 ? 'https://img.freepik.com/free-vector/man-getting-award-writing_74855-5891.jpg?w=740&t=st=1680009743~exp=1680010343~hmac=51f7cdd0bf8024514c5ead8f5eefdc1ab27e88981ba8d871ba2ecc744dda02b7' : 'https://img.freepik.com/free-vector/oh-no-concept-illustration_114360-8780.jpg?w=740&t=st=1680008885~exp=1680009485~hmac=d88f6ccf45dc73858453261db86a7de780427806433357468cdad3742a25c43f'
    return (
        <View style={styles.container}>
            <Title titleText='Results' />
            <Text style={styles.scoreStyle}>{score}</Text>
            <View style={styles.bannerImg}>
                <Image
                    source={{ uri: resultBanner }}
                    style={styles.banner} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text style={styles.btntxt}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Result;

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
    },
    scoreStyle: {
        fontSize: 25,
        fontWeight: '800',
        alignSelf: 'center'
    }
})
