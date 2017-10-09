import React, { Component } from 'react';
import { ToastAndroid, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm1 extends Component{
    render() {
        return(
                <View stylez={styles.container}>
                    <StatusBar 
                    barStyle="light-content"
                    />
                    <TextInput
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                     <Text 
                     
                     style={styles.Signup} >
                        No Account? Sign up here.
                    </Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10
    },
    Signup:{
        height: 40,
        marginBottom: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginLeft: 90,
        marginTop: 10

    },
    buttonContainer:{
        backgroundColor: 'yellowgreen',
        paddingVertical: 15,
        
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',


    }
    
});