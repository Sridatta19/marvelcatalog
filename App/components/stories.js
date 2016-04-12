
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

const Stories = ({characterInfo, navigator}) => {
  let items = characterInfo.stories.items;
  let list = items.map((item, index) => {
    return (
      <Story story={item} key={index} navigator={navigator}/>
    )
  });
  return (
    <ScrollView style={styles.container}>
      {list}
    </ScrollView>
  );
}

class Story extends Component{

  goToStoryInfo = () => {
    let storyArray = this.props.story.resourceURI.split('/');
    let storyId = storyArray[storyArray.length - 1];
    let story;
    api.getStoryInfo(storyId)
          .then((res) => {
            story = res.data.results[0];
            this.props.navigator.push({
              component: InfoDetails,
              backButtonTitle: 'Back',
              title: 'Story Info',
              passProps: {infoObject: story}
            });
          })
  }

  render(){
    let {story} = this.props;
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.rowTitle}
            onPress={this.goToStoryInfo}
          >{story.name}</Text>
        </View>
        <Separator />
      </View>
    )
  }
};

Stories.propTypes = {
  characterInfo: PropTypes.object.isRequired
}

export default Stories;
