import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const ClickImage = ({ navigation, route }) => {

    const { imageArr, direction } = route.params

    const imageHandler = (img) => {
        if (direction == 'front') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'front': img }] },
                merge: true
            })
        }
        else if (direction == 'right') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'right': img }] },
                merge: true
            })
        }
        else if (direction == 'back') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'back': img }] },
                merge: true
            })
        }
        else if (direction == 'left') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'left': img }] },
                merge: true
            })
        }
        else if (direction == 'up') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'up': img }] },
                merge: true
            })
        }
        else if (direction == 'down') {
            navigation.navigate({
                name: 'Home',
                params: { newImgArr: [...imageArr, { 'down': img }] },
                merge: true
            })
        }
    }


    useEffect(() => {
        takePicture()
    }, [])

    const [image, setImage] = useState(null)
    const windowWidth = useWindowDimensions().width

    const selectPicture = async () => {
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
            aspect: 1,
            allowsEditing: true,
        });
        if (!cancelled) setImage(uri);
    };

    const takePicture = async () => {
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64:true
        });
        if (!cancelled) {
            setImage(uri);
            console.log(uri)
            imageHandler(uri)
        }
        else {
            navigation.navigate("Home")
        }
    };

    return (
        <View>
            
        </View>
    )
}

export default ClickImage

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
