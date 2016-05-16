// JavaScript Document displaymessage0.js

var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "That Manage My Internet app would be turned on with this button click.", 5, "Manage My Internet" );
wsh.RegWrite("HKEY_LOCAL_MACHINE\\SOFTWARE\\CDP\\SnapBack\\Apps\\myinternet\\ManageInternet", "true", "REG_SZ");

wsh = null;