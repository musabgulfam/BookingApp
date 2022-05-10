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
import { SearchBar, Card } from "../../components";
import { useStoreActions, useStoreState } from "easy-peasy";

const { height } = Dimensions.get('window');

export function Events(props){

    const { t } = useTranslation();

    const getEvents = useStoreActions(actions => actions.setEvents);

    const events = useStoreState(state => state.events);

    useEffect(_ => {
        getEvents()
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
                }}>{t("Exclusive events")}</Text>
            </View>
            
            <View style={{
                paddingHorizontal: 16,
                marginBottom: 5
            }}>
                <SearchBar />
            </View>

            {!events.length? <ActivityIndicator /> : <ScrollView 
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
                    }}>{t("Events near you")}</Text>
                </View>

                <View style={{
                    paddingHorizontal: 5
                }}>
                    {/* <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} /> */}
                    <FlatList 
                        data={events}
                        renderItem={({ item }) => <Card navigation={props.navigation} name={item.name} image={item.photo} info={item} />}
                        contentContainerStyle={{
                            paddingBottom: 30
                        }}
                    />
                </View>

                {/* <View style={{
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontFamily: FONTS.Bold,
                        fontSize: 22,
                        color: "#36BFFA",
                        marginTop: 30
                    }}>{t("Resorts near you")}</Text>
                </View>

                <View style={{
                    paddingHorizontal: 5
                }}>
                    <FlatList 
                        data={resorts}
                        renderItem={({ item }) => <Card navigation={props.navigation} name={item.name} />}
                    />
                </View> */}
            </ScrollView>}

        </View>
    );
}