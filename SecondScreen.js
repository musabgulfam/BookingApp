import React from "react";
import {
    View, Text, SafeAreaView
} from 'react-native'

export default function SecondScreen(props){
    return (
        <SafeAreaView style={{
            flex: 1,
            
        }}>
            <Text>Second</Text>
        </SafeAreaView>
    );
}