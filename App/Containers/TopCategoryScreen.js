import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, PropTypes, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Examples, NavigationBar, Title, Icon } from '@shoutem/ui'
import { connectStyle } from '@shoutem/theme';
import Drawer from 'react-native-drawer'
import DrawerPanel from '../Components/DrawerPanel'
const bg = require('../Images/bg1.png')
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TopCategoryScreenStyle'

class TopCategoryScreenScreen extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        acceptDoubleTap
        panThreshold={0.08}
        openDrawerOffset={100}
        tapToClose
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        content={<DrawerPanel closeDrawer={this.closeControlPanel}/>}
        >
        <Image
          source={bg}
          style={{ position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0 }}
        >
          <NavigationBar
            styleName='clear'
            leftComponent={
              <TouchableOpacity onPress={this.openControlPanel}>
                <Icon name="sidebar" />
              </TouchableOpacity>
            }
            centerComponent={<Title>Our products</Title>}
          />
        </Image>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopCategoryScreenScreen)
