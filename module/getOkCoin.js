import https from 'https';
import url from 'url';
import querystring from 'querystring';
import config from 'config-lite';

var post_option = url.parse(config.regUrl);
post_option.method = "POST";
post_option.port = 443;
post_option.cookie = config.cookie;
var post_data = querystring.stringify({
  'random': new Date().getTime(),
});

let getOkCoin = () => {
  return new Promise((resolve, reject) => {
    var post_reg = https.request(post_option, function (res) {
      res.on('data', function (buffer) {
        console.log(1)
        resolve(buffer.toString())
      });
    })
    post_reg.write(post_data);
    post_reg.end();
  })

}

export default getOkCoin