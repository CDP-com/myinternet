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

var btncount = 3;                            // This is the number of buttons on the App Home tab in main.html

// Setup for Button0 (The First Button)
var btn0_Title = "Pause All Updates";		// This is what is displayed on the button.
var btn0_MouseOver = "Pause all updates for a list of programs for a given period of time.";	// This is what appears upon mouseover for the button.
var btn0_Description = "Once this button is clicked, all programs you have selected will have their update process paused for the given time period you specified. This would be helpful during situations in which you wish to get the most out of your bandwidth.  For example, if you want the best quality streaming video, click this button to pause all program updates that could potentially steal your bandwidth. After the period of time you specify, updates will return to normal without you having to do anything extra.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "You may want to run this button if you are streaming video or playing a game and wish to get the most out of your bandwidth for a set period. Additionally, you may consider running this button if you know you will be on a limited connection for a certain period of time, such as when you are flying or are on a cruise ship.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "pauseupdates.js";	// This is the actual script the button will be calling.
var btn0_Source = "pauseupdates.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn0_arguments=1;						// Must specify if your button has any arguments, even if its 0 (zero)  
var btn0_arguments0DisplayName = "Time of Pause";	// The name of your argument option which is displayed to the user
var btn0_arguments0xmlName= "UpdatePauseTime";	// The section name which for your argument in the xml file and which should be all one word
var btn0_arguments0Type = "radio";		// The type of input to display your argument.  Currently supporting "checkbox" and "radio"
var btn0_arguments0TypeDisplay = "Inline";	// How do you want to display your agument values? "Inline" for one right next each other or "Break" for a line break after each option.
var btn0_arguments0Values = ["1 Hour","12 Hours","1 Day","1 Week"];	// The values for this argument, which are in an array
var btn0_arguments0Default = ["1 Hour"];	// The default value which is selected upon page load and before the button is ever run
var btn0_arguments0Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

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
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
}




// Setup for Button1 (The Second Button)
var btn1_Title = "Pause All Syncing";		// This is what is displayed on the button.
var btn1_MouseOver = "Pause all syncing for a list of programs for a given period of time.";	// This is what appears upon mouseover for the button.
var btn1_Description = "Sync programs, which check your local machine and sync it to the cloud, can take precious bandwidth and slow down your internet experience. By pausing syncing for a given period of time, you can reclaim this bandwidth. After the time period you specify, syncing will turn back on without any additional work on your part.";		// This is what is displayed as the description of the button.
var btn1_Why = "You may want to run this button if you are streaming video or playing a game and wish to get the most out of your bandwidth for a set period. Additionally, you may consider running this button if you know you will be on a limited connection for a certain period of time, such as when you are flying or are on a cruise ship.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "pausesyncing.js";	// This is the actual script the button will be calling.
var btn1_Source = "pausesyncing.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Button1 Arguments
var btn1_arguments=1;						// Must specify if your button has any arguments, even if its 0 (zero)  
var btn1_arguments0DisplayName = "Time of Pause";	// The name of your argument option which is displayed to the user
var btn1_arguments0xmlName= "SyncPauseTime";	// The section name which for your argument in the xml file and which should be all one word
var btn1_arguments0Type = "radio";		// The type of input to display your argument.  Currently supporting "checkbox" and "radio"
var btn1_arguments0TypeDisplay = "Inline";	// How do you want to display your agument values? "Inline" for one right next each other or "Break" for a line break after each option.
var btn1_arguments0Values = ["1 Hour","12 Hours","1 Day","1 Week"];	// The values for this argument, which are in an array
var btn1_arguments0Default = ["1 Hour"];	// The default value which is selected upon page load and before the button is ever run
var btn1_arguments0Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

// Permissions for Button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
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
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn1( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}




// Setup for Button2 (The Third Button)
var btn2_Title = "Block Syncing Over Tethering";		// This is what is displayed on the button.
var btn2_MouseOver = "If you are tethered to another device, SnapBack will detect this and prevent your syncing programs from taking up this limited connection.";	// This is what appears upon mouseover for the button.
var btn2_Description = "With this button enabled, if SnapBack detects you are tethered to another device, then all syncing will be disabled. Once SnapBack detects you are on a normal WIFI or network connection, syncing will be allowed to resume. This helps prevent programs from stealing your bandwidth and can prevent possible data overage charges. It is truly a set-it-and-forget-it button.";		// This is what is displayed as the description of the button.
var btn2_Why = "If you are tethered to another device, SnapBack will detect this and prevent your syncing programs from taking up this limited connection. Run this button to permanently disable syncing if you are tethered.";		// Use this to explain to an end user why they would want to run this button.
var btn2_Command = "syncingtethered.js";	// This is the actual script the button will be calling.
var btn2_Source = "syncingtethered.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn2_id="btn2";							// The unique ID of the button.  Please follow the format provided.

// Button2 Arguments
var btn2_arguments=0;						// Must specify if your button has any arguments, even if its 0 (zero)  

// Permissions for Button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn2_KeyValue="button1"; 				// Key value name for the registry
var btn2_DefaultEnableButton=1;
var btn2_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn2_DefaultAllowUser=1;
var btn2_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn2_DefaultCaution=1;
var btn2_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn2_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn2_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn2_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn2( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}




	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

// Check the Status of Everything and Adjust UI Accordingly
function CheckStatus() {
		// To Do: Check Registry for Specific Values, Try/Catch, and Report Current Status
		var s="<div class='statusdiv'>Updates Are Currently <font color=\"red\"><strong>ENABLED</strong></font> | Syncing Is Currently <font color=\"red\"><strong>ENABLED</strong></font><br />Syncing Over Tethered Connection is Currently <font color=\"red\"><strong>ENABLED</strong></font></div>";
		document.write(s);		
}
