
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

const Series = ({characterInfo, navigator}) => {
  let items = characterInfo.series.items;
  let list = items.map((item, index) => {
    return (
      <SeriesComponent series={item} key={index} navigator={navigator}/>
    )
  });
  return (
    <ScrollView style={styles.container}>
      {list}
    </ScrollView>
  );
}

class SeriesComponent extends Component{

  goToSeriesInfo = () => {
    let seriesArray = this.props.series.resourceURI.split('/');
    let seriesId = seriesArray[seriesArray.length - 1];
    let series;
    api.getSeriesInfo(seriesId)
          .then((res) => {
            series = res.data.results[0];
            this.props.navigator.push({
              component: InfoDetails,
              backButtonTitle: 'Back',
              title: 'Series Info',
              passProps: {infoObject: series}
            });
          })
  }

  render(){
    let {series} = this.props;
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.rowTitle}
            onPress={this.goToSeriesInfo}
          >{series.name}</Text>
        </View>
        <Separator />
      </View>
    )
  }
};

Series.propTypes = {
  characterInfo: PropTypes.object.isRequired
}

export default Series;
