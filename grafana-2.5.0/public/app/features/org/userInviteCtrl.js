/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("UserInviteCtrl",["$scope","backendSrv",function(a,c){a.invites=[{name:"",email:"",role:"Editor"}],a.options={skipEmails:!1},a.init=function(){},a.addInvite=function(){a.invites.push({name:"",email:"",role:"Editor"})},a.removeInvite=function(c){a.invites=b.without(a.invites,c)},a.sendInvites=function(){a.inviteForm.$valid&&a.sendSingleInvite(0)},a.sendSingleInvite=function(b){var d=a.invites[b];return d.skipEmails=a.options.skipEmails,c.post("/api/org/invites",d)["finally"](function(){b+=1,b===a.invites.length?(a.invitesSent(),a.dismiss()):a.sendSingleInvite(b)})}}])});