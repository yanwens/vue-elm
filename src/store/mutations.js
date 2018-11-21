import {RECEIVE_ADDRESS,
  RECEIVE_FOOD_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS} from './actions-type'
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

}
