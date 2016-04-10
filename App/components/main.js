
import React, {
  Text,
  TextInput,
  View,
  Component,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import * as api from '../utils/api'
import Dashboard from './dashboard'
import _ from 'ramda'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      characterName: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      characterName: event.nativeEvent.text
    });
  }

  handleSubmit(){
    this.setState({
      isLoading: true
    });
    let character;
    api.getCharacterBio(this.state.characterName)
          .then((res) => {
              if(_.isNil(res.data) || _.isEmpty(res.data.results)){
                this.setState({
                  isLoading: false,
                  error: 'No character found'
                });
              }else{
                character = res.data.results[0];
                this.props.navigator.push({
                  backButtonTitle: 'Back',
                  title: character.name || 'Select an Options',
                  component: Dashboard,
                  passProps: {characterInfo:character}
                });
                this.setState({
                  isLoading: false,
                  error: false,
                  characterName: ''
                });
              }
          })
  }

  render(){
    let showErr = (
        this.state.error ? <Text style={styles.buttonText}> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Superhero</Text>
        <TextInput
            style={styles.searchInput}
            value={this.state.characterName}
            onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
            <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#111"
            size="large"></ActivityIndicatorIOS>
        {showErr}
      </View>
    );
  }
}
