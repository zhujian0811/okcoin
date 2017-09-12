/*
 * @Author: zhujian 
 * @Date: 2017-08-12 13:58:13 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-13 02:04:34
 */
import db from './mongodb/db.js';
import getOkCoin from './module/getOkCoin';
import analysic from './module/analysic';
import config from 'config-lite';
global._ = require('underscore')
global.moment = require('moment')
let progress
let start = () => {
  progress = setInterval(() => {
    getOkCoin().then((res) => {
     // console.log(1)
      console.log(11,analysic,res)
      analysic(JSON.parse(res))
    })
  }, 10000)
}
start();