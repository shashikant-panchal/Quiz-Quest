import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Title = ({ titleText }) => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: '900',
    },
    constainer: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
