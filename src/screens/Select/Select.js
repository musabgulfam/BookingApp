import React, {
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
    Modal,
    FlatList,
    ScrollView
} from 'react-native'
import { FONTS } from "../../constants";
import { useTranslation } from 'react-i18next'
import { Calendar } from "react-native-calendars";
import { Card } from './Card'

export function Select(props) {

    const [checkIn, setCheckIn] = useState('');

    const [checkOut, setCheckOut] = useState('');

    const [passengers, setPassengers] = useState('');

    const { t } = useTranslation();

    const [calendarModalVisible, setCalendarVisible] = useState('');

    const [adults, setAdults] = useState(0);

    const [infants, setInfants] = useState(0);

    const CheckInModal = _ => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible === 'checkin'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderRadius: 12,
                        backgroundColor: 'white',
                        padding: 18
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            textAlign: 'left',
                            color: 'black'
                        }}>{t("Checkin date")}</Text>
                        <Calendar
                            onDayPress={val => {
                                setCheckIn(val.dateString)
                                setCalendarVisible('')
                            }}
                            theme={{
                                textColor: '#FF2D55'
                            }}
                        />
                    </View>
                </View>
            </Modal>
        );
    }

    const CheckOutModal = _ => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible === 'checkout'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderRadius: 12,
                        backgroundColor: 'white',
                        padding: 18
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            textAlign: 'left',
                            color: 'black'
                        }}>{t("Checkout date")}</Text>
                        <Calendar
                            onDayPress={val => {
                                setCheckOut(val.dateString)
                                setCalendarVisible('')
                            }}
                        />
                    </View>
                </View>
            </Modal>
        );
    }

    const PassengerModal = _ => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible === 'passenger'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderRadius: 12,
                        backgroundColor: 'white',
                        padding: 18
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Medium,
                            fontSize: 20,
                            color: '#A9A9A9',
                            // textAlign: 'left'
                        }}>Room 1</Text>

                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                width: 100
                            }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icon/select/plus.png')}
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </TouchableOpacity>

                                <View style={{
                                    borderWidth: 1,
                                    height: 20,
                                    borderColor: '#D1D1D6'
                                }} />

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icon/select/minus.png')}
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                marginLeft: 30
                            }}>
                                <Text style={{
                                    color: '#FF2D55',
                                    fontSize: 20
                                }}>{adults}</Text>
                            </View>


                            <View style={{
                                marginLeft: 30
                            }}>
                                <Text style={{
                                    textAlign: 'left',
                                    fontSize: 16
                                }}>Adults</Text>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                width: 100
                            }}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icon/select/plus.png')}
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </TouchableOpacity>

                                <View style={{
                                    borderWidth: 1,
                                    height: 20,
                                    borderColor: '#D1D1D6'
                                }} />

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icon/select/minus.png')}
                                        style={{
                                            width: 28,
                                            height: 28,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                marginLeft: 30
                            }}>
                                <Text style={{
                                    color: '#FF2D55',
                                    fontSize: 20
                                }}>{adults}</Text>
                            </View>


                            <View style={{
                                marginLeft: 30,
                            }}>
                                <Text style={{
                                    textAlign: 'left',
                                    fontSize: 16
                                }}>Children</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }

    const dummy_data = [
        {
            name: 'abc'
        },
        {
            name: 'cde'
        },
        {
            name: 'efg'
        },
        {
            name: 'ghi'
        }
    ];

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#E5E5E5',

        }}>

            {/* Header */}

            <CheckInModal />

            <CheckOutModal />

            <PassengerModal />

            <SafeAreaView style={{
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
            </SafeAreaView>

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

                    <TouchableOpacity
                        style={{
                            alignContent: 'flex-end'
                        }}
                        onPress={_ => {
                            setCalendarVisible('checkin');
                        }}
                    >
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
                            source={require('../../../assets/icon/select/check_out.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>

                    <TextInput
                        value={checkOut}
                        onChangeText={text => setCheckOut(text)}
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

                    <TouchableOpacity
                        style={{
                            alignContent: 'flex-end'
                        }}
                        onPress={_ => {
                            setCalendarVisible('checkout');
                        }}
                    >
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
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: '85%',
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
                                source={require('../../../assets/icon/select/passenger.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: 30,
                                    width: 30
                                }}
                            />
                        </View>

                        <TextInput
                            value={passengers}
                            onChangeText={text => passengers(text)}
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

                        <TouchableOpacity
                            style={{
                                alignContent: 'flex-end'
                            }}
                            onPress={_ => {
                                setCalendarVisible('passenger');
                            }}
                        >
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

                    <TouchableOpacity>
                        <Image 
                            source={require('../../../assets/icon/select/register.png')}
                            style={{
                                width: 45,
                                height: 45,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{
                paddingHorizontal: 5
            }}>
                <FlatList
                    data={dummy_data}
                    renderItem={({ item }) => <Card />}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </ScrollView>
    );
}