/*
 * @flow
 */
import React, { Component } from 'react'
import { StatusBar, StyleSheet, } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
    Footer, FooterTab,
    Button, Text, Icon
} from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';


// Styles
// import styles from './Styles/RootContainerStyle'

class FooterTabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const resetActionHome = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        })
        
        const resetActionOrder = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Order'})
            ]
        })
        const resetActionSetting = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Menu'})
            ]
            })
        return (
            <Footer>
                <FooterTab>
                    <Button active={this.props.activeTab === 1} onPress={() => {
                        this.props.navigation.dispatch(resetActionHome)
                    }}>
                        <FIcon name="user" size={30}/>
                        <Text>Home</Text>
                    </Button>
                    <Button active={this.props.activeTab === 2} onPress={() => {
                        this.props.navigation.dispatch(resetActionOrder)
                    }}>
                        <FIcon name="coffee" size={30}/>
                        <Text>Order</Text>
                    </Button>
                    
                    <Button active={this.props.activeTab === 3} onPress={() => {}}>
                        <FIcon name="cog" size={30}/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

export default FooterTabs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
