# Overview #
show admob banner and full screen ad

[android, ios, wp8] [phonegap cli] [crosswalk]

requires admob account http://www.google.com/ads/admob/

```c
Change Log:

2014.9.17
	supports SKYSCRAPER size (120x600, Tablets, ipad only)
	Added additional example (example/banner_position_size/index.html)
2014.9.18
	supports isTest
	supports other position: 'top-left', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-right' on android, wp8.
	supports SMART_BANNER resize when orientation changes on android.
2014.9.20
	supports isOverlap on android, ios, wp8
2014.9.24
	supports banner ad callback (onBannerAdLoaded)
	supports full screen ad callback (onFullScreenAdLoaded)
2014.10.3
	supports banner ad callback (onBannerAdPreloaded)
	supports full screen ad callback (onFullScreenAdPreloaded)
1.0.31
	Updated Admob SDK
		iOS 6.12.2

To-Do:

	supports ios split mode
	supports wp8 split mode
	supports other position: 'top-left', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-right' on ios.
	supports banner reposition when orientation changes on ios.
	supports SMART_BANNER resize when orientation changes on ios.	
```
# Server setting #
```c
```
# Install phonegap plugin #

## Crosswalk ##
```c
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: admob
Plugin ID: com.cranberrygame.phonegap.plugin.ad.admob
[v] Plugin is located in the Apache Cordova Plugins Registry

cf)apple app store meta data

xport Compliance
	Have you added or made changes to encryption features since your last submission of this app? (No)

Advertising Identifier
	Does this app use the Advertising Identifier (IDFA)? (Yes)
	
	This app uses the Advertising Identifier to (select all that apply):
		Serve advertisements within the app (check)
	
	Limit Ad Tracking setting in iOS (check)	
	
Previous Purchase Restrictions
	Are you updating this app because of a significant usability issue or for a legal issue, such as an infringement claim? (No)
```
## Phonegap cli ##
```c
cordova plugin add com.cranberrygame.phonegap.plugin.ad.admob

cf)apple app store meta data

xport Compliance
	Have you added or made changes to encryption features since your last submission of this app? (No)

Advertising Identifier
	Does this app use the Advertising Identifier (IDFA)? (Yes)
	
	This app uses the Advertising Identifier to (select all that apply):
		Serve advertisements within the app (check)
	
	Limit Ad Tracking setting in iOS (check)	
	
Previous Purchase Restrictions
	Are you updating this app because of a significant usability issue or for a legal issue, such as an infringement claim? (No)
```
## Phonegap build service (construct2 automatically add this tag to config.xml) ##
```c
not yet supported
```
# API #
```javascript
var adUnit = "REPLACE_THIS_WITH_YOUR_AD_UNIT";
var adUnitFullScreen = "REPLACE_THIS_WITH_YOUR_AD_UNIT";
var isOverlap = true; //true: overlap, false: split
var isTest = true;

/*
var adUnit;
var adUnitFullScreen;
var isOverlap = true; //true: overlap, false: split
var isTest = true;
//android
if (navigator.userAgent.match(/Android/i)) {
	adUnit = "REPLACE_THIS_WITH_YOUR_ANDROID_AD_UNIT";
	adUnitFullScreen = "REPLACE_THIS_WITH_YOUR_ANDROID_AD_UNIT";
}
//ios
else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	adUnit = "REPLACE_THIS_WITH_YOUR_IOS_AD_UNIT";
	adUnitFullScreen = "REPLACE_THIS_WITH_YOUR_IOS_AD_UNIT";
}
//wp8
else if( navigator.userAgent.match(/Windows Phone/i) ) {
	adUnit = "REPLACE_THIS_WITH_YOUR_WP8_AD_UNIT";
	adUnitFullScreen = "REPLACE_THIS_WITH_YOUR_WP8_AD_UNIT";
}
*/

document.addEventListener("deviceready", function(){
	window.admob.setUp(adUnit, adUnitFullScreen, isOverlap, isTest);

	//banner ad callback
	window.admob.onBannerAdPreloaded = function() {
		alert('onBannerAdPreloaded');
	};
	window.admob.onBannerAdLoaded = function() {
		alert('onBannerAdLoaded');
	};
	//full screen ad callback
	window.admob.onFullScreenAdPreloaded = function() {
		alert('onFullScreenAdPreloaded');
	};
	window.admob.onFullScreenAdLoaded = function() {
		alert('onFullScreenAdLoaded');
	};
	window.admob.onFullScreenAdShown = function() {
		alert('onFullScreenAdShown');
	};
	window.admob.onFullScreenAdHidden = function() {
		alert('onFullScreenAdHidden');
	};
}, false);

window.admob.preloadBannerAd();
/*
position: 'top-left', 'top-center', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right'
size: 	'BANNER' (320x50, Phones and Tablets)
		'LARGE_BANNER' (320x100, Phones and Tablets)
		'MEDIUM_RECTANGLE' (300x250, Phones and Tablets)
		'FULL_BANNER' (468x60, Tablets)
		'LEADERBOARD' (728x90, Tablets)
		'SKYSCRAPER' (120x600, Tablets, ipad only)
		'SMART_BANNER' (Auto size, Phones and Tablets, recommended)
*/
window.admob.showBannerAd('top-center', 'SMART_BANNER');
window.admob.showBannerAd('bottom-center', 'SMART_BANNER');
window.admob.reloadBannerAd();
window.admob.hideBannerAd();

window.admob.preloadFullScreenAd();
window.admob.showFullScreenAd();
window.admob.reloadFullScreenAd();
```
# Examples #
<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.ad.admob/blob/master/example/index.html">example/index.html</a><br>
<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.ad.admob/blob/master/example/advanced/index.html">example/advanced/index.html</a>
# Test #

# How to build crosswalk and fix build error #

See https://dl.dropboxusercontent.com/u/186681453/howto/how_to_build_crosswalk_and_fix_build_error/index.html
# Free advertising for games/apps made with crosswalk related c2 plugins (+Phonegap) #

Reply this post, then I'll add your games/apps to the list: https://www.scirra.com/forum/viewtopic.php?t=115517
# Useful links #
Crosswalk related c2 plugins (+Phonegap)<br>
https://www.scirra.com/forum/viewtopic.php?t=109586
# Credits #
