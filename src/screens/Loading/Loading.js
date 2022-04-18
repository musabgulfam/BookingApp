import React from "react";
import {
    View,
    ActivityIndicator
} from 'react-native'

export function Loading(props){
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E5E5E5'
        }}>
            <ActivityIndicator 
                size='large'
                color='#0000004D'
            />
        </View>
    );
}