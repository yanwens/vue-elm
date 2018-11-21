
import ajax from './ajax';

/*
[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
[5、获取一次性验证码](#5获取一次性验证码)<br/>
[7、发送短信验证码](#7发送短信验证码)<br/>
[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
[10、用户登出](#10用户登出)<br/>
* */
const baseApi = '/api';
const baseUrl = '';
//[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (latitude, longitude) => ajax(baseApi + `/position/${latitude},${longitude}`);
//[2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategroys = () => ajax(baseApi + '/index_category');
//[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({latitude, longitude}) => ajax(baseApi + '/shops',{latitude, longitude});
//发送短信验证码](#7发送短信验证码)<br/>
export const reqSmsCode = (phone) => ajax(baseApi +'/sendcode', {phone});
//用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLoginPwd = ({name, pwd, captcha}) => ajax(baseApi + '/login_pwd', {name, pwd, captcha}, 'POST');
//手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLoginSms = ({phone, code}) => ajax(baseApi + '/login_sms', {phone, code}, 'POST');
//根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(baseApi + '/userinfo');
//用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(baseApi + '/logout');

//获取店铺商品列表
export const getShopGoods = () => ajax('/goods');
//获取店铺评级
export const getShopRatings = () => ajax('/ratings');
//获取店铺信息
export const getShopInfo = () => ajax('/info');
