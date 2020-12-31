import React, { Component, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import { withTheme } from 'react-native-elements';
import { styles } from './loginStylesheet';

class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        styles: styles
    }

    render() {
        const style = this.state.styles
        return (
            <View style={style.container}>
                <Image source={require('./images/SESLogo.png')} />
                <View style={style.inputView}>
                    <TextInput
                        style={style.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={style.inputView}>
                    <TextInput
                        style={style.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity>
                    <Text style={style.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.loginBtn}

                >
                    <Text style={style.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.loginText}>Register</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


export default LoginPage;