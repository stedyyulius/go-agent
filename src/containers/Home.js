import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'

import Map from '../components/Map'

class Home extends Component{
  constructor(props){
    super(props)
    this.state= {
      latitude: 0,
      longitude: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>
          latitude = {this.state.latitude}, longitude = {this.state.longitude}
        </Text>
        {/*<Map />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
