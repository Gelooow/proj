import React, { Component } from 'react';
import { ToastAndroid, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';


export default class LoginForm1 extends Component{

    onButtonPress(){
        this.props.navigator.push({
            id: "Home"
        }

        );

    }



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
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="password"
                    placeholderTextColor="silver"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress = {this.onButtonPress.bint(this)}>
                     <Text style={styles.Signup}>No Account? Sign up here.</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                    <Text style = {styles.Signup1}>Forgot your Password? </Text>
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
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
         marginLeft: 20,

        padding:10, 
        height:45, 
        overflow:'hidden',
        borderRadius: 7,
        
    },
    Signup:{
       
        color: 'lightgreen',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginLeft: 10,
      

    },
    Signup1:{
        color: 'lightgreen',
        paddingHorizontal: 10,
        marginLeft: 10,
        marginTop: 5
     
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