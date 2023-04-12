
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [qsns, setQsns] = useState();
    const [q, setQ] = useState(0);
    const [optns, setOptns] = useState([]);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);

    const getQuiz = async () => {
        setLoading(true)
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const result = await fetch(url);
        const data = await result.json();
        setQsns(data.results);
        setOptns(generateOptionsAndShuffle(data.results[0]))
        setLoading(false)
    }

    useEffect(() => {
        getQuiz()
    }, [])

    const handleNextPress = () => {
        setQ(q + 1)
        setOptns(generateOptionsAndShuffle(qsns[q + 1]))
    }

    const generateOptionsAndShuffle = (_question) => {
        const optns = [..._question.incorrect_answers]
        optns.push(_question.correct_answer)
        shuffleArray(optns)
        return optns
    }


    const handleSelectedOption = (_option) => {
        if (_option === qsns[q].correct_answer) {
            setScore(score + 10)
        }
        if (q !== 9) {
            setQ(q + 1)
            setOptns(generateOptionsAndShuffle(qsns[q + 1]))
        }
        if (q === 9) {
            handleShowResult();
        }
    }

    const handleShowResult = () => {
        navigation.navigate("Result", {
            score: score
        })
    }


    return (
        <View style={styles.conatiner}>
            {loading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Text style={{ fontSize: 30, fontWeight: '700' }}>Loading...</Text></View> : qsns && (
                    <View style={styles.parent}>
                        <View style={styles.top}>
                            <Text style={styles.qsn}>Q.{decodeURIComponent(qsns[q].question)}</Text>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.optBtn} onPress={() => handleSelectedOption(optns[0])}>
                                <Text style={styles.option}>{decodeURIComponent(optns[0])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optBtn} onPress={() => handleSelectedOption(optns[1])}>
                                <Text style={styles.option}>{decodeURIComponent(optns[1])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optBtn} onPress={() => handleSelectedOption(optns[2])}>
                                <Text style={styles.option}>{decodeURIComponent(optns[2])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optBtn} onPress={() => handleSelectedOption(optns[3])}>
                                <Text style={styles.option}>{decodeURIComponent(optns[3])}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.btntxt}>Previous</Text>
                        </TouchableOpacity> */}
                            {q !== 9 &&
                                <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                    <Text style={styles.btntxt}>Skip</Text>
                                </TouchableOpacity>}
                            {q === 9 &&
                                <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                                    <Text style={styles.btntxt}>Show Results</Text>
                                </TouchableOpacity>}
                        </View>
                    </View>
                )}
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    conatiner: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    top: {
        marginVertical: 15,

    },
    options: {
        marginVertical: 15,
        flex: 1,
    },
    bottom: {
        marginBottom: 10,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#A459D1',
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 40,
    },
    btntxt: {
        fontSize: 25,
        fontWeight: '900',
        color: 'white'
    },
    qsn: {
        fontSize: 35,
        fontWeight: '700',
    },
    option: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white'
    },
    optBtn: {
        paddingVertical: 15,
        marginVertical: 5,
        backgroundColor: '#BE6DB7',
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    parent: {
        height: '100%'
    }
})
