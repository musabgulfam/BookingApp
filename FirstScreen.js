import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native'
import './i18n'
import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';

function SecondScreen(props){

  const { t } = useTranslation();

  return (
    <SafeAreaView style={{
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
    }}>
      <Text style={{
        fontFamily: 'Tajawal-Medium',
        fontSize: 60,
        textAlign: 'left'
      }}>{t('Welcome to React')}</Text>
      <Text>Random english text</Text>
      <Button 
        title={"Nav"}
        onPress={_ => {
            props.navigation.navigate('Second');
        }}
      />
    </SafeAreaView>
  );
}

export default SecondScreen;