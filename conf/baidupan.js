hostname = pan.baidu.com

# 百度网盘 解除在线视频倍率/清晰度
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js
