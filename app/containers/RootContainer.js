/*
 * @flow
 */
import React, { Component } from 'react'
import { StatusBar, StyleSheet, Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, 
    Button, Left, Right, Body, Icon, Text, Item, Input, Fab, View,
    Card, CardItem, Thumbnail} from 'native-base';


// Styles
// import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }

  render () {
    return (
      <Container>
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

        <Content>
            <Card>
                <CardItem bordered>
                    <Left>
                        <Thumbnail />
                        <Body>
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem>
                    <Body>
                        <Image source={{uri: 'https://www.google.com.sg/logos/doodles/2017/st-patricks-day-2017-5654938628653056-res.png'}} style={{resizeMode: 'cover'}} />
                        <Text>
                            //Your text here
                        </Text>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="logo-github" />
                            <Text>1,926 stars</Text>
                        </Button>
                    </Body>
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
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-twitter" />
                </Button>
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-youtube" />
                </Button>
                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>
            </Fab>
        </View>

        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
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
