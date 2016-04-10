
import React, {PropTypes, View,WebView, StyleSheet} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

const Web_View = ({url}) => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: url}}/>
    </View>
  );
};

Web_View.propTypes = {
 url: PropTypes.string.isRequired
};

export default Web_View;
