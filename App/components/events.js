
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  ScrollView,
  PropTypes
} from 'react-native'
import Separator from './helpers/separator'
import InfoDetails from './infoDetails'
import * as api from '../utils/api'

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16,
    alignSelf: 'center'
  }
});

const Events = ({characterInfo, navigator}) => {
  let items = characterInfo.events.items;
  let list = items.map((item, index) => {
    return (
      <Event event={item} key={index} navigator={navigator}/>
    )
  });
  return (
    <ScrollView style={styles.container}>
      {list}
    </ScrollView>
  );
}

class Event extends Component{

  goToEventInfo = () => {
    let eventArray = this.props.event.resourceURI.split('/');
    let eventId = eventArray[eventArray.length - 1];
    let event;
    api.getEventInfo(eventId)
          .then((res) => {
            event = res.data.results[0];
            this.props.navigator.push({
              component: InfoDetails,
              backButtonTitle: 'Back',
              title: 'Event Info',
              passProps: {eventInfo: event}
            });
          })
  }

  render(){
    let {event} = this.props;
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.rowTitle}
            onPress={this.goToEventInfo}
          >{event.name}</Text>
        </View>
        <Separator />
      </View>
    )
  }
};

Events.propTypes = {
  characterInfo: PropTypes.object.isRequired
}

export default Events;
