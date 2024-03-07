autowatch = 1;

var value=0;
var channelName = '';

function setName() {
	channelName = arguments[0];
	outlet(0,"channelName","is",channelName);
}

function note() {
	var obj = {
		chan: channelName,
		num: arguments[0],
		vel: arguments[1]
	}
	post(obj.chan, obj.num, obj.vel);
}