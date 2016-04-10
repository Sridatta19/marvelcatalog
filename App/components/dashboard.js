
import React, {
  PropTypes,
  Text,
  View,
  Component,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'
import * as api from '../utils/api'
import Events from './events'

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component{

  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }

  goToEvents(){
    this.props.navigator.push({
      component: Events,
      backButtonTitle: 'Back',
      title: 'Events',
      passProps: {characterInfo: this.props.characterInfo}
    })
  }

  render(){
    let {characterInfo} = this.props;
    let imagePath = characterInfo.thumbnail.path + '.' + characterInfo.thumbnail.extension;
    return (
      <View style={styles.container}>
        <Image source={{uri: imagePath}} style={styles.image}></Image>
        <TouchableHighlight
            style={this.makeBackground(0)}
            underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Series </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToEvents.bind(this)}
            underlayColor='#E39EBF'>
            <Text style={styles.buttonText}> View Events </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(2)}
            underlayColor='#9BAAF3'>
            <Text style={styles.buttonText}> View Stories </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Dashboard.propTypes = {
  characterInfo: PropTypes.object.isRequired
}

export default Dashboard
