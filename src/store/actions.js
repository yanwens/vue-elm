import {
  reqAddress,
  reqFoodCategroys,
  reqShops
} from '../api';
import {RECEIVE_ADDRESS,
  RECEIVE_FOOD_CATEGORY,
  RECEIVE_SHOPS} from './actions-type';

export default {

  async getAddress ({commit} ) {
    try {
      const result = await reqAddress('40.10038','116.36867');
      if (result.code === 0){
        commit(RECEIVE_ADDRESS,{address:result.data});
      }else{

      }
    } catch (e) {

    }
  },
  async getFoodCategory ({commit}) {
    try {
      const result = await reqFoodCategroys();
      if (result.code === 0) {
        commit(RECEIVE_FOOD_CATEGORY,{foodCategory:result.data})
      }
    } catch (e) {

    }
  },
  async getShops ({commit, state} ) {
    try {
      const result = await reqShops({latitude:state.latitude,longitude:state.longitude});
      if (result.code === 0) {
        commit(RECEIVE_SHOPS,{shops:result.data})
      }
    } catch (e) {

    }
  }
}
