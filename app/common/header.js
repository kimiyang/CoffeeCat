/*
 * @flow
 */
import React, { Component } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import {
    Container, Header, Title,
    Button, Text, Item, Input, Icon
} from 'native-base';



// Styles
// import styles from './Styles/RootContainerStyle'

class SearchHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon name="search" />
                    <Input placeholder="Search" />
                    <Icon active name="people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        )
    }
}

export default SearchHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
