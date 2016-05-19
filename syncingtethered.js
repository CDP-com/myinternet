// JavaScript Document syncingtethered.js

// Script what you want to happen based upon the arguments returned
var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "Syncing would be permamently disabled if it is detected you are tethering to another device.", 5, "Block Syncing over Tethered" );

wsh = null;
