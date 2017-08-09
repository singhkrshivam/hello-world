/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","moment","lodash","app/core/utils/datemath"],function(a,b,c,d,e){function f(a,b){var c=d.groupBy(k,function(a){return a.active=a.display===b,a.section});return c}function g(a){return a.format(l)}function h(a){-1===a.indexOf("now")&&(a="now-"+a);var b=m[a+" to now"];if(b)return b;b={from:a,to:"now"};var c=/^now-(\d+)(\w)/.exec(a);if(c){var d=c[2],e=parseInt(c[1]),f=j[d];f&&(b.display="Last "+e+" "+f.display,b.section=f.section,e>1&&(b.display+="s"))}else b.display=b.from+" to "+b.to,b.invalid=!0;return b}function i(a){var b=m[a.from.toString()+" to "+a.to.toString()];if(b)return b.display;if(c.isMoment(a.from)&&c.isMoment(a.to))return g(a.from)+" to "+g(a.to);if(c.isMoment(a.from)){var d=e.parse(a.to,!0);return g(a.from)+" to "+d.fromNow()}if(c.isMoment(a.to)){var f=e.parse(a.from,!1);return f.fromNow()+" to "+g(a.to)}var i=h(a.from);return i.display}var j={s:{display:"second"},m:{display:"minute"},h:{display:"hour"},d:{display:"day"},w:{display:"week"},M:{display:"month"},y:{display:"year"}},k=[{from:"now/d",to:"now/d",display:"Today",section:2},{from:"now/d",to:"now",display:"The day so far",section:2},{from:"now/w",to:"now/w",display:"This week",section:2},{from:"now/w",to:"now",display:"Week to date",section:2},{from:"now/M",to:"now/M",display:"This month",section:2},{from:"now/y",to:"now/y",display:"This year",section:2},{from:"now-1d/d",to:"now-1d/d",display:"Yesterday",section:1},{from:"now-2d/d",to:"now-2d/d",display:"Day before yesterday",section:1},{from:"now-7d/d",to:"now-7d/d",display:"This day last week",section:1},{from:"now-1w/w",to:"now-1w/w",display:"Previous week",section:1},{from:"now-1M/M",to:"now-1M/M",display:"Previous month",section:1},{from:"now-1y/y",to:"now-1y/y",display:"Previous year",section:1},{from:"now-5m",to:"now",display:"Last 5 minutes",section:3},{from:"now-15m",to:"now",display:"Last 15 minutes",section:3},{from:"now-30m",to:"now",display:"Last 30 minutes",section:3},{from:"now-1h",to:"now",display:"Last 1 hour",section:3},{from:"now-6h",to:"now",display:"Last 6 hours",section:3},{from:"now-12h",to:"now",display:"Last 12 hours",section:3},{from:"now-24h",to:"now",display:"Last 24 hours",section:3},{from:"now-7d",to:"now",display:"Last 7 days",section:3},{from:"now-30d",to:"now",display:"Last 30 days",section:0},{from:"now-60d",to:"now",display:"Last 60 days",section:0},{from:"now-90d",to:"now",display:"Last 90 days",section:0},{from:"now-6M",to:"now",display:"Last 6 months",section:0},{from:"now-1y",to:"now",display:"Last 1 year",section:0},{from:"now-2y",to:"now",display:"Last 2 years",section:0},{from:"now-5y",to:"now",display:"Last 5 years",section:0}],l="MMM D, YYYY HH:mm:ss",m={};return d.each(k,function(a){m[a.from+" to "+a.to]=a}),{getRelativeTimesList:f,describeTextRange:h,describeTimeRange:i}});