/*
 * @flow
 */
import React, { Component } from 'react'
import { StatusBar, StyleSheet, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
    Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Text, Item, Input, Fab, View,
    Card, CardItem, Thumbnail, Icon, ListItem, List
} from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../common/header'
import MyFooter from '../common/footer'


// Styles
// import styles from './Styles/RootContainerStyle'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <Container>

                <Content>
                    <Text>This is your home page</Text>
                    
                </Content>

                <MyFooter navigation={this.props.navigation} activeTab={1}/>
            </Container>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
