import React, {
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput
} from 'react-native'
import { FONTS } from "../../constants";
import { useTranslation } from 'react-i18next'

export function Select(props) {

    const [checkIn, setCheckIn] = useState('');

    const [checkOut, setCheckOut] = useState('');

    const [passengers, setPassengers] = useState(0);

    const { t } = useTranslation();

    return (
        <SafeAreaView style={{
            flex: 1
        }}>

            {/* Header */}

            <View style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
                width: '100%',
                paddingHorizontal: 20,
                marginTop: 10
            }}>
                <View>
                    <TouchableOpacity
                        onPress={_ => {
                            props.navigation.goBack();
                        }}
                    >
                        <Image
                            source={require('../../../assets/icon/back_button.png')}
                            style={{
                                width: 41,
                                height: 40
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        fontFamily: FONTS.Bold,
                        fontSize: 30,
                        color: 'black',
                        paddingHorizontal: 15
                    }}>Hotel Modern View</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        paddingHorizontal: 15
                    }}>
                        <View>
                            <Text style={{
                                fontFamily: FONTS.Medium,
                                fontSize: 15,
                                color: '#00000080',
                            }}>Bantul, Yogyakarta, Indonesia</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../../../assets/icon/home/location.png')}
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

            {/* Main */}

            <View style={{
                paddingHorizontal: 20,
                marginTop: 20
            }}>
                <Text style={{
                    textAlign: 'left',
                    fontFamily: FONTS.Bold,
                    fontSize: 25,
                    color: '#00000080'
                }}>{t("Select")}</Text>
            </View>

            <View style={{
                paddingHorizontal: 20
            }}>

                <View style={{
                    width: '100%',
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#CACACA',
                    height: 45,
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <View style={{

                    }}>
                        <Image
                            source={require('../../../assets/icon/select/check_in.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>

                    <TextInput
                        value={checkIn}
                        onChangeText={text => setCheckIn(text)}
                        placeholder={t("Checkin date")}
                        placeholderTextColor={"#A9A9A9"}
                        style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            marginLeft: 10,
                            width: '80%',
                            textAlign: 'right',
                        }}
                    />

                    <TouchableOpacity style={{
                        alignContent: 'flex-end'
                    }}>
                        <Image
                            source={require('../../../assets/icon/select/drop_down.png')}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>

                </View>

                <View style={{
                    width: '100%',
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#CACACA',
                    height: 45,
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <View style={{

                    }}>
                        <Image
                            source={require('../../../assets/icon/select/check_in.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>

                    <TextInput
                        value={checkIn}
                        onChangeText={text => setCheckIn(text)}
                        placeholder={t("Checkout date")}
                        placeholderTextColor={"#A9A9A9"}
                        style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            marginLeft: 10,
                            width: '80%',
                            textAlign: 'right',
                        }}
                    />

                    <TouchableOpacity style={{
                        alignContent: 'flex-end'
                    }}>
                        <Image
                            source={require('../../../assets/icon/select/drop_down.png')}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>

                </View>

                <View style={{
                    width: '100%',
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#CACACA',
                    height: 45,
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <View style={{

                    }}>
                        <Image
                            source={require('../../../assets/icon/select/check_in.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>

                    <TextInput
                        value={checkIn}
                        onChangeText={text => setCheckIn(text)}
                        placeholder={t("Passengers")}
                        placeholderTextColor={"#A9A9A9"}
                        style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            marginLeft: 10,
                            width: '80%',
                            textAlign: 'right',
                        }}
                    />

                    <TouchableOpacity style={{
                        alignContent: 'flex-end'
                    }}>
                        <Image
                            source={require('../../../assets/icon/select/drop_down.png')}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
    );
}