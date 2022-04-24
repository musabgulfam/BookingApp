import React from "react";
import {
    View,
    Text,
    Image
} from 'react-native'
import { FONTS } from "../../constants";

export function FacilityCard({
    facilityImage,
    facilityText
}){
    return (
        <View style={{
            width: 90,
            height: 90,
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 10
        }}>
            <Image 
                source={facilityImage}
                style={{
                    height: 30,
                    resizeMode: 'contain',
                    width: '100%'
                }}
            />
            <Text style={{
                color: '#00000080',
                fontFamily: FONTS.Medium,
                fontSize: 15,
                marginTop: 10
            }}>{facilityText}</Text>
        </View>
    );
}