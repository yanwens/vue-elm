export default {
  foodTotalCount (state) {
    return state.cartFoods.reduce((pre, food)=> pre + food.count,0)
  },
  foodTotalPrice (state) {
    return state.cartFoods.reduce((pre, food)=> pre + food.count * food.price,0)
  },
  ratingTotalCount (state) {
    return state.ratings.length;
  },
  ratingRecommendCount (state) {
    return state.ratings.reduce((pre, rating)=> pre + (rating.rateType === 0 ? 1 : 0),0)
  }
}
