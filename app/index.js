/**
 * @flow
 */
import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Order from './containers/Order'
import Menu from './containers/Menu'
import Home from './containers/Home'
import { StackNavigator } from 'react-navigation';

export const App = StackNavigator({
    Home: { 
      screen: Home ,
      navigationOptions: {
            title: 'Welcome',
      },
    },
    Order: { 
      screen: Order ,
      navigationOptions: {
            title: 'Order',
            header: {
                style: {
                    backgroundColor:'wheat'
                },
            },
      },
      
    },
    Menu: { 
      screen: Menu ,
      navigationOptions: {
            title: 'Our Coffee',
      },
    },
});