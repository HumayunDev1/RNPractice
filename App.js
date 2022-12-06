import React from 'react';

import {legacy_createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import fruitReducer from './store/reducers/fruits';
import vegetableReducer from './store/reducers/vegetables';
import greensReducer from './store/reducers/greens';

import HomeScreen from './Screens/Product/HomeScreen';

const rootReducer = combineReducers({
  fruit: fruitReducer,
  vegetables: vegetableReducer,
  greens: greensReducer,
});
const store = legacy_createStore(rootReducer);

const app = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default app;
