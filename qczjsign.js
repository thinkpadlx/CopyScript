/*

 @𝐗𝐢𝐝𝐍 𝐃𝐃    感谢红鲤鱼大佬
//++++++++++++++++++++++++++++++++-


[红包]我的邀请码19570916，填了咱俩都拿钱[红包]


2020,9,25 增加时段奖励
时段奖励是每个小时一次奖励
2020,10,2 增加现金提现
提现才能获取到ck
2020.11.15增加普通版签到 我只测试了loon能用

说明:

圈x loon 签到和时段奖励都需要2个MITM 另外一个要自己抓包获取每个人不一样  抓包找到,签到的fasthome/taskcenter/init,时段奖励fasthome/coin/addcoin,的包会有一个类似于,183.146.18.877,这样的添加就好了,少一个MITM就获取不到ck

汽车之家极速版 签到可以获得金币兑换现金

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck

这个版本就增加提现功能 你感觉没啥用就不用换

⚠️⚠️⚠️注意有2个MITM



小火箭:签到获取ck
汽车之家极速版 = type=http-request,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js,pattern=^https:\/\/(mobile|activity)\.app\.autohome\.com\.cn\/*,max-size=131072,requires-body=true,timeout=10,enable=true

时段奖励ck
汽车之家极速版 = type=http-request,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js,pattern=^http:\/\/mobile\.app\.autohome\.com\.cn\/fasthome\/coin\/*,max-size=131072,requires-body=true,timeout=10,enable=true

定时 汽车之家极速版 = type=cron,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js,cronexpr="0 0 0 * * *",timeout=10,enable=true





surge:远程
汽车之家极速版 = type=http-request,pattern=^https:\/\/(mobile|activity)\.app\.autohome\.com\.cn\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js

定时 汽车之家极速版 = type=cron,cronexp=0 10 0 * * *,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js



圈x:远程
签到获取ck
^https:\/\/(mobile|activity)\.app\.autohome\.com\.cn\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js

时段奖励ck
^http:\/\/mobile\.app\.autohome\.com\.cn\/fasthome\/coin\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js




定时 0 10 0 * * * https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js, tag= 汽车之家极速版, enabled=true





loon:远程
签到获取ck
http-request ^https:\/\/(mobile|activity)\.app\.autohome\.com\.cn\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js, requires-body=true, timeout=10, tag=汽车之家极速版

时段获取ck
http-request ^http:\/\/mobile\.app\.autohome\.com\.cn\/fasthome\/coin\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js, requires-body=true, timeout=10, tag=汽车之家极速版



定时 cron "0 10 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjsign.js 




MITM= mobile.app.autohome.com.cn, activity.app.autohome.com.cn




*/






//++++++++++++++++++++++++++++++++


const $XidN = XidN();

const logs=0;//设置0关闭日志,1开启日志



//++++++++++++++++++++++++++++++++-


const dd="汽车之家APP";








//++++++++++++++++++++++++++++++++


function main()
{
XidN_degin();}



 
async function XidN_degin()
 {
let a0=await XidN_Sign();
let a1=await XidN_qczjSign();
let a2=await XidN_qczjsdSign();
let a3=await XidN_qczjxjSign();
 papa(dd,"",a0+a1+a2+a3);
   
}



  
  
  



function XidN_Sign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="极速版打卡✍🏻";
   var result2="";

var qczjurl=$XidN.read("qczjurlname");
var qczjhd=$XidN.read("qczjhdname");
var qczjbd=$XidN.read("qczjbdname");
  const llUrl1={
      url:qczjurl,
      headers:JSON.parse(qczjhd),
      body:qczjbd,
      timeout:60000};
  $XidN.post(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.result.list[0].sign.result.signalter== 1)
result2="✅签到"+",获得"+obj.result.list[0].nowcoin+"💰金币"+",连续签到"+obj.result.list[0].sign.result.signdaycount+"天"+",现金"+obj.result.list[0].nowmoney+"元💸\n";
else if(obj.result.list[0].sign.result.signalter== 0)
result2="重复签到⚠️"+",连续签到"+obj.result.list[0].sign.result.signdaycount+"天",
result2+=",现金"+obj.result.list[0].nowmoney+"元💸"+",今日"+obj.result.list[0].nowcoin+"💰金币\n";
else
result2="签到失败❎";

result2="<"+result1+">"+result2+"";
console.log(result2);
resolve(result2);
})
})
}



   
   

function XidN_qczjSign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="普通版打卡✍🏻";
   var result2="";
 
var signdetailurl=$XidN.read("signdetailurlname");
var signdetailhd=$XidN.read("signdetailhdname");

  const llUrl1={
      url:signdetailurl,
      headers:JSON.parse(signdetailhd),
      timeout:60000};
  $XidN.get(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.result.signwindowflag== 1)
