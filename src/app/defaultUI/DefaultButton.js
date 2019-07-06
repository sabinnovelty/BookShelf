import React from 'react';
import { TouchableHighlight ,TouchableNativeFeedback, Platform, StyleSheet ,View ,Text } from 'react-native';

const DefaultButton = props =>{
    return (
        <TouchableHighlight onPress={ props.handleLogin } {...props } style={[ styles.defaultButton,props.style ]} >
            <Text style={styles.textStyle}> { props.lable } </Text>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    defaultButton:{
        width:'80%',
        backgroundColor:'#eee',
        justifyContent:'center'
    },
    textStyle:{
        color:'#fff',
        padding:60,
        fontWeight:'bold'
    }
});

export default DefaultButton;