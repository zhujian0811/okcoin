/*
 * @Author: zhujian 
 * @Date: 2017-09-13 00:41:08 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-14 14:24:09
 */
import SetEmail from './sentEmail';
import LTCModel from '../models/ltbList/index';
import config from 'config-lite';

class Analysic {
  async Analysic(res) {
    console.log('ansy')
    var Item = res;
    var ModifyTime = moment().valueOf();
    if (Item.ltcLast * 100 < config.lowPrice) {
      console.log("就绪")
      const ltc = await LTCModel.find({ 'active': 1 }, null, { sort: { ModifyTime: -1 } });
      console.log(ltc[0].ltcLast)
      if (ltc.length == 0 || (ModifyTime - ltc[0].ModifyTime + config > config.timeout) || (ltc[0].ltcLast * 100-Item.ltcLast * 100 > 500)) {
        Item.ModifyTime = ModifyTime;
        Item.active = 1;
        LTCModel.create(Item).then(() => {
          config.mailOptions.text = `莱特币大降价了赶紧买,当前价格为:${Item.ltcLast}元`
          SetEmail.setEmail(config.mailOptions)
        })
      }
    } else {
      return
    }


  }
}

export default new Analysic()