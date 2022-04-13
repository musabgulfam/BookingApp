import React, {
    useState
} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import { useTranslation } from 'react-i18next'
import '../../../i18n'
import { FONTS } from "../../constants";

export function Authentication(props) {

    const { t } = useTranslation();

    const [selectedTab, setSelectedTab] = useState('Login');

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>

            {/* Header tab */}

            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                marginTop: 10,
                flex: 0.5
            }}>
                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        borderBottomColor: selectedTab === "Login" ? '#36BFFA' : null,
                        borderBottomWidth: selectedTab === "Login" ? 3 : null
                    }}
                    onPress={_ => {
                        setSelectedTab("Login")
                    }}
                >
                    <Text style={{
                        fontFamily: selectedTab === "Login" ? FONTS.Bold : FONTS.Medium,
                        fontSize: 20,
                        color: selectedTab === "Login" ? '#36BFFA' : 'black'
                    }}>{t("Login")}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderBottomColor: selectedTab === "Signup" ? '#36BFFA' : null,
                        borderBottomWidth: selectedTab === "Signup" ? 3 : null
                    }}
                    onPress={_ => {
                        setSelectedTab("Signup")
                    }}
                >
                    <Text style={{
                        fontFamily: selectedTab === "Signup" ? FONTS.Bold : FONTS.Medium,
                        fontSize: 20,
                        color: selectedTab === "Signup" ? '#36BFFA' : 'black'
                    }}>{t("Signup")}</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 8.8,
                paddingTop: selectedTab !== "Signup" ? 45 : 50
            }}>

                {
                    selectedTab === "Signup" ? (
                        <>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 70,
                            }}>{t("Welcome")}</Text>

                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 20,
                                color: '#00000099'
                            }}>{t("Enter your information below")}</Text>

                            <View style={{
                                flex: 1,
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                }}>
                                    <View style={{
                                        marginTop: 30,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={name}
                                            onChangeText={text => setName(text)}
                                            placeholder={t("Full name")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>

                                    <View style={{
                                        marginTop: 45,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={email}
                                            onChangeText={text => setEmail(text)}
                                            placeholder={t("Email")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>

                                    <View style={{
                                        marginTop: 45,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={password}
                                            onChangeText={text => setPassword(text)}
                                            placeholder={t("Password")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>

                                    <View style={{
                                        marginTop: 45,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={confirmPassword}
                                            onChangeText={text => setConfirmPassword(text)}
                                            placeholder={t("Confirm Password")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                }}>
                                    <Image
                                        source={require('../../../assets/pictures/signup.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            width: 375,
                                            height: 163
                                        }}
                                    />
                                </View>
                            </View>
                        </>
                    ) : (
                        <>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 70,
                            }}>{t("Welcome back")}</Text>

                            <View style={{
                                flex: 1,
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                }}>

                                    <View style={{
                                        marginTop: 45,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={email}
                                            onChangeText={text => setEmail(text)}
                                            placeholder={t("Email")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>

                                    <View style={{
                                        marginTop: 45,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={password}
                                            onChangeText={text => setPassword(text)}
                                            placeholder={t("Password")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#BDBDBD',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require('../../../assets/pictures/login.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            width: 175,
                                            height: 204
                                        }}
                                    />
                                </View>
                            </View>
                        </>
                    )
                }

            </View>

            <TouchableOpacity 
                onPress={_ => {
                    console.log('Icon clicked...');
                }}
                style={{
                    position: 'absolute',
                    bottom: 55,
                    right: 20,
                    width: 59,
                    height: 59,
                    zIndex: 2
                }}
            >
                
                    <Image 
                        source={require('../../../assets/icon/arrow_button.png')}
                        style={{
                            resizeMode: 'contain',
                            width: 59,
                            height: 59
                        }}
                    />
                
            </TouchableOpacity>

            <View style={{
                backgroundColor: '#CCCCCC',
                flex: 0.7
            }}>

            </View>

        </SafeAreaView>
    );
}