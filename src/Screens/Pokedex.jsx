import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "./Pokemon";

export default function Pokedex () {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokemon" component={Pokemon}/>
        </Stack.Navigator>
    )
}