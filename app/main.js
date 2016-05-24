"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./modules/main/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent).then(function () { return console.info('app bootstrapped'); }, function (error) {
    console.info('Not bootstrap, Error details:' + error);
});
//# sourceMappingURL=main.js.map