this["Templates"] = this["Templates"] || {};
this["Templates"]["layout"] = (function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"wrapper\"><h1>Application</h1><ul><li><a ui-sref=\"public.index\">Home</a></li><li><a ui-sref=\"public.gallery\">Gallery</a></li></ul><div ui-view=\"\"></div></div>");;return buf.join("");
})();
this["Templates"]["views/gallery"] = (function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div gallery-config-buffer=\"4\" class=\"gallery-wrapper\"><div class=\"gallery-slider\"><div gallery-repeater=\"item in gallery\" class=\"gallery-item\"><div class=\"gallery-item-content\">{{item.text}}</div></div></div><button gallery-button=\"animateNext\" class=\"action-button next animate\">Animate next</button><button gallery-button=\"animatePrev\" class=\"action-button prev animate\">Animate prev</button></div>");;return buf.join("");
})();
this["Templates"]["views/index"] = (function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"items-list\"><h2>List items</h2><ul><li ng-repeat=\"item in list\">{{item}}</li></ul></div><div class=\"add-form\"><h5>Add new items</h5><input type=\"text\" name=\"new_item\" ng-model=\"new_item\"/><button ng-click=\"add()\">Add</button></div>");;return buf.join("");
})();