/*
 * @Author: zhujian 
 * @Date: 2017-09-13 00:41:08 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-13 08:48:04
 */
import setEmail from './sentEmail';
import LTCModel from '../models/ltbList/index';
import config from 'config-lite';

let Analysic = async (res) => {
  console.log(3)
  var Item = res;
  var ModifyTime = moment().valueOf();
  console.log(11)
  if (Item.ltcLast * 100 < config.lowPrice) {
    console.log(5)
    const ltc = await LTCModel.find({ 'active': 1 }, null, { sort: { modifyTime: -1 } });
    console.log(6, ltc)
    if (ltc.length == 0 || (ModifyTime - ltc[0].ModifyTime + config > config.timeout) || (Item.ltcLast * 100 - ltc[0].ltcLast * 100 > 500)) {
      console.log(7)
      Item.ModifyTime = ModifyTime;
      Item.active = 1;
      console.log(8)
      LTCModel.create(Item).then(() => {
        console.log(9)
        config.mailOptions.text = `莱特币大降价了赶紧买,当前价格为:${Item.ltcLast}元`
        setEmail(config.mailOptions)
      })
    }
  } else { 
    return
  }


}

export default Analysic