var execSync = require('child_process').execSync;
var lb = require("lemonbar");

var whiteColor 	= "#c0a79a";
var darkcon	= "#50412e29";
var lightcon	= "#50783e57";

var padding 	= "   ";

lb.launch({
	lemonbar:	"/usr/bin/lemonbar",
	shell:		"/usr/bin/zsh",
	shelloutput:	true,

	background:	darkcon,
	foreground: 	whiteColor,
	lineWidth:	5,
	lineColor:	whiteColor,
	geometry: {
		x: 	0,
		y: 	0,
		width: 	1920,
		height: 30
	},

	fonts: 		["xft:Iosevka:style=bold"],

	bottom: 	true,
	forceDocking: 	false,
	name: 		null,
	areas:		0
});

function update() {
	var date = new Date();
	var dateString = 
		date.getDate() + "/" +
		date.getDay()  + " " +
		date.getHours()+ ":" +
		date.getMinutes() + ":" +
		date.getSeconds();

	lb.append(lb.center + "scien@archpc");
	lb.append(lb.right + (padding + dateString + padding).lbBg(lightcon));
		
	lb.write();
	console.log("TEST");
}
update();

setInterval(update, 1000);
