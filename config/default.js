'use strict';

module.exports = {
	url: 'mongodb://localhost:27017/okcoin',
	auth: {
		user: 'zhujian0811@126.com', // generated ethereal user
		pass: 'zhujian3588000'  // generated ethereal password
	},
	lowPrice: 38000,
	diffPrice: 500,
	timeout: 60 * 60 * 1000,
	mailList: ['zhujian@xiaomai5.com'],
	regUrl: "https://www.okcoin.cn/real/ticker.do",
	cookie: 'perm=4B05BF33577D4D1F59CB00D969678B3D; first_ref="https://www.okcoin.cn/"; lp="https://www.okcoin.cn/"; language=0; closeShowNews1518=1; symbol=etc_cny; coin_session_id_o=7175c3e5-ac60-41df-ba59-160ca5a45cfcf6160f56ec463c77; tradetype=1; strategyType=1; isFuture=-1; klineVision=5; coin_session_logininfo=""; JSESSIONID=9AD94532A23B241D4D23F3BBDDF60798; locale=zh_cn; Hm_lvt_5244adb4ce18f1d626ffc94627dd9fd7=1503885467,1504235548,1504598659,1504600627; Hm_lpvt_5244adb4ce18f1d626ffc94627dd9fd7=1504923014; ref="https://www.okcoin.cn/kline/fullKline.do',
	mailOptions: {
		from: 'zhujian0811@126.com', // sender address
		to: ['louzhedong@xiaomai5.com', 'zhujian@xiaomai5.com'], // list of receivers
		subject: "莱特币大降价了赶紧买", // Subject line
		text: '莱特币大降价了赶紧买', // plain text body
		html: '' // html body
	}
}