/*
 * @flow
 */
import React, { Component } from 'react'
import { StatusBar, StyleSheet, Image } from 'react-native'
import {
    Container, Header, Title, Content, Footer, FooterTab,
    Button, Left, Right, Body, Text, Item, Input, Fab, View,
    Card, CardItem, Thumbnail, Icon
} from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../common/header'
import MyFooter from '../common/footer'


// Styles
// import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Container>
                <SearchHeader />
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../images/front-page-icon.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image/>
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem style={{ justifyContent: 'space-around' }}>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>
                   </Card>
                </Content>
                <View>
                     <Fab
                        active={this.state.active}
                        direction="up"
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                    </Fab>
                </View>
                <MyFooter />
            </Container>
        )
    }
}

export default RootContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
