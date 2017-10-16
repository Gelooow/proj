import React, { Component } from 'react';
import { ToastAndroid, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class SignUpForm extends Component{
    render() {
        return(
                <View stylez={styles.container}>
                    <StatusBar 
                    barStyle="light-content"
                    />
                    <TextInput
                    placeholder="username"
                    placeholderTextColor="silver"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="password"
                    placeholderTextColor="silver"
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                     onSubmitEditing={() => this.emailaddressInput.focus()}
                    />
                    <TextInput
                    placeholder="email address"
                    placeholderTextColor="silver"
                    returnKeyType="next"
                    keyboardType="email-address"
                    ref={(input) => this.emailaddressInput = input}
                     onSubmitEditing={() => this.contact.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />

                    <TextInput
                    placeholder="Contact number"
                    placeholderTextColor="silver"
                    keyboardType="phone-pad"
                    returnKeyType="go"
                    ref={(input) => this.contact = input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>

                     <TouchableOpacity>
                     <Text style={styles.Signup} >
                        Already have an Account? Click here.
                    </Text>
                   
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 45,
        backgroundColor: 'white',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10,
        width: 320,
         marginLeft: 20,

        padding:10, 
        height:45, 
        overflow:'hidden',
        borderRadius: 7
       // marginTop:50
    },
    Signup:{
        height: 40,
        marginBottom: 10,
        color: 'lightgreen',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 10

    },
    buttonContainer:{
        backgroundColor: 'black',
        paddingVertical: 15,
        width: 320,
         marginLeft: 20,

        padding:10, 
        height:45, 
        overflow:'hidden',
        borderRadius: 20
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',


    }
    
});