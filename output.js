//Wed Jul 03 2024 02:51:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const NodeRSA = require("node-rsa"),
  CryptoJS = require("crypto-js");
let httpResult, httpReq, httpResp;
class UserInfo {
  constructor(_0x2961e1) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.param = $.str2json(_0x2961e1);
  }
  async ["my"]() {
    try {
      let _0x11d09b = Date.now(),
        _0x283df5 = getRandom(3),
        _0x56ba3a = _0x11d09b + _0x283df5,
        _0x4d611d = encryptrsa(_0x56ba3a),
        _0x5e103d = "{}",
        _0x2c65d2 = "{\"paramEncr\":\"" + encrypt(_0x5e103d, _0x56ba3a) + "\"}",
        _0x13498d = CryptoJS.MD5("" + _0x2c65d2 + _0x11d09b + "hyzh-unistar-8KWAKH291IpaFB").toString().toUpperCase(),
        _0x5a9f2b = "" + this.param.token,
        _0x47ea8b = "https://evosapi.changanford.cn/user/myInfo",
        _0x1e8139 = populateUrlObject(_0x47ea8b, _0x11d09b, _0x4d611d, _0x13498d, _0x5a9f2b, _0x2c65d2);
      await httpRequest("post", _0x1e8139);
      let _0x60a673 = httpResult;
      if (!_0x60a673) return;
      if (_0x60a673.code == 0) {
        this.valid = true;
        let _0x55f7b3 = JSON.parse(decrypt(_0x60a673.data, _0x56ba3a));
        $.logAndNotify("账号[" + this.name + "] 昵称 " + _0x55f7b3.nickname + " 手机号 " + _0x55f7b3.phone + " 福豆 " + _0x55f7b3.ext.totalIntegral);
        _0x55f7b3.isLogin == 0 && (await $.wait(getRandomInt(1500, 2500)), await this.signin());
      }
    } catch (_0x3f0087) {
      console.log(_0x3f0087);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["signin"]() {
    try {
      let _0x1f7fbd = Date.now(),
        _0x573296 = getRandom(3),
        _0x461e14 = _0x1f7fbd + _0x573296,
        _0x100b2b = encryptrsa(_0x461e14),
        _0x100a42 = "{}",
        _0x1c9ede = "{\"paramEncr\":\"" + encrypt(_0x100a42, _0x461e14) + "\"}",
        _0x5ca63a = CryptoJS.MD5("" + _0x1c9ede + _0x1f7fbd + "hyzh-unistar-8KWAKH291IpaFB").toString().toUpperCase(),
        _0x1e3a99 = "" + this.param.token,
        _0x262701 = "https://evosapi.changanford.cn/user/signIn",
        _0x361aee = populateUrlObject(_0x262701, _0x1f7fbd, _0x100b2b, _0x5ca63a, _0x1e3a99, _0x1c9ede);
      await httpRequest("post", _0x361aee);
      let _0x55ec53 = httpResult;
      if (!_0x55ec53) return;
      if (_0x55ec53.code == 0) {
        let _0x3c7aef = JSON.parse(decrypt(_0x55ec53.data, _0x461e14));
        $.logAndNotify("账号[" + this.name + "] 签到获得 " + _0x3c7aef.integral + "福都 " + _0x3c7aef.growth + "成长值");
        _0x3c7aef.luckyBlessingBagId == 6 && (await $.wait(getRandomInt(1500, 2500)), await this.box_info());
      }
    } catch (_0xc9afaf) {
      console.log(_0xc9afaf);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["box_info"]() {
    try {
      let _0x5a56fa = Date.now(),
        _0x53b3eb = "Mdhg1uVSLhHJL5uz",
        _0x5128cf = encryptrsa(_0x53b3eb),
        _0x562ab7 = "{\"luckyBlessingBagId\":\"6\"}",
        _0x394a3a = "{\"paramEncr\":\"" + encrypt(_0x562ab7, _0x53b3eb) + "\"}",
        _0x445122 = CryptoJS.MD5("" + _0x394a3a + _0x5a56fa + "hyzh-unistar-8KWAKH291IpaFB").toString().toUpperCase(),
        _0x144818 = "" + this.param.token,
        _0x1312ec = "https://evosapi.fuyu.club/luckyBlessingBag/mainPage",
        _0x1d29a7 = populateUrlObject2(_0x1312ec, _0x5a56fa, _0x5128cf, _0x445122, _0x144818, _0x394a3a);
      await httpRequest("post", _0x1d29a7);
      let _0x459f33 = httpResult;
      if (!_0x459f33) return;
      if (_0x459f33.code == 0) {
        let _0x946d97 = JSON.parse(decrypt(_0x459f33.data, _0x53b3eb));
        _0x946d97.remainTimes > 0 && (await $.wait(getRandomInt(1500, 2500)), await this.open_box());
      }
    } catch (_0x10d96e) {
      console.log(_0x10d96e);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["open_box"]() {
    try {
      let _0x5eb491 = Date.now(),
        _0x51a1d0 = getRandom(3),
        _0x3ed5f1 = _0x5eb491 + _0x51a1d0,
        _0x344cf0 = encryptrsa(_0x3ed5f1),
        _0x50aefe = "{\"activityId\":\"6\"}",
        _0x9e4bec = "{\"paramEncr\":\"" + encrypt(_0x50aefe, _0x3ed5f1) + "\"}",
        _0x1accc7 = CryptoJS.MD5("" + _0x9e4bec + _0x5eb491 + "hyzh-unistar-8KWAKH291IpaFB").toString().toUpperCase(),
        _0x4fd4c4 = "" + this.param.token,
        _0x49dd8d = "https://evosapi.fuyu.club/luckyBlessingBag/luckDraw/6",
        _0x5a5b8f = populateUrlObject2(_0x49dd8d, _0x5eb491, _0x344cf0, _0x1accc7, _0x4fd4c4, _0x9e4bec);
      await httpRequest("post", _0x5a5b8f);
      let _0x44de50 = httpResult;
      if (!_0x44de50) return;
      if (_0x44de50.code == 0) {
        let _0x5ade81 = JSON.parse(decrypt(_0x44de50.data, _0x3ed5f1));
        $.logAndNotify("账号[" + this.name + "] 开宝箱获得 " + _0x5ade81.prizeName);
      }
    } catch (_0x10b6b6) {
      console.log(_0x10b6b6);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["userTask"]() {
    $.logAndNotify("\n============= 账号[" + this.index + "] =============");
    await this.my();
    if (!this.valid) return;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {} else {
    if (!(await checkEnv())) return;
    for (let _0x54bf77 of userList) {
      await _0x54bf77.userTask();
    }
    await $.showmsg();
  }
})().catch(_0x295494 => console.log(_0x295494)).finally(() => $.done());
function getRandomInt(_0x1edfcc, _0x35b41d) {
  return _0x1edfcc = Math.ceil(_0x1edfcc), _0x35b41d = Math.floor(_0x35b41d), Math.floor(Math.random() * (_0x35b41d - _0x1edfcc + 1)) + _0x1edfcc;
}
function getRandom(_0x15ec76) {
  let _0x3afcb4 = "QWERTYUIOPASDFGHJKLZXCVBNM",
    _0x472fa3 = "";
  for (let _0x5a1937 = 0; _0x5a1937 < _0x15ec76; _0x5a1937++) {
    let _0x2e5683 = Math.ceil(Math.random() * _0x3afcb4.length - 1);
    _0x472fa3 += _0x3afcb4[_0x2e5683];
  }
  return _0x472fa3;
}
function encryptrsa(_0x53f8de) {
  var _0x15fcdc = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUUKw74ULuOMsQT9EO64Ij8y/DAgmW2JvbPIa7XTLibr0lfG7nnbXhnIWFwx1tfgG04P1jYZBHBVcvP7sVIWVvVDg8N43RErIu+kNCEMMfq22iUahKK1vi+y2bsXfVCa4SWS5eDegQOsuBfsP30HlcA4uvH3+/elFepv+6ep9ZmwIDAQAB";
  const _0x12ea81 = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x15fcdc + "\n-----END PUBLIC KEY-----");
  _0x12ea81.setOptions({
    "encryptionScheme": "pkcs1"
  });
  const _0x5632af = _0x12ea81.encrypt(_0x53f8de, "base64", "utf8");
  return _0x5632af;
}
function encrypt(_0x190c26, _0x4d08b6) {
  let _0x5c4d2a = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(_0x190c26), CryptoJS.enc.Utf8.parse(_0x4d08b6), {
      "iv": CryptoJS.enc.Utf8.parse(_0x4d08b6),
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }),
    _0x3c576a = CryptoJS.enc.Base64.stringify(_0x5c4d2a.ciphertext);
  return _0x3c576a;
}
function decrypt(_0x24e42f, _0x155fe2) {
  let _0x234d53 = CryptoJS.enc.Utf8.parse(_0x155fe2),
    _0x2e8f27 = CryptoJS.enc.Utf8.parse(_0x155fe2),
    _0x547453 = CryptoJS.enc.Utf8.parse(_0x24e42f),
    _0xe66c93 = CryptoJS.enc.Utf8.stringify(_0x547453),
    _0x5d3810 = CryptoJS.AES.decrypt(_0xe66c93, _0x234d53, {
      "iv": _0x2e8f27,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x5d3810.toString(CryptoJS.enc.Utf8).toString();
}
async function checkEnv() {
  if (userCookie) {
    let _0x3f6d42 = envSplitor[0];
    for (let _0x426877 of envSplitor) {
      if (userCookie.indexOf(_0x426877) > -1) {
        _0x3f6d42 = _0x426877;
        break;
      }
    }
    for (let _0x1b5e78 of userCookie.split(_0x3f6d42)) {
      if (_0x1b5e78) userList.push(new UserInfo(_0x1b5e78));
    }
    userCount = userList.length;
  } else {
    console.log("\n未找到CK");
    return;
  }
  return console.log("共找到" + userCount + "个账号"), true;
}
function populateUrlObject(_0x56a4a0, _0x158d0c, _0xa06898, _0x1ffe79, _0x3cb2f3, _0x3ed607 = "") {
  let _0x5232b6 = _0x56a4a0.replace("//", "/").split("/")[1],
    _0x1004c9 = {
      "url": _0x56a4a0,
      "headers": {
        "Host": _0x5232b6,
        "appversion": "1.3.2",
        "os": "Android",
        "loginchannel": "baidu",
        "sign": _0x1ffe79,
        "body": "99914B932BD37A50B983C5E7C90AE93B",
        "operatorname": "lt",
        "networkstate": "WIFI",
        "token": _0x3cb2f3,
        "osversion": "12",
        "seccode": _0xa06898,
        "model": "Redmi K20 Pro",
        "brand": "Xiaomi",
        "timestamp": _0x158d0c,
        "codelab": "codelabs",
        "user-agent": "ford-evos"
      },
      "timeout": 5000
    };
  if (_0x3ed607) {
    _0x1004c9.body = _0x3ed607;
    _0x1004c9.headers["content-type"] = "application/json";
    _0x1004c9.headers["Content-Length"] = _0x1004c9.body ? Buffer.byteLength(_0x3ed607, "utf8") : 0;
  }
  return _0x1004c9;
}
function populateUrlObject2(_0x2d78fc, _0x5b103d, _0xe2b946, _0x3cb202, _0xe1c500, _0x406a0f = "") {
  let _0x5da47c = _0x2d78fc.replace("//", "/").split("/")[1],
    _0x49f755 = {
      "url": _0x2d78fc,
      "headers": {
        "Host": _0x5da47c,
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "seccode": _0xe2b946,
        "User-Agent": "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046279 Mobile Safari/537.36 ford-evos",
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        "timestamp": _0x5b103d,
        "token": _0xe1c500,
        "sign": _0x3cb202,
        "appVersion": "1.4.0",
        "Origin": "https://evosh5.fuyu.club",
        "X-Requested-With": "com.changanford.evos",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://evosh5.fuyu.club/"
      },
      "timeout": 5000
    };
  return _0x406a0f && (_0x49f755.body = _0x406a0f, _0x49f755.headers["content-type"] = "application/json", _0x49f755.headers["Content-Length"] = _0x49f755.body ? Buffer.byteLength(_0x406a0f, "utf8") : 0), _0x49f755;
}
async function httpRequest(_0x142b21, _0x2b65af) {
  return httpResult = null, httpReq = null, httpResp = null, new Promise(_0x5ac21e => {
    $.send(_0x142b21, _0x2b65af, async (_0xd2cc2, _0x577450, _0x507762) => {
      try {
        httpReq = _0x577450;
        httpResp = _0x507762;
        if (_0xd2cc2) {
          httpResult = JSON.parse(_0x577450.body);
        } else {
          if (_0x507762.body) {
            if (typeof _0x507762.body == "object") httpResult = _0x507762.body;else {
              try {
                httpResult = JSON.parse(_0x507762.body);
              } catch (_0x284354) {
                httpResult = _0x507762.body;
              }
            }
          }
        }
      } catch (_0x354bcd) {} finally {
        _0x5ac21e();
      }
    });
  });
}