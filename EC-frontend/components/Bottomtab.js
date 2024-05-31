import { View, Text } from 'react-native'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

function Main (){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    )
}

function Notifications (){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    )
}

function Contacts (){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    )
}

const Bottomtab = createBottomTabNavigator() 

function Mytabs (){
    return (
        <Tab.Navigator>
            <Tab.Main name="Home" compone/>
        </Tab.Navigator>
    )
}

export default Bottomtab