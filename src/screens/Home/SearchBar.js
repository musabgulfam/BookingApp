import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { FONTS } from "../../constants";

export function SearchBar(props){

    const { t } = useTranslation();

    return (
        <TouchableOpacity
            style={{
                borderRadius: 8,
                backgroundColor: '#E5E5EA',
                height: 48,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center'
            }}
        >
            {/* <View>
                <Text style={{
                    color: '#8A8A8E',
                    fontSize: 16,
                    fontFamily: FONTS.Regular,
                }}>{t("Where are you going?")}</Text>
            </View> */}
            <TextInput 
                placeholder={t("Where are you going?")}
                placeholderTextColor={'#8A8A8E'}
                style={{
                    fontSize: 16,
                    fontFamily: FONTS.Regular,
                    width: '90%',
                    height: 48,
                    color: 'black'
                }}
            />
            <View>
                <Image 
                    source={require('../../../assets/icon/home/search.png')}
                    style={{
                        width: 20.57,
                        height: 20.57,
                        resizeMode: 'contain'
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}