result2="✅签到"+",获得"+obj.result.signcoincount+"💰金币"+"连续签到"+obj.result.weekday+"天";
else if(obj.result.signwindowflag== 0)
result2="重复签到⚠️"+",连续签到"+obj.result.weekday+"天";






  const llUrl2={
      url:"https://activity.app.autohome.com.cn/acti818/signin/index?version=10.11.6&pm=1&time=1600663203838&auth=f27ae2eb2ea6414588369cc399b783110b973ca6&userid=194460838&deviceid=d5fa7e607eb3d8ba76ed03990c63168a26325827&timer=1600663203839",
      headers:JSON.parse(signdetailhd),
      timeout:60000};
  $XidN.get(llUrl2,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.returncode== 0)
result2+=",累计获得"+obj.result.coincount+"💰金币"+",现金累计"+obj.result.coinmoney+"💸元✨";







const llUrl3={
      url:"https://activity.app.autohome.com.cn/acti818/signin/lottery?deviceId=d5fa7e607eb3d8ba76ed03990c63168a26325827&auth=f27ae2eb2ea6414588369cc399b783110b973ca6&userid=194460838&deviceid=d5fa7e607eb3d8ba76ed03990c63168a26325827&timer=1601741612968",
      headers:JSON.parse(signdetailhd),
      timeout:60000};
  $XidN.get(llUrl3,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.returncode== 0)
result2+="签到抽大奖"+",获得"+obj.result.coin+"💰金币";
else
if(obj.returncode== 10003)
result2+="签到抽大奖"+",失败:"+obj.message;

else
if(obj.returncode== 10002)
result2+="签到抽大奖"+",失败:"+obj.message;

else
result2="签到失败❎";




result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
})
})
}





function XidN_qczjsdSign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="时段奖励🌟";
   var result2="";

var qczjsdurl=$XidN.read("qczjsdurlname");
var qczjsdhd=$XidN.read("qczjsdhdname");
var qczjsdbd=$XidN.read("qczjsdbdname");

  const llUrl1={
      url:qczjsdurl,
      headers:JSON.parse(qczjsdhd),
      body:qczjsdbd,
      timeout:60000};
  $XidN.post(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.returncode== 0)
result2="时段奖励✅,+10💰金币";
else if(obj.returncode== 111)
result2="说明:"+obj.message;

else
result2="领取失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);






})
})
}




function XidN_qczjxjSign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="现金提现💸";
   var result2="";

var qczjxjurl=$XidN.read("qczjxjurlname");
var qczjxjhd=$XidN.read("qczjxjhdname");
var qczjxjbd=$XidN.read("qczjxjbdname");

  const llUrl1={
      url:qczjxjurl,
      headers:JSON.parse(qczjxjhd),
      body:qczjxjbd,
      timeout:60000};
  $XidN.post(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.returncode== 0)
result2="提现成功✅,详情看明细";
else if(obj.returncode== -12)
result2="失败:"+obj.message;
else if(obj.returncode== -103)
result2="失败:"+obj.message;
else if(obj.returncode== -13)
result2="失败:"+obj.message+obj.daydes+obj.time+"点补充库存";


else
result2="领取失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);






})
})
}
















function XidN_qczj() {

  if ($request.headers) {

 var urlval = $request.url;
var md_hd=$request.headers;
var md_bd=$request.body;

if(urlval.indexOf("fasthome/taskcenter/init")>=0)
{

 var ao= $XidN.write(urlval,"qczjurlname");
var so= $XidN.write(md_bd,"qczjbdname");

var bo= $XidN.write(JSON.stringify(md_hd),"qczjhdname");

if (ao==true&&bo==true&&so==true) 
 papa(dd,"[获取极速版签到数据]","✅成功");}


else
if(urlval.indexOf("fasthome/coin/addcoin")>=0)
{

 var ao= $XidN.write(urlval,"qczjsdurlname");
var so= $XidN.write(md_bd,"qczjsdbdname");
var bo= $XidN.write(JSON.stringify(md_hd),"qczjsdhdname");

if (ao==true&&bo==true&&so==true) 
 papa(dd,"[获取时段奖励数据]","✅成功");}





else
if(urlval.indexOf("fasthome/coin/cointowallet")>=0)
{

 var ao= $XidN.write(urlval,"qczjxjurlname");
var so= $XidN.write(md_bd,"qczjxjbdname");
var bo= $XidN.write(JSON.stringify(md_hd),"qczjxjhdname");

if (ao==true&&bo==true&&so==true) 
 papa(dd,"[获取现金提现数据]","✅成功");}


else
if(urlval.indexOf("acti818/signin/signdetail?")>=0)
{

 var ao= $XidN.write(urlval,"signdetailurlname");
var bo= $XidN.write(JSON.stringify(md_hd),"signdetailhdname");

if (ao==true&&bo==true) 
 papa(dd,"[获取普通版数据]","✅成功");}


}  
}






function papa(x,y,z){

$XidN.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}

if ($XidN.isRequest) {
  XidN_qczj()
  $XidN.end()
} else {
  main();
  $XidN.end()
 }



function XidN() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};



