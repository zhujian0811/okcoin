/*
 * @Author: zhujian 
 * @Date: 2017-08-12 13:58:13 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-14 18:09:10
 */
import db from './mongodb/db.js';
import GetOkCoin from './module/getOkCoin';
import Analysic from './module/analysic';
import config from 'config-lite';

 
global._ = require('underscore')
global.moment = require('moment')
let progress
let start = () => {
  progress = setInterval(() => {
    GetOkCoin.getOkCoin().then((res) => {
      Analysic.Analysic(JSON.parse(res))
    })
  }, 10000)
}
start();