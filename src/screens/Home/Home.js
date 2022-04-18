import React from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions
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
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: FONTS.Medium,
                    marginBottom: 30,
                    marginTop: 10,
                }}>{t("Welcome")}</Text>
            </View>
            <View style={{
                paddingHorizontal: 16,
            }}>
                <Text style={{
                    color: 'black',
                    // textAlign: 'center',
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

            <ScrollView style={{
                paddingTop: 10,
                paddingHorizontal: 5,
            }}>
                <Card />

                <Card />

                <Card />
            </ScrollView>

        </View>
    );
}