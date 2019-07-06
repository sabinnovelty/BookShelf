import React from 'react';
import { View , Text , StyleSheet ,Image } from 'react-native';

export default function Card( props ) {
    console.log(props,'card');
     const { title , book } = props;
    return (
      <View style={ [ styles.container ,props.style] }>
        {/* <Text>{ title ? title : null }</Text> */}
              <View style={styles.imageStyle}>
                   <Image style={styles.book} source={require('../../books-images/book.jpeg')} />
                </View>

            <View> 
                <Text> { book.title } </Text>
            </View> 
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:170,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#f7f8fa'

    },
    book:{
        width:100,
        height:140
    },
    bookTitle:{
        fontWeight:'bold'
    }
})
