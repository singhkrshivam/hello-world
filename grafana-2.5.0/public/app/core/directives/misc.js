/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","kbn","../core_module"],function(a,b,c){"use strict";c.directive("tip",["$compile",function(c){return{restrict:"E",link:function(d,e,f){var g='<i class="grafana-tip fa fa-'+(f.icon||"question-circle")+'" bs-tooltip="\''+b.addslashes(e.text())+"'\"></i>";g=g.replace(/{/g,"\\{").replace(/}/g,"\\}"),e.replaceWith(c(a.element(g))(d))}}}]),c.directive("watchChange",function(){return{scope:{onchange:"&watchChange"},link:function(a,b){b.on("input",function(){a.$apply(function(){a.onchange({inputValue:b.val()})})})}}}),c.directive("editorOptBool",["$compile",function(b){return{restrict:"E",link:function(c,d,e){var f=e.change?' ng-change="'+e.change+'"':"",g=e.tip?" <tip>"+e.tip+"</tip>":"",h=e.showIf?' ng-show="'+e.showIf+'" ':"",i='<div class="editor-option text-center"'+h+'> <label for="'+e.model+'" class="small">'+e.text+g+'</label><input class="cr1" id="'+e.model+'" type="checkbox"        ng-model="'+e.model+'"'+f+'       ng-checked="'+e.model+'"></input> <label for="'+e.model+'" class="cr1"></label>';d.replaceWith(b(a.element(i))(c))}}}]),c.directive("editorCheckbox",["$compile","$interpolate",function(b,c){return{restrict:"E",link:function(d,e,f){var g=c(f.text)(d),h=c(f.model)(d),i=f.change?' ng-change="'+f.change+'"':"",j=f.tip?" <tip>"+f.tip+"</tip>":"",k='<label for="'+d.$id+h+'" class="checkbox-label">'+g+j+"</label>",l='<input class="cr1" id="'+d.$id+h+'" type="checkbox"        ng-model="'+h+'"'+i+'       ng-checked="'+h+'"></input> <label for="'+d.$id+h+'" class="cr1"></label>';l=k+l,e.replaceWith(b(a.element(l))(d))}}}]),c.directive("gfDropdown",["$parse","$compile","$timeout",function(b,c,d){function e(b,c){var d="top"===c?"dropup":"",f=['<ul class="dropdown-menu '+d+'" role="menu" aria-labelledby="drop1">',"</ul>"];return a.forEach(b,function(a,b){if(a.divider)return f.splice(b+1,0,'<li class="divider"></li>');var c="<li"+(a.submenu&&a.submenu.length?' class="dropdown-submenu"':"")+'><a tabindex="-1" ng-href="'+(a.href||"")+'"'+(a.click?' ng-click="'+a.click+'"':"")+(a.target?' target="'+a.target+'"':"")+(a.method?' data-method="'+a.method+'"':"")+(a.configModal?' dash-editor-link="'+a.configModal+'"':"")+">"+(a.text||"")+"</a>";a.submenu&&a.submenu.length&&(c+=e(a.submenu).join("\n")),c+="</li>",f.splice(b+1,0,c)}),f}return{restrict:"EA",scope:!0,link:function(f,g,h){var i=b(h.gfDropdown),j=i(f);d(function(){var b=g.data("placement"),d=a.element(e(j,b).join(""));d.insertAfter(g),c(g.next("ul.dropdown-menu"))(f)}),g.addClass("dropdown-toggle").attr("data-toggle","dropdown")}}}])});