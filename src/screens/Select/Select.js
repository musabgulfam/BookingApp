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
    ScrollView,
    ActivityIndicator
} from 'react-native'
import { FONTS } from "../../constants";
import { useTranslation } from 'react-i18next'
import { Calendar } from "react-native-calendars";
import { Card } from './Card'
import { useStoreActions, useStoreState } from "easy-peasy";

export function Select(props) {

    const [checkIn, setCheckIn] = useState('');

    const [checkOut, setCheckOut] = useState('');

    const [passengers, setPassengers] = useState('');

    const { t } = useTranslation();

    const [calendarModalVisible, setCalendarVisible] = useState('');

    const [loading, setLoading] = useState(false);

    const hotelFilter = useStoreActions(actions => actions.hotelFilter);

    const filteredHotels = useStoreState(state => state.filteredHotels);

    const { info } = props.route.params;

    const [selectedRoom, setSelectedRoom] = useState(null);

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
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.50,
                    shadowRadius: 7.49,

                    elevation: 12,
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
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: '60%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#36BFFA',
                                    borderRadius: 20
                                }}
                                onPress={_ => {
                                    setCalendarVisible('')
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.Bold,
                                    color: 'white',
                                    fontSize: 20
                                }}>{t('Proceed')}</Text>
                            </TouchableOpacity>
                        </View>
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
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.50,
                    shadowRadius: 7.49,

                    elevation: 12,
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
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: '60%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#36BFFA',
                                    borderRadius: 20
                                }}
                                onPress={_ => {
                                    setCalendarVisible('')
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.Bold,
                                    color: 'white',
                                    fontSize: 20
                                }}>{t('Proceed')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    const PassengerModal = _ => {

        const [adults, setAdults] = useState(0);

        const [infants, setInfants] = useState(0);
        
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible === 'passenger'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.50,
                    shadowRadius: 7.49,

                    elevation: 12,
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
                                <TouchableOpacity
                                    onPress={_ => {
                                        setAdults(adults + 1);
                                    }}
                                >
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

                                <TouchableOpacity
                                    onPress={_ => {
                                        setAdults(adults - 1);
                                    }}
                                >
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
                                <TouchableOpacity
                                    onPress={_ => {
                                        setInfants(infants + 1);
                                    }}
                                >
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

                                <TouchableOpacity
                                    onPress={_ => {
                                        setInfants(infants - 1);
                                    }}
                                >
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
                                }}>{infants}</Text>
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
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: '60%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#36BFFA',
                                    borderRadius: 20
                                }}
                                onPress={_ => {
                                    setPassengers(adults+infants)
                                    setCalendarVisible('')
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.Bold,
                                    color: 'white',
                                    fontSize: 20
                                }}>{t('Proceed')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    const RoomSelectModal = _ => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible === 'room'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.50,
                    shadowRadius: 7.49,

                    elevation: 12,
                }}>
                    <View style={{
                        borderRadius: 12,
                        backgroundColor: 'white',
                        padding: 18,
                        width: '92%'
                    }}>
                        <Text style={{
                            fontFamily: FONTS.Bold,
                            fontSize: 25,
                            color: 'black'
                        }}>{selectedRoom?.title || ''}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <Text style={{
                                color: '#00000080',
                                fontSize: 20,
                                fontFamily: FONTS.Medium
                            }}>${selectedRoom?.price || ''}</Text>
                            <Text style={{
                                color: '#00000080',
                                fontSize: 20,
                                fontFamily: FONTS.Medium
                            }}>1 room x 1 night</Text>
                        </View>
                        <View 
                            style={{
                                borderWidth: 1,
                                borderColor: '#00000026',
                                marginVertical: 10
                            }}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{
                                color: '#00000080',
                                fontSize: 20,
                                fontFamily: FONTS.Medium
                            }}>${selectedRoom?.price || ''}</Text>
                            <Text style={{
                                color: '#00000080',
                                fontSize: 20,
                                fontFamily: FONTS.Medium
                            }}>Total</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <TouchableOpacity 
                                style={{
                                    borderRadius: 8,
                                    backgroundColor: '#36BFFA',
                                    width: '80%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 45
                                }}
                                onPress={_ => {
                                    setCalendarVisible('')
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.Bold,
                                    color: 'white',
                                    fontSize: 20
                                }}>{t('Pay now')}</Text>
                            </TouchableOpacity>
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

            <RoomSelectModal />

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
                    }}>{info.name}</Text>
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
                            }}>{info.city.name}</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../../../assets/icon/home/location.png')}
                                style={{
                                    width: 10,
                                    height: 16,
                                    resizeMode: 'contain',
                                    marginLeft: 6,
                                    marginBottom: 5
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
                    <View>
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
                            marginTop: 6
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
                            marginTop: 6
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
                            value={passengers.toString()}
                            onChangeText={text => setPassengers(parseInt(text))}
                            placeholder={t("Passengers")}
                            placeholderTextColor={"#A9A9A9"}
                            style={{
                                fontFamily: FONTS.Medium,
                                fontSize: 20,
                                marginLeft: 10,
                                width: '80%',
                                textAlign: 'right',
                                marginTop: 6
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

                    <TouchableOpacity
                        onPress={async _ => {
                            setLoading(true)
                            await hotelFilter({
                                "checkin":checkIn,
                                "checkout":checkOut,
                                "maxGuest": passengers,
                                "hotel": info.id 
                            });
                            setLoading(false);
                        }}
                    >
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

            {
                filteredHotels.length ? <View style={{
                    paddingHorizontal: 5
                }}>
                    <FlatList
                        data={filteredHotels}
                        renderItem={({ item }) => <Card
                            price={item.price}
                            title={item.title}
                            onPress={_ => {
                                setSelectedRoom(item);
                                setCalendarVisible('room')
                            }}
                        />}
                        showsVerticalScrollIndicator={false}
                    />
                </View> : loading ? <ActivityIndicator /> : null
            }

        </ScrollView>
    );
}