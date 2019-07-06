import React, { Component } from 'react';
import { View , TextInput ,StyleSheet ,Text } from 'react-native';
import Input from '../defaultUI/Input';
import ButtonUI from '../defaultUI/Button';
import DefaultButton from '../defaultUI/DefaultButton';
import Icon from 'react-native-vector-icons/Ionicons';

const BLUE ='#428AF8';
const BG_COLOR='#1f52a3'


export default class Login extends Component {
    state={
        authenticUser:{ email:'sabin@gmail.com' , password:'p@ssw0rd21' },
        email:'',
        password:''
    }

    handleTextInput= ( key ,event ) =>{
        this.setState({
            [key]:event
        });
    }

    handleOnClick=( navigation )=>{
        console.log('navigatio object',navigation)
        const { email , password } = this.state.authenticUser;  
       if( this.state.email == email && this.state.password == password ){
           navigation.navigate('Dashboard') ;
       } else {
        navigation.navigate( 'Dashboard') ;
       }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
               <View style={styles.headingStyle}>
               <Text style={styles.textStyle}>
                Book Shelf   <Icon name="ios-book" size={30} color="#fff" />
               </Text></View>
                <View style={styles.loginStyle}>
                   <TextInput placeholder='Email'  selectionColor={ BLUE } onChangeText={ ( event )=> this.handleTextInput('email', event ) } style={styles.textInputStyle}  />
                   <TextInput placeholder='Password' secureTextEntry={true}   onChangeText={ ( event )=> this.handleTextInput( 'password',event ) } style={styles.textInputStyle} />
                   <View style={styles.buttonStyle}>
                   <DefaultButton lable="Login" style={styles.defaultButton} handleLogin = {()=> this.handleOnClick( navigation ) }/>
                   </View>
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:BG_COLOR,
        flexDirection:'column'
    },
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'center'
    },
    headingStyle:{
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection:'column',
        height:'30%'
    },
    textInputStyle:{
        borderBottomColor:'#eee',
        borderBottomWidth:2,
        padding:4
    },
    textStyle:{
        color:'#fff',
        fontSize:35,
        height:'70%'
    },
    loginStyle:{
       backgroundColor:'white' ,
       width:'80%',
       height:230,
       padding:20,
       borderRadius:30,
       justifyContent:'space-around',
    },
    defaultButton:{
        width:'80%',
        height:50,
        backgroundColor:'#0e3069',
        justifyContent:'center',
        borderRadius:50
    }
})
