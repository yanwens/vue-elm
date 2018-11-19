import {RECEIVE_ADDRESS,
  RECEIVE_FOOD_CATEGORY,
  RECEIVE_SHOPS} from './actions-type'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  [RECEIVE_FOOD_CATEGORY] (state, {foodCategory}) {
    state.foodCategory = foodCategory;
  },
  [RECEIVE_SHOPS] (state, {shops}){
    state.shops = shops;
  }
}
