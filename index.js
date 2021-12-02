var linebot = require('linebot');
 
var bot = linebot({
  channelId: "1656665327",
  channelSecret: "a85f6351d9e3dfdea56d39df5e044857",
  channelAccessToken: "YRCjxgb6p/YkCWbXAOOQZgcooj0ktWRmSquS+LKekKNfT7n66GFoCcYJpwYd6HsfXp1WADa71/oLEfZF9AArReizmaMB3AJFaFsHJzrlZ1y5DruDnLEnxte+d2i1OyLVSN/GNghf6wBMQHZHZgACggdB04t89/1O/w1cDnyilFU="
});


// 當收到信息時~
bot.on('message', function (event) {

    console.log( event ) ;

    event.reply( "test!!!!!" ).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });

});


// 當有人追蹤你的Bot時~
bot.on('follow', function (event) {
    console.log( event ) ;
});

// 當有人退追你的Bot時~
bot.on('unfollow', function (event) {
  console.log( event ) ;
});

// 當你的Bot被加到群組時~
bot.on('join', function (event) {
  console.log( event ) ;
});

// 當你的Bot被踢出群組時~
bot.on('leave', function (event) {
  console.log( event ) ;
});

// 當你的Bot的群組中有新人加入時~
bot.on('memberJoined', function (event) {
  console.log( event ) ;
});

// 當你的Bot的群組中有人被踼出時~
bot.on('memberLeft', function (event) {
  console.log( event ) ;
});


// 暫不理會~
bot.on('postback', function (event) {
 
  console.log( event ) ;
});


// 要有藍牙~~~~
bot.on('beacon', function (event) {
  console.log( event ) ;
});

bot.listen('/linewebhook', 3000);