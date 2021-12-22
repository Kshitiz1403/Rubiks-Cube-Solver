import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import ClickImage from '../screens/ClickImage'
import Home from '../screens/Home'
// import Picture from '../screens/Picture'

const Theme = {
    dark: true,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.background,
        card: colors.background,
        text: 'white',
        // border: 'rgb(199, 199, 204)',
        // notification: 'rgb(255, 69, 58)',
    },
};

const Stack = createNativeStackNavigator()
const RootNavigator = () => {
    return (
        <NavigationContainer theme={Theme}>
            <View style={{ backgroundColor: colors.background, flex: 1 }}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Click" component={ClickImage} options={{headerShown:false}}/>
                    {/* <Stack.Screen name="Picture" component={Picture} /> */}
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})
