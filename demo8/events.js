// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var connectHandle = function(){
	console.log("执行了第一个回调")
	
	eventEmitter.emit('seconed_func');
}

eventEmitter.on('bindOne',connectHandle);

eventEmitter.on('seconed_func',function(){
	console.log('执行的是第二个回调')
})

eventEmitter.emit("bindOne");
console.log("执行完毕")