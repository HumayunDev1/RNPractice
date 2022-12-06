import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');

const TestCard = props => {
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('image pressed');
        }}>
        <Image
          style={styles.image}
          source={require('../Pictures/apples.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: (width - 16 - 16 - 8 - 8) / 3,
    height: 112,
    position: 'absolute',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#ECEBEB',
  },
  image: {
    width: 93,
    height: 96,
    resizeMode: 'contain',
  },
});

export default TestCard;
