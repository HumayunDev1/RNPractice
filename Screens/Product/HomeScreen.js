import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import ProductCard from '../../components/ProductCard';

const HomeScreen = () => {
  const fruits = useSelector(state => state.fruit.availableFruits);
  const vegetables = useSelector(state => state.vegetables.availableVegetables);
  const greens = useSelector(state => state.greens.availableGreens);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>Fruits</Text>
      </View>
      <View style={styles.categoryContainer}>
        {fruits.map(i => (
          <ProductCard
            key={i.id}
            title={i.title}
            image={i.imageUrl}
            price={i.price}
            price2={i.price2}
            newArrival={i.newArrival}
            sale={i.sale}
          />
        ))}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>Vegetables</Text>
      </View>
      <View style={styles.categoryContainer}>
        {vegetables.map(i => (
          <ProductCard
            key={i.id}
            title={i.title}
            image={i.imageUrl}
            price={i.price}
            price2={i.price2}
            newArrival={i.newArrival}
            sale={i.sale}
          />
        ))}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>Greens</Text>
      </View>
      <View style={styles.categoryContainer}>
        {greens.map(i => (
          <ProductCard
            key={i.id}
            title={i.title}
            image={i.imageUrl}
            price={i.price}
            price2={i.price2}
            newArrival={i.newArrival}
            sale={i.sale}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    //backgroundColor: 'orange',
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 17,
    height: 23,
    marginBottom: 13,
    //backgroundColor: 'red',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 23.4,
    color: '#111111',
  },
});

export default HomeScreen;
