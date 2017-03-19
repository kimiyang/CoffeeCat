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

var coffeeCategories = [
    {
        name: '美式咖啡',
        description: 'recommend',
        img: require('../images/am.jpg'),
    },
    {
        name: 'Sweet',
        description: 'Most advanced coffee',
        img: require('../images/front-page-icon.png'),
    },
    {
        name: 'Diet',
        description: 'Not so sweet',
        img: require('../images/front-page-icon.png'),
    },
]

class Order extends Component {
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
                
                <SearchHeader />
                <Image source={require('../images/c2.jpg')} style={styles.backgroundImage}>
                <Content>
                    
                        <View style={{}}>
                            <Text style={{fontSize: 10, textAlign:'center'}}>Our Coffee is 100% homemade and with highest quality</Text>
                            <List dataArray={coffeeCategories} renderRow={(item) =>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square size={100} source={item.img} style={{borderRadius: 25}}/>
                                    </Left>
                                    <Body>
                                        <Text style={{color: 'brown', fontFamily: 'Iowan Old Style'}}>{item.name}</Text>
                                        <Text note>{item.description}</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => navigate('Menu')}>
                                            <Text>View</Text>
                                        </Button>
                                    </Right>
                                </ListItem>  
                            } />
                        </View>
                    
                    
                    
                </Content>
                </Image>

                <MyFooter navigation={this.props.navigation} activeTab={2}/>
            </Container>
        )
    }
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        width: 400,
        height: 600,
  }
})
