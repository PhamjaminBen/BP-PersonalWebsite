/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[21],{534:function(wa,sa,h){h.r(sa);var pa=h(0),na=h(7),ma=h(3);wa=h(49);var ja=h(27),ia=h(13);h=function(){function ea(){this.init()}ea.prototype.init=function(){this.Qea=!1;this.Ef=this.Gm=this.connection=null;this.du={};this.ga=this.WI=null};ea.prototype.Gya=function(x){for(var y=this,f=0;f<x.length;++f){var e=x[f];switch(e.at){case "create":this.du[e.author]||(this.du[e.author]=e.aName);this.Kna(e);break;case "modify":this.ga.Gp(e.xfdf).then(function(a){y.ga.tb(a[0])});
break;case "delete":this.ga.Gp("<delete><id>"+e.aId+"</id></delete>")}}};ea.prototype.Kna=function(x){var y=this;this.ga.Gp(x.xfdf).then(function(f){f=f[0];f.authorId=x.author;y.ga.tb(f);y.ga.trigger(na.c.UPDATE_ANNOTATION_PERMISSION,[f])})};ea.prototype.gna=function(x,y,f){this.Gm&&this.Gm(x,y,f)};ea.prototype.preloadAnnotations=function(x){this.addEventListener("webViewerServerAnnotationsEnabled",this.gna.bind(this,x,"add",{imported:!1}),{once:!0})};ea.prototype.initiateCollaboration=function(x,
y,f){var e=this;if(x){e.Ef=y;e.ga=f.ma();f.addEventListener(na.h.DOCUMENT_UNLOADED,function(){e.disableCollaboration()});e.hza(x);var a=new XMLHttpRequest;a.addEventListener("load",function(){if(200===a.status&&0<a.responseText.length)try{var b=JSON.parse(a.responseText);e.connection=exports.da.Rza(Object(ja.k)(e.Ef,"blackbox/"),"annot");e.WI=b.id;e.du[b.id]=b.user_name;e.ga.gR(b.id);e.connection.iDa(function(n){n.t&&n.t.startsWith("a_")&&n.data&&e.Gya(n.data)},function(){e.connection.send({t:"a_retrieve",
dId:x});e.trigger(ea.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[e.du[b.id],e.WI])},function(){e.disableCollaboration()})}catch(n){Object(ma.g)(n.message)}});a.open("GET",Object(ja.k)(this.Ef,"demo/SessionInfo.jsp"));a.withCredentials=!0;a.send();e.Qea=!0;e.ga.E5(function(b){return e.du[b.Author]||b.Author})}else Object(ma.g)("Document ID required for collaboration")};ea.prototype.disableCollaboration=function(){this.Gm&&(this.ga.removeEventListener(ia.a.Events.ANNOTATION_CHANGED,this.Gm),this.Gm=
null);this.connection&&this.connection.wr();this.ga&&this.ga.gR("Guest");this.init();this.trigger(ea.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};ea.prototype.hza=function(x){var y=this;this.Gm&&this.ga.removeEventListener(ia.a.Events.ANNOTATION_CHANGED,this.Gm);this.Gm=function(f,e,a){return Object(pa.b)(this,void 0,void 0,function(){var b,n,r,aa,w,ba,fa,z,ca;return Object(pa.d)(this,function(ha){switch(ha.label){case 0:if(a.imported)return[2];b={t:"a_"+e,dId:x,annots:[]};return[4,y.ga.bZ()];case 1:n=
ha.ba();"delete"!==e&&(r=(new DOMParser).parseFromString(n,"text/xml"),aa=new XMLSerializer);for(w=0;w<f.length;w++)ba=f[w],z=fa=void 0,"add"===e?(fa=r.querySelector('[name="'+ba.Id+'"]'),z=aa.serializeToString(fa),ca=null,ba.InReplyTo&&(ca=y.ga.og(ba.InReplyTo).authorId||"default"),b.annots.push({at:"create",aId:ba.Id,author:y.WI,aName:y.du[y.WI],parent:ca,xfdf:"<add>"+z+"</add>"})):"modify"===e?(fa=r.querySelector('[name="'+ba.Id+'"]'),z=aa.serializeToString(fa),b.annots.push({at:"modify",aId:ba.Id,
xfdf:"<modify>"+z+"</modify>"})):"delete"===e&&b.annots.push({at:"delete",aId:ba.Id});0<b.annots.length&&y.connection.send(b);return[2]}})})}.bind(y);this.ga.addEventListener(ia.a.Events.ANNOTATION_CHANGED,this.Gm)};ea.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return ea}();Object(wa.a)(h);sa["default"]=h}}]);}).call(this || window)
