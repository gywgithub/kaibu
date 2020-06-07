(function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c2c04d0a"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d07":function(e,t,n){"use strict";var i=n("3f9c"),r=n.n(i);r.a},"3f9c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"ImageLayer",(function(){return T})),n.d(i,"VectorLayer",(function(){return Y})),n.d(i,"ItkVtkLayer",(function(){return le}));n("c975"),n("d81d"),n("a434"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),c={},l=Object(s["a"])(c,a,o,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ImageViewer",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-page"},[n("section",{staticClass:"sidebar-layout"},[n("b-sidebar",{attrs:{position:e.position,fullheight:!0,fullwidth:!1,overlay:!1,open:e.open,mobile:e.mobile,"expand-on-hover":e.expandOnHover,reduce:e.reduce,type:"is-light"},on:{"update:open":function(t){e.open=t}}},[n("div",{staticClass:"p-1"},[n("div",{staticClass:"block"},[n("img",{staticStyle:{width:"220px"},attrs:{src:"static/img/kaibu-banner.svg"}})]),n("div",{staticClass:"block"},[n("div",{staticClass:"field"},[n("b-switch",{model:{value:e.showGallery,callback:function(t){e.showGallery=t},expression:"showGallery"}},[e._v("Gallery")])],1),n("div",{staticClass:"field"},[n("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:e._u([{key:"trigger",fn:function(t){var i=t.active;return n("button",{staticClass:"button"},[n("span",[e._v("+ Add layer")]),n("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}])},e._l(e.layerTypes,(function(t,i){return n("b-dropdown-item",{key:i,attrs:{value:i,"aria-role":"listitem"},on:{click:function(t){return e.newLayer(i)}}},[e._v(e._s(i))])})),1)],1)]),n("b-menu",{directives:[{name:"sortable",rawName:"v-sortable",value:e.sortableOptions,expression:"sortableOptions"}],staticClass:"is-custom-mobile",on:{sorted:function(t){return e.layerSorted()}}},[n("b-menu-list",{attrs:{label:"Layers"}},e._l(e.layer_configs.slice().reverse(),(function(t){return n("b-menu-item",{key:t.id,staticClass:"layer-item",on:{click:function(n){return e.selectLayer(t)}}},[n("template",{slot:"label"},[n("button",{staticClass:"button is-small",on:{click:function(n){return e.toggleVisible(t)}}},[t.visible?n("b-icon",{attrs:{icon:"eye-outline"}}):n("b-icon",{attrs:{icon:"eye-off-outline"}})],1),e._v(" "+e._s(t.name)+" "),n("b-dropdown",{staticClass:"is-pulled-right",attrs:{"aria-role":"list",position:"is-bottom-left"}},[n("b-icon",{attrs:{slot:"trigger",icon:"dots-vertical"},slot:"trigger"}),n("b-dropdown-item",{attrs:{"aria-role":"listitem",icon:"close-circle"},on:{click:function(n){return e.removeLayer(t)}}},[e._v("Remove")])],1)],1)],2)})),1)],1),n("hr",{staticClass:"solid"}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentLayer,expression:"currentLayer"}],staticClass:"block",staticStyle:{"min-height":"150px"}},[n("b-menu-list",{attrs:{label:"Properties"}},e._l(e.layer_configs,(function(t){return n(e.layerTypes[t.type],{directives:[{name:"show",rawName:"v-show",value:e.currentLayer===t,expression:"currentLayer === layer"}],key:t.id,ref:"layer_"+t.id,refInFor:!0,tag:"component",attrs:{selected:t.selected,visible:t.visible,map:e.map,config:t}})})),1)],1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showGallery,expression:"showGallery"}],staticClass:"p-1"},[n("gallery",{attrs:{collections:e.collections}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showGallery,expression:"!showGallery"}],staticClass:"p-1"},[n("div",{attrs:{id:"map"}}),e.activeSliders?n("section",{staticClass:"slider-container"},e._l(e.activeSliders,(function(t){return n("b-field",{key:t.name,staticStyle:{"margin-bottom":"0px!important"}},[n("label",{staticClass:"label slider-label"},[e._v(e._s(t.name))]),n("b-slider",{staticClass:"slider-body",attrs:{min:t.min||0,max:t.max||1,step:t.step||1},on:{input:t.changed},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"slider.value"}})],1)})),1):e._e()])],1)])},h=[],v=(n("b0c0"),n("5530")),g=(n("5bc0"),n("5eee")),b=n("a2c7");n("25f0");function w(){return Math.random().toString(36).substr(2,10)}var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery container"},[!e.collections||e.collections.length<=0?n("p",[e._v(" Nothing to show in the gallery ")]):e._e(),e._l(e.collections,(function(t){return n("div",{key:t.name,staticClass:"container"},[n("div",{staticClass:"columns"},e._l(t.items,(function(t){return n("div",{key:t.name,staticClass:"card column"},[e._m(0,!0),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[e._m(1,!0),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(t.name))])])])])])})),0)])}))],2)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],k={name:"Gallery",props:{collections:{type:Array,default:null}}},C=k,P=Object(s["a"])(C,_,x,!1,null,null,null),L=P.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-layer"},[n("section",[n("b-field",{attrs:{label:"opacity"}},[n("b-slider",{attrs:{min:0,max:1,step:.1},on:{input:e.updateOpacity},model:{value:e.config.opacity,callback:function(t){e.$set(e.config,"opacity",t)},expression:"config.opacity"}})],1),e.config.climit?n("b-field",{attrs:{label:"contrast limit"}},[n("b-slider",{attrs:{min:1,max:255,step:.5,ticks:""},model:{value:e.config.climit,callback:function(t){e.$set(e.config,"climit",t)},expression:"config.climit"}})],1):e._e()],1)])},O=[],j=n("e7df"),S=n("c810"),E=n("f5dd"),V={name:"image-layer",type:"image",props:{map:{type:g["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{visible:function(e){this.layer.setVisible(e)}},mounted:function(){var e=this;this.config.climit=[4,50],this.config.opacity=1,this.config.sliders=[{name:"Z",min:0,max:1e3,step:1,value:3,changed:function(){console.log("z slider changed.")}},{name:"T",min:0,max:100,step:1,value:3,changed:function(){console.log("t slider changed.")}}],Promise.resolve(this.getLayer()).then((function(t){e.layer=t,e.config.layer=t,e.map.addLayer(e.layer),e.$forceUpdate()}))},beforeDestroy:function(){this.layer&&this.map.removeLayer(this.layer)},created:function(){},methods:{updateOpacity:function(){this.layer&&this.layer.setOpacity(this.config.opacity)},selectLayer:function(){},getLayer:function(){var e=[0,0,1024,968],t=new E["a"]({code:"xkcd-image",units:"pixels",extent:e}),n=new j["a"]({attributions:'<a href="https://imgs.xkcd.com">xkcd</a>',url:"https://imgs.xkcd.com/comics/online_communities.png",projection:t,imageExtent:e}),i=new S["a"]({source:n});return i}}},$=V,D=Object(s["a"])($,I,O,!1,null,null,null),T=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vector-layer"},[n("section",[n("div",{staticClass:"field"},[n("b-switch",{on:{input:function(t){return e.updateDrawInteraction()}},model:{value:e.config.enableDraw,callback:function(t){e.$set(e.config,"enableDraw",t)},expression:"config.enableDraw"}},[e._v("Enable Draw")])],1),n("div",{staticClass:"field"},[n("b-switch",{on:{input:function(t){return e.updateDrawInteraction()}},model:{value:e.config.freehand,callback:function(t){e.$set(e.config,"freehand",t)},expression:"config.freehand"}},[e._v("Freehand")])],1),n("div",{staticClass:"field"},[n("b-dropdown",{attrs:{"aria-role":"list"},on:{change:function(t){return e.updateDrawInteraction()}},scopedSlots:e._u([{key:"trigger",fn:function(t){var i=t.active;return n("button",{staticClass:"button is-primary"},[n("span",[e._v(e._s(e.config.draw_type))]),n("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}]),model:{value:e.config.draw_type,callback:function(t){e.$set(e.config,"draw_type",t)},expression:"config.draw_type"}},[n("b-dropdown-item",{attrs:{value:"Polygon","aria-role":"listitem"}},[e._v("Polygon")]),n("b-dropdown-item",{attrs:{value:"LineString","aria-role":"listitem"}},[e._v("LineString")]),n("b-dropdown-item",{attrs:{value:"Circle","aria-role":"listitem"}},[e._v("Circle")]),n("b-dropdown-item",{attrs:{value:"Point","aria-role":"listitem"}},[e._v("Point")])],1)],1)])])},R=[],z=(n("96cf"),n("1da1")),A=n("3e6b"),B=n("ce2c"),G=n("6c77"),W=n("83a6"),N=n("8682"),F=n("ac29"),U=n("5831");function H(){for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t}var q={name:"vector-layer",type:"vector",props:{map:{type:g["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{selected:function(){this.updateDrawInteraction()},visible:function(e){this.layer.setVisible(e),this.updateDrawInteraction()}},mounted:function(){var e=this;this.config.draw_type="Polygon",this.config.line_width=4,this.config.freehand=!0,this.config.enableDraw=!0,this.config.label="cell",this.config.color=H(),Promise.resolve(this.getLayer()).then((function(t){e.layer=t,e.config.layer=t,e.map.addLayer(e.layer),e.updateDrawInteraction(),e.$forceUpdate()}))},beforeDestroy:function(){this.layer&&(this.removeDrawInteraction(),this.map.removeLayer(this.layer))},created:function(){},methods:{getLayer:function(){this.vector_source=new U["a"];var e=new A["a"]({source:this.vector_source,style:new G["c"]({fill:new W["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new N["a"]({color:this.config.color,width:2}),image:new B["a"]({radius:7,fill:new W["a"]({color:"#ffcc33"})})})});return e},updateDrawInteraction:function(){this.selected&&this.visible&&this.config.enableDraw?this.setupDrawInteraction():this.removeDrawInteraction()},removeDrawInteraction:function(){this.draw&&this.map.removeInteraction(this.draw)},setupDrawInteraction:function(){var e=this;this.vector_source&&this.$nextTick((function(){e.draw&&e.map.removeInteraction(e.draw);var t=new F["a"]({source:e.vector_source,type:e.config.draw_type,freehand:e.config.freehand,style:new G["c"]({fill:new W["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new N["a"]({color:e.config.color,width:e.config.line_width})})});e.map.addInteraction(t),t.on("drawend",function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=n.feature,i.set("label",e.config.label);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.draw=t}))}}},Z=q,J=Object(s["a"])(Z,M,R,!1,null,null,null),Y=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"itk-vtk-layer"},[n("section",{attrs:{id:"toolbar"}}),n("b-field",{attrs:{label:"opacity"}},[n("b-slider",{attrs:{min:0,max:1,step:.1},on:{input:e.updateOpacity},model:{value:e.config.opacity,callback:function(t){e.$set(e.config,"opacity",t)},expression:"config.opacity"}})],1)],1)},X=[],Q=(n("c19f"),n("5cc6"),n("84c3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("4105")),ee=n("1af9"),te=n("256f"),ne=n("0af5"),ie=window.itkVtkViewer,re=function(e){function t(t){e.call(this,t),this.viewerElement=document.createElement("div"),this.viewerElement.classList.add("ol-layer"),this.viewerElement.style.position="absolute",this.sync_callback=t.sync_callback}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getSourceState=function(){return"ready"},t.prototype.render=function(){return this.sync_callback&&this.sync_callback(),this.viewerElement.style.opacity=this.getOpacity(),this.viewerElement},t}(ee["a"]);function ae(e){return new Promise((function(t){var n=document.createElement("canvas"),i=n.getContext("2d"),r=new Image;r.onload=function(){n.width=r.width,n.height=r.height,i.drawImage(r,0,0,r.width,r.height);var e=i.getImageData(0,0,r.width,r.height),a=ie.utils.vtkITKHelper.convertItkToVtkImage({imageType:{dimension:2,pixelType:1,componentType:"uint8_t",components:4},name:"test image",origin:[0,0],spacing:[1,1],direction:{data:[1,0,0,1]},size:[r.width,r.height],data:new Uint8Array(e.data.buffer)});t(a)},r.crossOrigin="Anonymous",r.src=e}))}var oe={name:"itk-vtk-layer",type:"vtk",props:{map:{type:g["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{visible:function(e){this.layer.setVisible(e),this.synchronizeVtkCoordinate(),this.renderWindow.render()}},mounted:function(){var e=this;this.config.opacity=1,this.config.sliders=[{name:"T",min:0,max:100,step:1,value:3,changed:function(){console.log("t slider changed.")}}],Promise.resolve(this.getLayer()).then((function(t){e.layer=t,e.config.layer=t,e.map.addLayer(e.layer);var n=new te["b"]({code:"image",units:"pixels",extent:e.extent});e.map.setView(new b["a"]({projection:n,center:Object(ne["x"])(e.extent),zoom:1,minZoom:-10})),e.enableItkInteraction(),e.synchronizeVtkCoordinate(),e.renderWindow.render(),e.$forceUpdate()}))},beforeDestroy:function(){this.layer&&this.map.removeLayer(this.layer)},created:function(){},methods:{updateOpacity:function(){this.layer&&this.layer.setOpacity(this.config.opacity)},selectLayer:function(){},getLayer:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,o,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={position:"relative",width:"100%",height:"100vh",minHeight:"400px",minWidth:"400px",margin:"1",padding:"1",top:"0",left:"0",overflow:"hidden",display:"block-inline"},i={backgroundColor:[0,0,0,0],containerStyle:n},r=new re({sync_callback:e.synchronizeVtkCoordinate}),t.next=5,ae("https://images.proteinatlas.org/19661/221_G2_1_red_green.jpg");case 5:return a=t.sent,o=a.getExtent(),e.extent=[o[0],o[2],o[1],o[3]],s=ie.createViewer(r.viewerElement,{viewerStyle:i,image:a,pointSets:null,geometries:null,use2D:!0,rotate:!1,uiContainer:document.getElementById("toolbar")}),c=s.getViewProxy(),l=c.getRenderWindow(),l.getViews()[0].initialize(),e.viewProxy=s.getViewProxy(),e.viewProxy.updateOrientation(2,1,[0,1,0]),e.renderWindow=e.viewProxy.getRenderWindow(),e.interactor=e.renderWindow.getInteractor(),u=e.interactor.getView(),u.getContainer().removeEventListener("wheel",e.interactor.handleWheel),u.getContainer().removeEventListener("mousedown",e.interactor.handleMouseDown),e.renderer=e.viewProxy.getRenderer(),s.setUserInterfaceCollapsed(!0),setTimeout((function(){s.setUserInterfaceCollapsed(!1)}),10),e.viewer=s,t.abrupt("return",r);case 24:case"end":return t.stop()}}),t)})))()},convertCoordinates:function(e,t){var n=this.interactor.getView(),i={x:e,y:t},r=n.getContainer().getBoundingClientRect(),a=n.getCanvas(),o=a.width/r.width,s=a.height/r.height,c=this.map.getEventPixel({clientX:i.x/o+r.left,clientY:r.height-i.y/s+r.top}),l=this.map.getCoordinateFromPixelInternal(c),u=ie.utils.vtkCoordinate.newInstance();u.setRenderer(this.renderer),u.setCoordinateSystemToDisplay(),u.setValue(i.x,i.y);var d=u.getComputedWorldValue();return{mapPosition:l,worldPosition:d}},synchronizeMapCoordinate:function(){var e=this.map.getView(),t=e.getResolution(),n=e.getCenter(),i=this.convertCoordinates(0,0),r=this.convertCoordinates(1,1),a=t/(i.mapPosition[0]-r.mapPosition[0]),o=Math.abs((i.worldPosition[0]-r.worldPosition[0])*a);0!==o&&o!==t&&e.setResolution(o);var s=i.worldPosition[0]-i.mapPosition[0],c=i.worldPosition[1]-i.mapPosition[1];e.setCenter([n[0]+s,n[1]+c])},synchronizeVtkCoordinate:function(){var e=this.viewProxy.getCamera(),t=e.getParallelScale(),n=this.convertCoordinates(0,0),i=this.convertCoordinates(100,100),r=t/(n.worldPosition[0]-i.worldPosition[0]),a=Math.abs((n.mapPosition[0]-i.mapPosition[0])*r);a&&a!==t&&(e.setParallelScale(a),this.viewProxy.updateDataProbeSize(),this.viewProxy.updateScaleBar());var o=this.convertCoordinates(0,0),s=o.worldPosition[0]-o.mapPosition[0],c=o.worldPosition[1]-o.mapPosition[1],l=e.getFocalPoint(),u=e.getPosition();e.setFocalPoint(l[0]-s,l[1]-c,l[2]),e.setPosition(u[0]-s,u[1]-c,u[2]),e.computeDistance(),this.viewProxy.renderLater()},enableItkInteraction:function(){var e=this;this.itkInteraction=new Q["b"],this.itkInteraction.handleEvent=function(t){e.itkInteraction.updateTrackedPointers_(t);var n=e.interactor;return"pointermove"==t.type&&n.handleMouseMove(t.originalEvent),!0},this.map.addInteraction(this.itkInteraction)}}},se=oe,ce=(n("6a21"),Object(s["a"])(se,K,X,!1,null,null,null)),le=ce.exports,ue=n("2f62"),de=n("aa47"),fe={},pe={};for(var me in i)fe[i[me].name]=i[me],pe[i[me].type]=i[me].name;fe["gallery"]=L;var ye=function(e,t,n){return de["a"].create(e,Object(v["a"])(Object(v["a"])({},t),{},{onEnd:function(e){var i=t.layer_configs.length-e.oldIndex-1,r=t.layer_configs.length-e.newIndex-1,a=t.layer_configs,o=a[i];if(r>i)for(var s=i;s<r;s++)a[s]=a[s+1];else for(var c=i;c>r;c--)a[c]=a[c-1];a[r]=o,n.componentInstance.$emit("sorted",a)}}))},he={name:"sortable",bind:function(e,t,n){var i=e.querySelector(".menu-list");i._sortable=ye(i,t.value,n)},update:function(e,t,n){var i=e.querySelector(".menu-list");i._sortable.destroy(),i._sortable=ye(i,t.value,n)},unbind:function(e){var t=e.querySelector(".menu-list");t._sortable.destroy()}},ve={name:"ImageViewer",components:fe,directives:{sortable:he},data:function(){return{sortableOptions:{chosenClass:"is-primary",draggable:".layer-item"},position:null,open:!0,expandOnHover:!1,mobile:"fullwidth",reduce:!1,showGallery:!1,newLayerType:null,collections:null,layerTypes:pe}},mounted:function(){this.init(),this.collections=[{name:"My collection",items:[{name:"my image 1"},{name:"my image 2"},{name:"my image 3"},{name:"my image 4"},{name:"my image 5"}]}],this.sortableOptions.layer_configs=this.layer_configs},computed:Object(v["a"])({},Object(ue["b"])({layer_configs:function(e){return e.layer_configs},currentLayer:function(e){return e.currentLayer},map:function(e){return e.map},activeSliders:function(e){return e.activeSliders}})),methods:{layerSorted:function(){for(var e=0;e<this.layer_configs.length;e++)this.layer_configs[e].layer.setZIndex(e)},removeLayer:function(e){this.$store.commit("removeLayer",e),this.$forceUpdate()},toggleVisible:function(e){this.$store.commit("toggleVisible",e),this.$forceUpdate()},selectLayer:function(e){this.$store.commit("setCurrentLayer",e)},newLayer:function(e){this.addLayer({type:e,name:e+"-"+w()})},addLayer:function(e){var t=this,n=w();e.id=n,this.$store.commit("addLayer",e),this.$nextTick((function(){var n=e.layer;n&&(t.selectLayer(n),e.layer.setZIndex(t.layer_configs.length))}))},init:function(){var e=[0,0,1024,968],t=new E["a"]({code:"xkcd-image",units:"pixels",extent:e}),n=new g["a"]({target:"map",layers:[],view:new b["a"]({projection:t,center:Object(ne["x"])(e),zoom:2,maxZoom:8})});this.$store.commit("setMap",n)}}},ge=ve,be=(n("2d07"),Object(s["a"])(ge,y,h,!1,null,null,null)),we=be.exports,_e={name:"Home",components:{ImageViewer:we}},xe=_e,ke=Object(s["a"])(xe,p,m,!1,null,null,null),Ce=ke.exports;r["a"].use(f["a"]);var Pe=[{path:"/",name:"Home",component:Ce},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Le=new f["a"]({mode:"history",base:"/",routes:Pe}),Ie=Le,Oe=n("289d");n("5abe");r["a"].use(ue["a"]),r["a"].use(Oe["a"]),r["a"].config.productionTip=!1;var je=new ue["a"].Store({state:{layer_configs:[],activeSliders:null,currentLayer:null,map:null},mutations:{addLayer:function(e,t){void 0===t.visible&&(t.visible=!0),e.layer_configs.push(t)},removeLayer:function(e,t){t.selected=!1;var n=e.layer_configs.indexOf(t);n>=0&&e.layer_configs.splice(n,1)},toggleVisible:function(e,t){t.visible=!t.visible},setCurrentLayer:function(e,t){e.currentLayer!==t&&(e.currentLayer&&(e.currentLayer.selected=!1),e.currentLayer=t,t.sliders&&(e.activeSliders=t.sliders),t.selected=!0)},setMap:function(e,t){e.map=t}}});new r["a"]({router:Ie,render:function(e){return e(u)},store:je}).$mount("#app")},"6a21":function(e,t,n){"use strict";var i=n("e38f"),r=n.n(i);r.a},e38f:function(e,t,n){}});
//# sourceMappingURL=app.91573303.js.map