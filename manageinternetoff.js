// JavaScript Document displaymessage1.js

var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "That Manage My Internet app would be turned off with this button click.", 5, "Manage My Internet" );
wsh.RegWrite("HKEY_LOCAL_MACHINE\\SOFTWARE\\CDP\\SnapBack\\Apps\\myinternet\\ManageInternet", "false", "REG_SZ");

wsh = null;