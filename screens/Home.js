import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';

const Home = ({ navigation, route }) => {
    const [frontSet, setFrontSet] = useState(false)
    const [stateImages, setStateImages] = useState([])
    let images = [];
    // front    // right    // back    // left    // up    // down

    const [capturedImage, setCapturedImage] = useState([])
    useEffect(() => {
        if (route.params?.newImgArr) {
            images = route.params?.newImgArr
            console.log(images)
            setStateImages(images)
        }
    }, [route.params?.newImgArr])

    const data = ["front", "right", "back", "left", "up", "down"]

    const ClickButton = (props) => {
        const [imageStatus, setImageStatus] = useState(false)
        useEffect(() => {
            setTimeout(() => {
                let status = imageStatusHandler(props.direction)
                setImageStatus(status)
            }, 300);
        }, [images])

        const findImageURI = (id) => {
            let uri;
            images.forEach(el => {
                uri = el[id]
            });
            console.log(uri)
            return uri
        }
        let direction = props.direction
        let imageURI = findImageURI(direction)

        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: props.direction },)}>
                <View style={buttonStyles.container}>
                    {!imageStatus ? <Feather name="camera" size={24} color="black" /> :
                        // <Image source={{ uri: imageURI }} style={{ width: '90%', height: '90%' }} />}
                        <Feather name="check" size={24} color="black" />}
                    <Text>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonF = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'front' },)}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Front</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonR = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'right' })}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Right</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonB = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'back' })}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Back</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonL = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'left' })}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Left</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonU = () => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'up' })}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Up</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ClickButtonD = () => {
        const [downStatus, setDownStatus] = useState(false)
        useEffect(() => {
            setTimeout(() => {

                let status = imageStatusHandler("down")
                console.log(status)
                setDownStatus(status)
            }, 100);
            // if (status==true){ console.log("logged")}
        }, [images])
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Click", { imageArr: images, direction: 'down' })}>
                <View style={buttonStyles.container}>
                    {/* <Feather name="camera" size={24} color="black" /> */}
                    <Feather name="check" size={24} color="black" />
                    <Text>Down</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const imageStatusHandler = (id) => {
        let isTrue = false
        images.forEach(el => {
            for (let prop in el) {
                if (id == prop) {
                    isTrue = true
                    break
                }
            }
        })
        return isTrue
    }
    let solved = "F', R, U', R', U, U, F2, Y, B', U, B, U, F2, Y, R', F', U, F, R, U, U, U, F2, Y, L, F, U', F', L', U, F2, Y, L', U, L, U', U, F', U, F, U, F', U2, F, Y, U, Y', R', U', R, U2, R', U', R, U, R', U', R, Y, Y, B, U, B', U, F', U2, F, U, F', U2, F, Y, U2, U', R, U, R', U, R, U, R', Y, Y, R', F, R, U, R', F', R, Y, L, U', L', U, Y, Y, Y, Y, U, Y, Y, Y, Y, U, Y, Y, R, U', R, U, R, U, R, U', R', U', R2"
    let solvedArr = solved.split(',')

    const DisplayResultItem = (props) => {
        const [selected, setSelected] = useState(false)
        return (
            <View opacity={selected ? 1 : 0.5}>

                <Pressable style={{ borderRadius: 5, borderColor: 'gray', borderWidth: 1, padding: 10 }} onPress={() => setSelected(!selected)}>
                    <Text style={{ color: 'white', fontSize: 18, minWidth: 25, textAlign: 'center', textAlignVertical: 'center' }}>{props.action}</Text>
                </Pressable>
            </View>
        )
    }

    const DisplayResult = () => {
        return (
            <FlatList
                style={{ alignSelf: 'center' }}
                numColumns={8}
                data={solvedArr}
                renderItem={({ item }) => <DisplayResultItem action={item} />} />
        )
    }

    return (
        <ScrollView style={styles.container}>

            <ScrollView horizontal style={{ flexDirection: 'row' }}>
                <ClickButtonF />
                <ClickButtonR />
                <ClickButtonB />
                <ClickButtonL />
                <ClickButtonU />
                <ClickButtonD />
                
            </ScrollView>
            {/* <FlatList
                style={{ backgroundColor: 'red', maxHeight: 200 }}
                overScrollMode="never"
                horizontal
                data={data}
                renderItem={({ item }) => <ClickButton text={item} direction={item} />} keyExtractor={item => item} /> */}
            <DisplayResult/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
    }
})

const buttonStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white', width: 100, height: 100, alignItems: 'center', justifyContent: 'center'
    }
})
