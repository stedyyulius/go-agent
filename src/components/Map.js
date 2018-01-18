import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import {
  StyleSheet
} from 'react-native'

class Map extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <MapView
        style={styles.map}
        region={{
          latitude: -6.180104,
          longitude: 106.82198,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map)
