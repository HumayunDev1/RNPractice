import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const ProductCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('image pressed');
          }}>
          <Image style={styles.image} source={props.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.addIcon}>
        <TouchableOpacity
          onPress={() => {
            console.log('i am pressed');
          }}>
          <Icon
            style={{color: 'black', alignSelf: 'center'}}
            size={25}
            name="md-add"
          />
        </TouchableOpacity>
      </View>
      {props.newArrival === true ? (
        <Image
          style={{width: 31, height: 20, left: 2}}
          source={require('../Pictures/new.png')}
        />
      ) : null}
      {props.sale === true ? (
        <Image
          style={styles.saleImage}
          source={require('../Pictures/sale.png')}
        />
      ) : null}
      {props.sale === true ? (
        <View style={styles.price2}>
          <Text style={{color: '#CF364C', fontSize: 12, fontWeight: '600'}}>
            {props.price}
          </Text>
          <Text style={styles.title2}>{props.price2}</Text>
        </View>
      ) : (
        <View style={styles.price}>
          <Text style={styles.title}>{props.price}</Text>
        </View>
      )}
      <View style={styles.productNameContainer}>
        <Text style={{color: '#111111', fontWeight: '600'}}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 16 - 16 - 8 - 8) / 3,
    height: 176,
    marginBottom: 24,
    //backgroundColor: 'pink',
  },
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
  addIcon: {
    backgroundColor: '#FFFFFF',
    right: 8,
    bottom: 72,
    width: 32,
    height: 32,
    borderRadius: 32,
    position: 'absolute',
    justifyContent: 'center',
  },
  price: {
    height: 16,
    width: 93,
    top: 120,
    left: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  price2: {
    height: 16,
    width: 93,
    top: 120,
    left: 0,
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15.6,
    color: '##111111',
  },
  title2: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: '#737373',
    textDecorationLine: 'line-through',
    textAlign: 'right',
    left: 11,
  },
  productNameContainer: {
    top: 139,
    width: 109,
    height: 35,
    position: 'absolute',
  },
  saleImage: {
    resizeMode: 'contain',
    width: 50,
    height: 20,
    top: 5,
    left: 5,
  },
});

export default ProductCard;
