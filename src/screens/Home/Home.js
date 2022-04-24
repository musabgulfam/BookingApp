import React from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    SafeAreaView
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { FONTS } from "../../constants";
import { SearchBar } from "./SearchBar";
import { Card } from "./Card";

const { height } = Dimensions.get('window');

export function Home(props){

    const { t } = useTranslation();

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
                    textAlign: 'center',
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

            <ScrollView 
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
                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />
                </View>

                <View style={{
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
                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />

                    <Card navigation={props.navigation} />
                </View>
            </ScrollView>

        </View>
    );
}