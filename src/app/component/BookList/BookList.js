import React, { Component } from 'react'
import { View, Text, StyleSheet ,Image ,ScrollView } from 'react-native'

export default class BookList extends Component {
  renderBestSellingBooks = books => {
    return (
      <View style={styles.bookDisplay}>
        {books.map((book, index) => {
          return (
            <ScrollView>
              <View style={styles.bookStyle}>
                    <Image source={require('../../books-images/2.jpeg')} style={{resizeMode:'contain'}}/>
                    <Text>{book.author}</Text>
              </View>
              <View style={styles.bookStyle} >
                <Image source={require('../../books-images/2.jpeg')}  style={{resizeMode:'contain'}}/>
                <Text>{book.author}</Text>
              </View>
              </ScrollView>
          )
        })} 
      </View>
    )
  }

  render () {
    const { books } = this.props;
    console.log('Book list',books)
    return (
      
          <View style={styles.container}>{this.renderBestSellingBooks(books)}</View>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bookDisplay: {
    width: '90%',
    height: 200,
    borderWidth: 2,
    borderColor: '#dddddd'
  },
  bookStyle:{
      flexDirection:'row',
      justifyContent:'space-between'
  }
})
