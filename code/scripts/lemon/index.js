var execSync = require('child_process').execSync;
var lb = require("lemonbar");

var whiteColor 	= "#c0a79a";
var darkcon	= "#50412e29";
var lightcon	= "#50884e67";

var padding 	= "   ";

var iconFont	="Terminess Powerline:pixelsize=20";

Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) { s="0"+ s;}
	return s;
}

Number.prototype.toTwelve = function() {
	if (this > 12) {
		return this-12;
	} else {
		return this+1;
	}
}


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
		height: 22
	},

	fonts: 		["xft:Iovska:style=bold:pixelsize=16",iconFont],

	bottom: 	true,
	forceDocking: 	false,
	name: 		null,
	areas:		0
});

function update() {
	var date = new Date();
	var dateString = 
		date.getMonth()		+ "/" +
		date.getDate()		+ " " +
		date.getHours().toTwelve().pad()+ ":" +
		date.getMinutes().pad() + ":" +
		date.getSeconds().pad();

	lb.append(lb.center + "scien@archpc");
	lb.append(lb.right + icon("\ue0b2") + (padding + dateString + padding).lbBg(lightcon));

	lb.write();		
}
update();

setInterval(update, 1000);


function icon(str) {
	return (""+str.lbFont(iconFont)).lbFg(lightcon);
}
