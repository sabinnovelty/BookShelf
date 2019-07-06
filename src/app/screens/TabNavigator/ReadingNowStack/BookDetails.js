import React, { Component } from 'react';
import { View , Text } from 'react-native';
import BookList from '../../../component/BookList/BookList';

export default class BookDetails extends Component {
    static navigationOptions ={
        title:"BookDetails"
    }
    render() {

        const { books } = this.props.navigation.state.params;
        console.log('props Bookdetails',books);
        return (
            <View>
                <Text>Books details component is comming soon.</Text>
                <BookList books ={books } />
            </View>
        )
    }
}
