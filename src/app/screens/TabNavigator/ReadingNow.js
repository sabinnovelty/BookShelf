import React, { Component } from 'react';
import { View , Text , StyleSheet ,Image ,ScrollView } from 'react-native';
import * as data from '../../books.json';
import Card from '../../component/card/Card'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity , TouchableHighlight } from 'react-native-gesture-handler';

export default class ReadingNow extends Component {
    // static navigationOptions = {
    //     title: 'Reading Now',
    //     headerStyle:{
    //         backgroundColor:'#f4511e'
    //     }
    //   };

      renderReadingBooks = books=>{

          return books.map( ( b , i) =>{
              return <Card key={i} book={b} />
          })
      }

    render() {
        console.log( 'books',data);
        const { books } = data;
        let readingNow = books.filter( b =>( b.isReading ) );
        console.log(readingNow,'ReadingNow scren')
        return (
            <View style={styles.container}>
                 { this.renderReadingBooks( readingNow )}

            <View style={styles.scrollView} >
                <Text style={[{textAlign:'center'},styles.textStyle]}>All-Time Bestseller</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.bookView}>
                        <Image source={require('../../books-images/2.jpeg')} style={{width:200 , height:200 ,padding:5 ,resizeMode:'contain'}} />
                        <Image source={require('../../books-images/3.jpeg')} style={{width:200 , height:200 ,padding:5 ,resizeMode:'contain'}} />
                        <Image source={require('../../books-images/4.jpeg')} style={{width:200 , height:200 ,padding:5 ,resizeMode:'contain'}} />
                        <Image source={require('../../books-images/5.jpeg')} style={{width:200 , height:200, padding:5 ,resizeMode:'contain'}} />
                    </View>
                </ScrollView>
                <View style={styles.detail}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookDetails',{
                        books:books
                    })} style={styles.detail}>
                        <Text style={styles.textStyle}>See All</Text>
                        <Ionicons name="ios-play" size={30} style={{marginLeft:20}}/>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    listStyle:{
        padding:20,
        width:'90%',
        height:150,
        backgroundColor:'#f7f8fa',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    scrollView:{
        width:'100%',
        height:200,
        borderWidth:2,
        borderColor:'#dddddd',
        justifyContent:'center'
    },
    bookView:{
        height:200,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textStyle:{
        fontWeight:'bold',
        fontFamily:'italic'
    },
    detail:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
        
    }
})
