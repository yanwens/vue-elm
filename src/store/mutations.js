import Vue from 'vue';
import {RECEIVE_ADDRESS,
  RECEIVE_FOOD_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREASE_FOOD_COUNT,
  DEINCREASE_FOOD_COUNT,
  CLEAR_CART} from './actions-type'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  [RECEIVE_FOOD_CATEGORY] (state, {foodCategory}) {
    state.foodCategory = foodCategory;
  },
  [RECEIVE_SHOPS] (state, {shops}){
    state.shops = shops;
  },
  [RECEIVE_USER] (state, {user}){
    state.user = user;
  },
  [RECEIVE_GOODS] (state, {goods}){
    state.goods = goods;
  },
  [RECEIVE_RATINGS] (state, {ratings}){
    state.ratings = ratings;
  },
  [RECEIVE_INFO] (state, {info}){
    state.info = info;
  },
  [INCREASE_FOOD_COUNT] (state,{food}) {
    if (food.count){
      food.count++;
    } else {
      Vue.set(food, 'count', 1);
      state.cartFoods.push(food);
    }
  },
  [DEINCREASE_FOOD_COUNT] (state,{food}) {
    food.count--;
    if (food.count === 0){
      state.cartFoods.splice(state.cartFoods.indexOf(food),1);
    }
  },
  [CLEAR_CART] (state) {
    state.cartFoods.forEach(food=> food.count = 0);
    state.cartFoods = [];
  }

}
