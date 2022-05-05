import React, {
    useEffect
} from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    SafeAreaView,
    FlatList,
    ActivityIndicator
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { FONTS } from "../../constants";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Card, SearchBar } from "../../components";

const { height } = Dimensions.get('window');

export function Home(props){

    const { t } = useTranslation();

    const getHotels = useStoreActions(actions => actions.setHotels);

    const getResorts = useStoreActions(actions => actions.setResorts);

    const resorts = useStoreState(state => state.resorts);

    const hotels = useStoreState(state => state.hotels);

    useEffect(_ => {
        getHotels();
        getResorts()
    }, []);

    return (
        <View style={{
            height: height-75,
            backgroundColor: 'white'
            // justifyContent: 'center',
            // alignItems: 'center'
        }}>
            <SafeAreaView style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: FONTS.Medium,
                    marginBottom: 30,
                    marginTop: 10,
                }}>{t("Welcome")}</Text>
            </SafeAreaView>
            <View style={{
                paddingHorizontal: 16,
            }}>
                <Text style={{
                    color: 'black',
                    textAlign: 'left',
                    fontFamily: FONTS.Medium,
                    fontSize: 23,
                    lineHeight: 30,
                    marginBottom: 11
                }}>{t("Find the best hotels")}</Text>
            </View>
            
            <View style={{
                paddingHorizontal: 16,
                marginBottom: 5
            }}>
                <SearchBar />
            </View>

            {!hotels.length || !resorts.length ? <ActivityIndicator /> : <ScrollView 
                style={{
                    paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontFamily: FONTS.Bold,
                        fontSize: 22,
                        color: "#36BFFA",
                        marginTop: 20
                    }}>{t("Hotels near you")}</Text>
                </View>

                <View style={{
                    paddingHorizontal: 5
                }}>
                    {/* <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} /> */}
                    <FlatList 
                        data={hotels}
                        renderItem={({ item }) => <Card navigation={props.navigation} name={item.name} image={item.photo} />}
                        contentContainerStyle={{
                            paddingBottom: 30
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontFamily: FONTS.Bold,
                        fontSize: 22,
                        color: "#36BFFA",
                    }}>{t("Resorts near you")}</Text>
                </View>

                <View style={{
                    paddingHorizontal: 5
                }}>
                    <FlatList 
                        data={resorts}
                        renderItem={({ item }) => <Card navigation={props.navigation} name={item.name} />}
                        contentContainerStyle={{
                            paddingBottom: 30
                        }}
                    />
                </View>
            </ScrollView>}

        </View>
    );
}