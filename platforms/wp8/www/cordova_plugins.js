cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.plugin.admob/www/AdMob.js",
        "id": "com.rjfun.cordova.plugin.admob.AdMob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.rjfun.cordova.plugin.admob": "2.1.7",
    "org.apache.cordova.vibration": "0.3.13",
    "com.google.admobsdk": "6.12.2"
}
// BOTTOM OF METADATA
});