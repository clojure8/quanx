/*
[task_local]
0 20 * * * * https://raw.githubusercontent.com/deezertidal/shadowrocket-rules/main/js/oil.js, tag=每日油价, enabled=true
*/
const apiurl = ""https://apis.tianapi.com/oilprice/index?key=d718b0f7c2b6d71cb3a9814e90bf847f&prov=%E4%B8%8A%E6%B5%B7;

$task.fetch({ url: apiurl }).then(response => {
    var obj = JSON.parse(response.body);
    var prov = obj.result.prov;
    var p0 = "0号柴油:" + "¥" + obj.result.p0 + "\xa0\xa0\xa0";
    var p92 = "92号汽油:" + "¥" + obj.result.p92 + "\xa0\xa0\xa0";
    var p95 = "95号汽油:" + "¥" + obj.result.p95 + "\xa0\xa0\xa0";
    var p98 = "98号汽油:" + "¥" + obj.result.p98 + "\xa0\xa0\xa0";
    var time = obj.result.time;
    $notify(prov + "油价提醒", time, p92 + p95 + p98 + p0);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
