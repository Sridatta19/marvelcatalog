
import React, {
  PropTypes,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'black'
  },
  description: {
    alignSelf: 'center',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
    marginLeft: 5,
    marginRight: 5
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 250,
    width: 250,
    marginTop: 75,
    alignSelf: 'center'
  }
});

const InfoDetails = ({infoObject}) => {
  console.log("API RESPONSE EVENT DETAILS", infoObject);
  let source;
  if(infoObject.thumbnail){
      source = {uri: infoObject.thumbnail.path + '.' + infoObject.thumbnail.extension};
  }else{
      source = require('../images/notfound.jpg');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source}/>
      <Text style={styles.name}> {infoObject.title} </Text>
      <Text style={styles.description}> {infoObject.description} </Text>
    </View>
  )
}

InfoDetails.propTypes = {
  infoObject: PropTypes.object.isRequired
}

export default InfoDetails;
