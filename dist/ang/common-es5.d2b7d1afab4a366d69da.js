(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{m6nQ:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("8Y7J"),a=n("IheW"),i=function(){var t=function(){function t(t){this.http=t,this._url="http://backend.us-east-2.elasticbeanstalk.com/users/save",this._urlgetall="http://backend.us-east-2.elasticbeanstalk.com/users",this._urlView="http://backend.us-east-2.elasticbeanstalk.com/users/show",this.getAgent="http://backend.us-east-2.elasticbeanstalk.com/agent/viewAgent"}var e=t.prototype;return e.get_Users=function(){return this.http.get(this._urlgetall)},e.getAgentDetail=function(){return this.http.get(this.getAgent)},e.view_User=function(t){return this.http.get(this._urlView+"/"+t)},t}();return t.ngInjectableDef=s.Mb({factory:function(){return new t(s.Nb(a.c))},token:t,providedIn:"root"}),t}()}}]);