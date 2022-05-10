import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { FONTS } from "../../constants";
import { useTranslation } from "react-i18next";

export function Card({
    title,
    price,
    onPress
}){

    const { t } = useTranslation();
    
    return (
        <TouchableOpacity style={{
            height: 470,
            borderRadius: 14,
            backgroundColor: 'white',
            marginBottom: 35,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
            marginHorizontal: 10
        }}>
            <View style={{
                height: 144,
            }}>
                <Image 
                    source={require('../../../assets/pictures/temp_hotel.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 144,
                        width: '100%',
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14
                    }}
                />
            </View>
            <View style={{
                height: 354,
                paddingTop: 13,
                paddingHorizontal: 13
            }}>
                <View>
                    <Text style={{
                        fontFamily: FONTS.Bold,
                        fontSize: 18,
                        color: 'black'
                    }}>{title}</Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 12
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            marginRight: 10
                        }}>391 Sq Ft</Text>
                        <Image 
                            source={require('../../../assets/icon/select/area.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 26,
                                height: 26,
                                marginBottom: 5
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 12
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            marginRight: 10
                        }}>Ocean View</Text>
                        <Image 
                            source={require('../../../assets/icon/select/ocean.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 26,
                                height: 26,
                                marginBottom: 5
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 12
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            marginRight: 10
                        }}>Reserve now, pay deposit</Text>
                        <Image 
                            source={require('../../../assets/icon/select/tick.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 26,
                                height: 26,
                                marginBottom: 5
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 12
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            marginRight: 10
                        }}>1 king bed</Text>
                        <Image 
                            source={require('../../../assets/icon/select/bed.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 26,
                                height: 26,
                                marginBottom: 5
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 12
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            marginRight: 10
                        }}>Free wifi</Text>
                        <Image 
                            source={require('../../../assets/icon/select/wifi.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 26,
                                height: 26,
                                marginBottom: 5
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 15
                }}>
                    <TouchableOpacity 
                        style={{
                            borderRadius: 8,
                            backgroundColor: '#36BFFA',
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 152
                        }}
                        onPress={onPress}
                    >
                        <Text style={{
                            fontFamily: FONTS.Bold,
                            color: 'white',
                            fontSize: 20
                        }}>{t("Reserve")}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: FONTS.Bold,
                        fontSize: 25,
                        color: '#00000099'
                    }}>${price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}