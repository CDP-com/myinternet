//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "myinternet";				// This app's name / folder name which must be unique
var apptitle = "Manage My Internet";			// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/manage-my-internet/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 2;                            // This is the number of buttons on the App Home tab in main.html

// Setup for Button0 (The First Button)
var btn0_Title = "Turn ON Manage My Internet";		// This is what is displayed on the button.
var btn0_MouseOver = "Clicking this button will turn on SnapBack&#39;s internet management services and, subsequently, turn off updates when it is detected that you are on a tethered or shared connection, thus saving you precious data and bandwidth.";	// This is what appears upon mouseover for the button.
var btn0_Description = "With the 'Manage My Internet' app turned on, updates from Windows and other software will be turned off when it is detected that you are on a tethered or otherwise shared connection.  In doing so, you save precious bandwidth and will prevent updates from eating into your data plan.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "Clicking this button will turn on SnapBack's internet management services and, subsequently, turn off updates when it is detected that you are on a tethered or shared connection, thus saving you precious data and bandwidth.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "manageinterneton.js";	// This is the actual script the button will be calling.
var btn0_Source = "manageinterneton.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn0_arguments=0; 						// Must specify if your button has any arguments, even if its 0 (zero) 

// Permissions for Button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="btn0";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=1;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
}




// Setup for Button1 (The Second Button)
var btn1_Title = "Turn OFF Manage My Internet";		// This is what is displayed on the button.
var btn1_MouseOver = "Clicking this button will turn off SnapBack&#39;s internet management services.  Warning: Doing so can allow various updates to clog your bandwidth and eat into your data plan.";	// This is what appears upon mouseover for the button.
var btn1_Description = "Turn OFF the Manage My Internet app.  <strong>Warning:</strong> this will allow updates to run even if you are on a tethered, shared, or slow connection.  You may experience a slower internet connection speed and updates may potentially cause data plan overages.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Why = "Clicking this button will turn off SnapBack's internet management services.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "manageinternetoff.js";	// This is the actual script the button will be calling.
var btn1_Source = "manageinternetoff.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn1_arguments=0; 						// Must specify if your button has any arguments, even if its 0 (zero) 

// Permissions for Button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button0"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="btn1";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=1;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn1( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
}




	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

function myInternetStatus() {
	try {
		var internetMnagementStatus = ReadFromRegistry("HKEY_LOCAL_MACHINE\\SOFTWARE\\CDP\\SnapBack\\Apps\\myinternet\\ManageInternet");
		var s= "<div class='statusdiv'>";
		if (internetMnagementStatus == "true") {
			s+="Manage My Internet is <font color=\"green\"><strong>ON</strong></font> for this Machine";
		}
		else {
			s+="Manage My Internet is <font color=\"red\"><strong>OFF</strong></font> for this Machine";
		}
		s+="</div>";
		document.write(s);
	}
	catch(e) {
		var s="<div class='statusdiv'>Manage My Internet is <font color=\"red\"><strong>OFF</strong></font> for this Machine</div>";
		document.write(s);
	}
}

$(document).ready(function() {
	try {
		if (internetMnagementStatus == "true") {
			$( '#cdpbutton1 button' ).css('background-color','#e6e6e6').css( 'cursor', 'not-allowed' ).attr("disabled", 'disable').attr("title", 'This button cannot be clicked since you currently have the Manage My Internet app turned ON');
		}
		else {
			$( '#cdpbutton2 button' ).css('background-color','#e6e6e6').css( 'cursor', 'not-allowed' ).attr("disabled", 'disable').attr("title", 'This button cannot be clicked since you currently have the Manage My Internet app turned OFF');
		}
	}
	catch(e) {
		$( '#cdpbutton2 button' ).css('background-color','#e6e6e6').css( 'cursor', 'not-allowed' ).attr("disabled", 'disable').attr("title", 'This button cannot be clicked since you currently have the Manage My Internet app turned OFF')
	}
})
