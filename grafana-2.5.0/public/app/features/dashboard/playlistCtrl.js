/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","config"],function(a,b,c){"use strict";var d=a.module("grafana.controllers");d.controller("PlaylistCtrl",["$scope","playlistSrv","backendSrv",function(a,d,e){a.init=function(){a.playlist=[],a.timespan=c.playlist_timespan,a.search()},a.search=function(){var b={starred:!0,limit:10};a.searchQuery&&(b.query=a.searchQuery,b.starred=!1),e.search(b).then(function(b){a.searchHits=b,a.filterHits()})},a.filterHits=function(){a.filteredHits=b.reject(a.searchHits,function(c){return b.findWhere(a.playlist,{uri:c.uri})})},a.addDashboard=function(b){a.playlist.push(b),a.filterHits()},a.removeDashboard=function(c){a.playlist=b.without(a.playlist,c),a.filterHits()},a.start=function(){d.start(a.playlist,a.timespan)}}])});