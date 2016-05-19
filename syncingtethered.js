// JavaScript Document syncingtethered.js

// Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\myinternet\\btn2arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var programs = xmlDoc.getElementsByTagName('ApplySyncTetherTo');

// Script what you want to happen based upon the arguments returned
// When your Arguments are in Checkboxes, you Need to Account for Zero Arguments Selected
if ( xmlDoc.getElementsByTagName("ApplySyncTetherTo").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "You have not specified what programs you wish to apply the disable syncing for if on a tethered internet connection. Please make a selection or selections and run the button again.", 5, "Selected Vehicle" );

	wsh = null;
}

else if (programs){
	for (var i = 0; i < programs.length; i++) { 
		var program = programs[i].firstChild.nodeValue;
		if (program == "GoodSync"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Snycing for "+ program +" would be disabled while tethered.", 5, "Pause Syncing" );

			wsh = null;
		}
		else if (program == "SugarSync"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Snycing for "+ program +" would be disabled while tethered.", 5, "Pause Syncing" );

			wsh = null;
		}
		else if (program == "BitTorrent"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Snycing for "+ program +" would be disabled while tethered.", 5, "Pause Syncing" );

			wsh = null;
		}
		else if (program == "Dropbox"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Snycing for "+ program +" would be disabled while tethered.", 5, "Pause Syncing" );

			wsh = null;
		}
		else if (program == "Google Drive"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Snycing for "+ program +" would be disabled while tethered.", 5, "Pause Syncing" );

			wsh = null;
		}
	}
}
