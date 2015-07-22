var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var menu_1 = require('src/menu');
var DmpApp = (function () {
    function DmpApp() {
        this.name = 'Main dashboard';
    }
    DmpApp = __decorate([
        angular2_1.Component({
            selector: 'dmp-app',
            directives: [menu_1.DmpRtMenu]
        }),
        angular2_1.View({
            templateUrl: System.baseURL + 'templates/dmp.html',
        }), 
        __metadata('design:paramtypes', [])
    ], DmpApp);
    return DmpApp;
})();
exports.DmpApp = DmpApp;
angular2_1.bootstrap(DmpApp);
