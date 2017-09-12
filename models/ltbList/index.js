/*
 * @Author: zhujian 
 * @Date: 2017-08-12 13:58:04 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-13 02:23:42
 */
'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const LtbListSchema = new Schema({
  ltcLast: String,
  // btcLast: String,
  ModifyTime: String,
  active:String,
})

LtbListSchema.index({ id: 1 });

const LtbList = mongoose.model('ltbList', LtbListSchema);


export default LtbList
