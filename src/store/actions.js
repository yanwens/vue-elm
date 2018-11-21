import {
  reqAddress,
  reqFoodCategroys,
  reqShops,
  reqUserInfo,
  reqLogout,
  getShopGoods,
  getShopInfo,
  getShopRatings
} from '../api';
import {RECEIVE_ADDRESS,
  RECEIVE_FOOD_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS} from './actions-type';

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
  },
  receiveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  async getUserInfo ({commit}) {
    const result = await reqUserInfo();
    if (result.code===0) {
      commit(RECEIVE_USER, {user:result.data})
    }
  },
  async logoutUser({commit}){
    const result = await reqLogout();
    if (result.code===0){
      commit(RECEIVE_USER, {user:{}})
    }
  },
  async shopGoods ({commit},cb) {
    //直接成功
    const result = await getShopGoods();
    commit(RECEIVE_GOODS,{goods: result.data});
    typeof cb ==='function' && cb();
  },
  async shopRatings ({commit}) {
    const result = await getShopRatings();
    commit(RECEIVE_RATINGS,{ratings: result.data});
  },
  async shopInfo ({commit}) {
    const result = await getShopInfo();
    commit(RECEIVE_INFO,{info: result.data});
  },

}
