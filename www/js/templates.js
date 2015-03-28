this["Templates"] = this["Templates"] || {};
this["Templates"]["layout"] = (function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>Layout</h1><div ui-view=\"\"></div>");;return buf.join("");
})();
this["Templates"]["views/index"] = (function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"items-list\"><h2>List items</h2><ul><li ng-repeat=\"item in list\">{{item}}</li></ul></div><div class=\"add-form\"><h5>Add new items</h5><input type=\"text\" name=\"new_item\" ng-model=\"new_item\"/><button ng-click=\"add()\">Add</button></div>");;return buf.join("");
})();