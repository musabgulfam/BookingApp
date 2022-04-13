import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    Authentication 
} from "../screens";

export function Navigation(props) {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Auth"
            >
                <Stack.Screen name="Auth" component={Authentication} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}