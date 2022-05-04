import React from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList
} from 'react-native'
import { FONTS } from "../../constants"
import { useTranslation } from 'react-i18next'
import { FacilityCard } from "./FacilityCard";

const { height, width } = Dimensions.get('window');

const dummy_data = [
    {
        facilityImage: require('../../../assets/icon/info/dine.png'),
        facilityText: "Dinner"
    },
    {
        facilityImage: require('../../../assets/icon/info/parking.png'),
        facilityText: "Parking"
    },
    {
        facilityImage: require('../../../assets/icon/info/wifi.png'),
        facilityText: "Wifi"
    },
    {
        facilityImage: require('../../../assets/icon/info/tv.png'),
        facilityText: "TV"
    }
];

export function Info(props) {

    const { t } = useTranslation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#E5E5E5'
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    // flexGrow: 1,
                    // justifyContent: 'space-between'
                }}
            >
                <View style={{
                    height: height * 0.7,
                }}>
                    <SafeAreaView style={{
                        position: 'absolute',
                        left: 10,
                        top: 20,
                        zIndex: 2
                    }}>
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
                    </SafeAreaView>
                    <Image
                        style={{
                            resizeMode: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                        source={require('../../../assets/pictures/temp_resort.png')}
                    />
                </View>
                <View style={{
                    // height: height * 0.4,
                    paddingTop: 15,
                    // paddingHorizontal: 15,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    zIndex: 2,
                    width,
                    // borderWidth: 3,
                    // borderColor: 'red'
                    // backgroundColor: 'green',
                    // position: 'absolute',
                    // bottom: -50,
                    // right: 0,
                    // left: 0
                }}>
                    <View style={{
                        flex: 1,
                        // borderWidth: 2,
                        // borderColor: 'orange'
                    }}>
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
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontFamily: FONTS.Bold,
                                fontSize: 25,
                                color: "#00000080",
                                textAlign: 'left',
                                marginBottom: 15,
                                paddingHorizontal: 15
                            }}>{t("Facilities")}</Text>
                        </View>

                        <View style={{
                            // borderColor: 'red',
                            // borderWidth: 3,
                            // // paddingVertical: 70
                        }}>
                            <FlatList
                                data={dummy_data}
                                renderItem={({ item }) => <FacilityCard
                                    facilityImage={item.facilityImage}
                                    facilityText={item.facilityText}
                                />}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}

                                contentContainerStyle={{
                                    // alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingBottom: 10
                                }}
                            />
                        </View>

                        <Text style={{
                            fontFamily: FONTS.Bold,
                            fontSize: 25,
                            color: "#00000080",
                            textAlign: 'left',
                            marginVertical: 15,
                            paddingHorizontal: 15
                        }}>{t("Description")}</Text>

                        <Text style={{
                            textAlign: 'left',
                            fontFamily: FONTS.Medium,
                            fontSize: 16,
                            color: '#00000080',
                            paddingHorizontal: 15
                        }}>{t("Detail")}</Text>

                        <View style={{
                            height: 90,
                            // marginBottom: 30,
                            borderTopRightRadius: 20,
                            backgroundColor: 'white',
                            width,
                            padding: 20,
                            borderTopLeftRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                            alignItems: 'center',
                            alignSelf: 'flex-end'
                            // borderWidth: 3,
                            // borderColor: 'red'
                            // position: 'absolute',
                            // bottom: 0
                        }}>
                            <View>
                                <Text style={{
                                    color: '#00000099',
                                    fontFamily: FONTS.Bold,
                                    fontSize: 15,
                                    textAlign: 'left'
                                }}>{t("Price")}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 7
                                }}>
                                    <Text style={{
                                        fontFamily: FONTS.Bold,
                                        fontSize: 25,
                                        color: '#00000099'
                                    }}>{t("Night")}</Text>
                                    <Text style={{
                                        fontFamily: FONTS.Bold,
                                        fontSize: 25,
                                        color: '#00000099'
                                    }}>180/</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#36BFFA',
                                    borderRadius: 8,
                                    height: 55,
                                    width: 187,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={_ => {
                                    props.navigation.navigate('Select');
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.Bold,
                                    fontSize: 20,
                                    color: 'white'
                                }}>{t("Book now")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}