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
    Image,
    Dimensions
} from 'react-native'
import { useTranslation } from 'react-i18next'
import '../../../i18n'
import { FONTS } from "../../constants";
import { useStoreActions } from "easy-peasy";

const {
    width,
    height
} = Dimensions.get('window');

export function Authentication(props) {

    const { t } = useTranslation();

    const [selectedTab, setSelectedTab] = useState('Login');

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const signup = useStoreActions(actions => actions.signup);

    const login = useStoreActions(actions => actions.login);

    const createUser = useStoreActions(actions => actions.createUser)

    return (
        <SafeAreaView style={{
            height,
            backgroundColor: '#E5E5E5'
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
                        borderBottomWidth: selectedTab === "Login" ? 3 : null,
                    }}
                    onPress={_ => {
                        setSelectedTab("Login")
                    }}
                >
                    <Text style={{
                        fontFamily: selectedTab === "Login" ? FONTS.Bold : FONTS.Medium,
                        fontSize: 20,
                        color: selectedTab === "Login" ? '#36BFFA' : 'black',
                        textAlign:'right'
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
                        color: selectedTab === "Signup" ? '#36BFFA' : 'black',
                        textAlign: 'right'
                    }}>{t("Signup")}</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 8.8,
                paddingTop: selectedTab !== "Signup" ? 45 : 10,
                backgroundColor: '#E5E5E5'
            }}>

                {
                    selectedTab === "Signup" ? (
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 70,
                                color: 'black'
                            }}>{t("Welcome")}</Text>

                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 20,
                                color: '#00000099'
                            }}>{t("Enter your information below")}</Text>

                            <View style={{
                                flex: 1,
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    justifyContent: 'space-evenly',
                                    flex: 1.6
                                }}>
                                    <View style={{
                                        // marginTop: 10,
                                        paddingHorizontal: 20
                                    }}>
                                        <TextInput
                                            value={name}
                                            onChangeText={text => setName(text)}
                                            placeholder={t("Full name")}
                                            style={{
                                                fontFamily: FONTS.Medium,
                                                fontSize: 20,
                                                color: '#0000004D',
                                                textAlign: 'right',
                                                borderBottomWidth: 2,
                                                borderBottomColor: '#0000004D',
                                            }}
                                            placeholderTextColor={"#0000004D"}
                                        />
                                    </View>

                                    <View style={{
                                        // marginTop: 30,
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
                                            placeholderTextColor={"#0000004D"}
                                        />
                                    </View>

                                    <View style={{
                                        // marginTop: 30,
                                        paddingHorizontal: 20,
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
                                            placeholderTextColor={"#0000004D"}
                                        />
                                    </View>

                                    <View style={{
                                        // marginTop: 30,
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
                                            placeholderTextColor={"#0000004D"}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    flex: 0.8
                                }}>
                                    <Image
                                        source={require('../../../assets/pictures/signup.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            width: 375,
                                            height: 140
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        <>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONTS.Medium,
                                fontSize: 70,
                                color: 'black'
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
                                            placeholderTextColor={"#0000004D"}
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
                                            placeholderTextColor={"#0000004D"}
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
                                            height: 140
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
                    if(selectedTab === "Signup"){
                        signup({
                            email,
                            password
                        })
                            .then(user => {
                                console.log('user: ', user);
                                createUser({
                                    name,
                                    email,
                                    id: user.uid
                                })
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    }
                    else{
                        login({
                            email,
                            password
                        })
                            .then(user => {
                                console.log('Signed in user: ', user);
                                props.navigation.navigate('Main');
                            })
                            .catch(e => {
                                console.error(e);
                            })
                    }
                }}
                style={{
                    position: 'absolute',
                    bottom: 35,
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
                height: 65
            }} />

        </SafeAreaView>
    );
}