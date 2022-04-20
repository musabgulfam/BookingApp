import React, {
    useState,
    useEffect
} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Authentication,
    Home,
    Loading
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import auth from '@react-native-firebase/auth';
import { useStoreActions } from "easy-peasy";
import { Image } from "react-native";

export function Navigation(props) {

    const [user, setUser] = useState();

    const [initializing, setInitializing] = useState(true);

    const setUserAction = useStoreActions(actions => actions.setUser);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setUserAction(user);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const Tab = createBottomTabNavigator();

    const MainFlow = _ => {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Home"}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({ focused }) => focused ? <Image 
                            source={require('../../assets/icon/tab/home/globe_sel.png')} 
                            style={{
                                width: 68,
                                height: 70,
                                resizeMode: 'contain'
                            }}
                        /> : <Image 
                            source={require('../../assets/icon/tab/home/globe.png')} 
                            style={{
                                width: 32,
                                height: 32,
                            }}
                        />,
                        tabBarShowLabel: false
                    }}
                />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
        );
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            {initializing ? (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="Loading"
                >
                    <Stack.Screen name="Loading" component={Loading} />
                </Stack.Navigator>
            ) : user ? <MainFlow /> : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="Auth"
                >
                    <Stack.Screen name="Auth" component={Authentication} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}