import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { FONTS } from "../constants";

export function Card({
    navigation,
    name,
    image
}){

    return(
        <TouchableOpacity 
            style={{
                height: 244,
                borderRadius: 14,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.30,

                elevation: 13,
                marginVertical: 5,
                marginHorizontal: 10
            }}
            onPress={_ => {
                navigation.navigate('Info');
            }}
        >
            <View style={{
                flex: 0.7,
                // borderWidth: 3,
                // borderColor: 'green'
            }}>
                <Image 
                    source={require('../../assets/pictures/temp_hotel.png')}
                    style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14
                    }}
                />
            </View>
            <View style={{
                flex: 0.3,
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: 'white',
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                paddingHorizontal: 12,
                paddingTop: 12
            }}>
                <View>
                    <Text style={{
                        fontFamily: FONTS.Bold,
                        fontSize: 18,
                        color: 'black',
                        marginBottom: 10
                    }}>{name}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#00000099',
                            fontFamily: FONTS.Medium
                        }}>/night</Text>
                        <Text style={{
                            fontFamily: FONTS.Bold,
                            color: '#00000099'
                        }}>$180</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end'
                    }}>
                        <View>
                            <Text style={{
                                color: '#00000099',
                                fontFamily: FONTS.Medium,
                                fontSize: 15,
                                textAlign: 'left'
                            }}>Karachi, Pakistan</Text>
                        </View>
                        <View>
                            <Image 
                                source={require('../../assets/icon/home/location.png')}
                                style={{
                                    width: 10,
                                    height: 16,
                                    resizeMode: 'contain',
                                    marginLeft: 6
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}