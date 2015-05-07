/*jshint undef:false */
// var meter = new FPSMeter();
function testMobile() {
	return Modernizr.touch;// || window.innerWidth < 600;//true;// Modernizr.touch || window.innerWidth < 600;
}

var res = {x:window.outerWidth, y: window.outerHeight};
// var res = {x:375, y:667};
var resizeProportional = true;

var windowWidth = res.x;
var windowHeight = res.y;

var realWindowWidth = res.x;
var realWindowHeight = res.y;

var gameScale = 1;

var screenOrientation = 'portait';

var windowWidthVar = window.innerWidth;
var windowHeightVar = window.innerHeight;

var gameView = document.getElementById('game');
if(!testMobile()){
	document.body.className = '';
}
console.log(gameView);

window.addEventListener('orientationchange', function() {
	window.scrollTo(0, 0);
}, false);

var ratio = 1;

var init = false;

var renderer;
var APP;

var retina = window.devicePixelRatio >= 2 ? 2 : 1;

function isPortait(){
	return window.innerHeight > window.innerWidth;
}

function possibleFullscreen(){
	var elem = gameView;
	return  elem.requestFullscreen || elem.msRequestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen;
}

function updateResolution(orientation, scale){
	if(orientation === 'portait'){
		if(screen.height > screen.width){
			windowWidth = screen.width * scale;
			windowWidthVar = screen.width;
			
			if(possibleFullscreen()){
				windowHeight =  screen.height * scale;
				windowHeightVar =  screen.height;
				
			}else{
				windowHeight =  window.devicePixelRatio >= 2 ? window.innerHeight * scale : window.outerHeight * scale;//window.outerHeight * scale;
				
				windowHeight =  window.outerHeight * scale;
				windowHeightVar =  window.outerHeight* scale;
			}
			

		}else{
			windowWidth = screen.height * scale;
			windowHeight = screen.width * scale;

			windowWidthVar = screen.height;
			windowHeightVar = screen.width;
		}
	}else{
		if(screen.height < screen.width){
			windowWidth = screen.width * scale;
			windowHeight = screen.height * scale;

			windowWidthVar = screen.width;
			windowHeightVar = screen.height;
		}else{
			windowWidth = screen.height * scale;
			windowHeight = screen.width * scale;

			windowWidthVar = screen.height;
			windowHeightVar = screen.width;
		}
	}
	realWindowWidth = windowWidth;
	realWindowHeight = windowHeight;
}
function update() {
	requestAnimFrame(update );
	if(!init){

		windowWidth = res.x;
		windowHeight = res.y - 50;

		realWindowWidth = res.x;
		realWindowHeight = res.y;

		if(testMobile()){
			// updateResolution(screenOrientation, gameScale);
			renderer = PIXI.autoDetectRecommendedRenderer(realWindowWidth, realWindowHeight, {antialias:true, resolution:retina, view:gameView});
		}else{
			renderer = PIXI.autoDetectRenderer(realWindowWidth, realWindowHeight, {antialias:true, resolution:retina, view:gameView});
		}
		retina = 2;
		// alert('init');
		renderer.view.style.width = windowWidthVar+'px';
		renderer.view.style.height = (windowHeightVar + 26)+'px';
		// alert('init1');
		APP = new Application();
		// alert('init2');
		APP.build();
		// alert('init3');
		APP.show();
		init = true;
		// alert(windowWidthVar+' - '+windowHeightVar);
	}
	
	// meter.tickStart();
	// var tempRation =  (window.innerHeight/windowHeight);
	// var ratioRez = resizeProportional ? tempRation < (window.innerWidth/realWindowWidth)?tempRation:(window.innerWidth/realWindowWidth) : 1;
	// windowWidthVar = realWindowWidth * ratioRez * ratio;
	// windowHeightVar = realWindowHeight * ratioRez * ratio;

	// //proportional
	// if(windowWidthVar > realWindowWidth)
	// {
	// 	windowWidthVar = realWindowWidth;
	// }
	// if(windowHeightVar > realWindowHeight)
	// {
	// 	windowHeightVar = realWindowHeight;
	// }
	if(renderer){
		// renderer.view.style.height = windowWidthVar+'px';
		// renderer.view.style.width = windowHeightVar+'px';

		
		APP.update();
		renderer.render(APP.stage);
	}
	// meter.tick();
}

var initialize = function(){
	// alert('initia');
	PIXI.BaseTexture.SCALE_MODE = PIXI.scaleModes.NEAREST;
	requestAnimFrame(update);
};

var isfull = false;
function fullscreen(){
	if(isfull){
		return;
	}
	var elem = gameView;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}

	updateResolution(screenOrientation, gameScale);

	isfull = true;
}

// alert(window.intel);

// window.intel = true;
window.console.log = function(){};
// initialize();
document.addEventListener('deviceready', function() {
	initialize();
	// alert(admobAd);

	window.plugins.AdMob.setOptions( {
        publisherId: 'ca-app-pub-9306461054994106/3948461573',
        // interstitialAdId: admobid.interstitial,
        bannerAtTop: false, // set to true, to put banner at top
        overlap: false, // set to true, to allow banner overlap webview
        offsetTopBar: false, // set to true to avoid ios7 status bar overlap
        isTesting: false, // receiving test ad
        autoShow:true
    });
	window.plugins.AdMob.createBannerView();
	window.plugins.AdMob.showAd(true,function(){},function(e){
		//alert(JSON.stringify(e));
	});
	// admobAd.initBanner('ca-app-pub-9306461054994106/3948461573', admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);//create admob banner
	// admobAd.showBannerAbsolute(0,0);//show banner at absolute position

});
// };
// (function() {
// 	var App = {
// 		init: function () {
// 			if(window.intel !== undefined){
// 				document.addEventListener('deviceready', function() {
// 					alert('device ready');
// 					initialize();
// 				});
// 			}else{
// 				initialize();
// 			}
// 		}
// 	};
// 	App.init();
// })();