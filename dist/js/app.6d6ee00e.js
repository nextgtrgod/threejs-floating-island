(function(e){function t(t){for(var i,o,s=t[0],h=t[1],m=t[2],d=0,c=[];d<s.length;d++)o=s[d],n[o]&&c.push(n[o][0]),n[o]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(e[i]=h[i]);w&&w(t);while(c.length)c.shift()();return r.push.apply(r,m||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var h=a[s];0!==n[h]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var w=h;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2583:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d"),a("2583"),a("63a6");var i=a("2909"),n=(a("96cf"),a("1da1")),r=(a("3191"),a("8992")),o=a("5a89"),s={lightGreen:10335764,darkGreen:5876775,lightBrown:16767913,darkBronw:13669759,darkGrey:7496554,darkMetal:7496554,lightMetal:14465972,white:16645367,wood:10972695,brick:14070926,roof:7942486,sky:8435420,red:16711680,rust:12158069,water:8435420,balloon:14277081,glass:15658734};function h(){var e=new o["v"];return e}function m(e,t){var a=e/t,i=50,n=1,r=3500,s=new o["t"](i,a,n,r);return s.position.set(0,-350,2150),s.rotation.set(.2,.036,0),s}var w=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,a,i){var n,r,s,h=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=!(h.length>3&&void 0!==h[3])||h[3],r=new o["A"]({alpha:!0,antialias:n}),r.setSize(a,i),r.shadowMap.enabled=!0,s=document.getElementById(t),s.appendChild(r.domElement),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t,a,i){return e.apply(this,arguments)}}(),d=w;function c(){var e=new o["f"](16777215,.75);return e.position.set(-280,695,350),e.castShadow=!0,e.shadow.camera.left=-800,e.shadow.camera.right=800,e.shadow.camera.top=800,e.shadow.camera.bottom=-800,e.shadow.camera.near=1,e.shadow.camera.far=1500,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e}var p=a("d4ec"),v=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[100,100,100],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0,z:0},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cube-".concat(~~(1e3*Math.random()));Object(p["a"])(this,e),this.width=t[0],this.height=t[1],this.depth=t[2],this.color=i,this.geometry=new o["b"](this.width,this.height,this.depth),this.material,this.color?this.material=new o["q"]({color:this.color,flatShading:!0}):this.material=null,this.mesh=new o["p"](this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.x+=a.x,this.mesh.position.y+=a.y,this.mesh.position.z+=a.z,this.mesh.name=n,this.mesh.updateMatrix()},l={wood:new o["q"]({color:s.wood,flatShading:!0}),green:new o["q"]({color:s.darkGreen,flatShading:!0}),darkMetal:new o["q"]({color:s.darkMetal,specular:328965,shininess:100}),lightMetal:new o["q"]({color:s.lightMetal,side:o["g"],specular:328965,shininess:100}),glass:new o["q"]({color:s.glass,side:o["g"],transparent:!0,opacity:.5,specular:328965,shininess:1e4}),rust:new o["q"]({color:s.rust,side:o["g"],specular:328965,shininess:100}),brick:new o["q"]({color:s.brick,flatShading:!0}),roof:new o["q"]({color:s.roof,flatShading:!0}),white:new o["q"]({color:s.white,flatShading:!0}),red:new o["q"]({color:s.red,flatShading:!0}),balloon:new o["q"]({color:s.balloon,flatShading:!0,side:o["g"]}),line:new o["m"]({color:s.lightMetal,linewidth:1}),water:new o["q"]({color:s.water,flatShading:!0,specular:328965,shininess:1e3,transparent:!0,opacity:.8}),override:new o["q"]({color:14464896,wireframe:!0})},y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:35,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];Object(p["a"])(this,e);var h=new o["i"];this.radius=n,this.segmentsCount=r;var m=s?l.lightMetal:null,w=new o["p"](new o["e"](n,n,24*t,16,1,!0));if(w.rotation.y=2*Math.PI/80,w.updateMatrix(),h.merge(w.geometry,w.matrix),a){var d=new o["p"](new o["x"](n,6,10,16,2*Math.PI));d.position.y=12*t,d.rotation.x=Math.PI/2,d.updateMatrix(),h.merge(d.geometry,d.matrix)}if(i){var c=new o["p"](new o["x"](n,6,10,16,2*Math.PI));c.position.y=-12*t,c.rotation.x=Math.PI/2,c.updateMatrix(),h.merge(c.geometry,c.matrix)}for(var v=new o["e"](2,2,24*t,3,1,!0),y=0;y<this.segmentsCount;y++){var g=new o["p"](v);g.position.set(n*Math.cos(y*(2*Math.PI)/this.segmentsCount),0,n*Math.sin(y*(2*Math.PI)/this.segmentsCount)),g.updateMatrix(),h.merge(g.geometry,g.matrix)}this.mesh=new o["p"](h,m),this.mesh.name="pipe-connection"},g=function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="pipe-corner";var i=new o["i"],n=35,r=new o["x"](2*n,n,16,16,Math.PI/2),s=new o["p"](r);if(s.rotation.z=Math.PI/2,s.updateMatrix(),i.merge(s.geometry,s.matrix),a){var h=(new y).mesh;h.rotation.z+=Math.PI/2,h.position.y+=2*n,h.updateMatrix(),i.merge(h.geometry,h.matrix)}if(t){var m=(new y).mesh;m.position.x-=2*n,m.updateMatrix(),i.merge(m.geometry,m.matrix)}var w=new o["p"](i,l.lightMetal);w.castShadow=!0,w.receiveShadow=!0,this.mesh=w},u=function e(){Object(p["a"])(this,e);var t=new o["w"];t.moveTo(0,0),t.absarc(0,0,12,0,2*Math.PI);var a=new o["s"];a.moveTo(0,0),a.absarc(0,0,10,0,2*Math.PI),t.holes.push(a);var i={curveSegments:8,steps:1,depth:1,bevelEnabled:!1},n=new o["h"](t,i);this.mesh=new o["p"](n,l.rust),this.mesh.rotation.x+=Math.PI/2,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.name="chimney"},x=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="fence";var a=90,i=130,n=a-20,r=Math.atan(n/i),s=new o["i"],h=new o["p"](new o["b"](5,a,5));if(s.merge(h.geometry,h.matrix),t){var m=h.clone();m.position.z+=i,m.updateMatrix(),s.merge(m.geometry,m.matrix)}var w=new o["p"](new o["b"](2,2,i));w.position.set(0,n/2-10,i/2),w.updateMatrix(),s.merge(w.geometry,w.matrix);var d=new o["p"](s,l.darkMetal);d.name="pillars",d.castShadow=!0,d.receiveShadow=!0;for(var c=new o["i"],v=0;v<i/2;v++)c.vertices.push(new o["z"](10*Math.cos(v),10*Math.sin(v),2*v));var y=new o["l"](c,l.line);y.name="helix",y.castShadow=!0,y.receiveShadow=!0,y.position.set(-5,40,0);for(var g=new o["i"],u=i/5,x=0;x<i;x+=u){var M=i-x;g.vertices.push(new o["z"](0,0,x)),g.vertices.push(new o["z"](0,M*Math.tan(r),i))}for(var z=i;z>0;z-=u){var f=i-z;g.vertices.push(new o["z"](0,n,f)),g.vertices.push(new o["z"](0,n-f*Math.tan(r),0))}for(var b=0;b<i;b+=u){var P=i-b;g.vertices.push(new o["z"](0,0,P)),g.vertices.push(new o["z"](0,P*Math.tan(r),0))}for(var I=0;I<i;I+=u){var S=i-I;g.vertices.push(new o["z"](0,n,I)),g.vertices.push(new o["z"](0,n-S*Math.tan(r),i))}var j=new o["n"](g,l.line);j.position.y-=a/2,j.castShadow=!0,j.receiveShadow=!0,j.name="grid",this.mesh.add(d,y,j)},M=function e(){Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="filter";var t=new o["i"],a=new o["p"](new o["b"](5,30,390)),i=a.clone();i.position.x-=100,i.updateMatrix(),t.merge(a.geometry,a.matrix),t.merge(i.geometry,i.matrix);var n=new o["p"](t,l.rust);n.castShadow=!0,n.receiveShadow=!0;for(var r=new o["i"],s=0;s<4;s++){var h=4*s;r.vertices.push(new o["z"](0,h,-40)),r.vertices.push(new o["z"](-100,h,-40))}var m=new o["n"](r,l.line);m.castShadow=!0,m.receiveShadow=!0,this.mesh.add(n,m)},z=function e(){Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="bottom-island",this.mesh.add(new v([400,400,400],{x:0,y:0,z:0},s.darkGrey).mesh),this.mesh.position.set(0,-400,400);for(var t=new o["i"],a=[{x:120,y:350,z:-120,scale:150},{x:135,y:270,z:-90,scale:70},{x:95,y:245,z:-70,scale:50},{x:80,y:240,z:70,scale:40},{x:90,y:230,z:100,scale:30},{x:120,y:220,z:80,scale:20},{x:-130,y:320,z:-110,scale:140},{x:-125,y:270,z:-70,scale:70},{x:-140,y:500,z:90,scale:200}],i=0;i<a.length;i++){var n=(new u).mesh;n.position.set(a[i].x,a[i].y,a[i].z),n.scale.z=a[i].scale,n.updateMatrix(),t.merge(n.geometry,n.matrix)}var r=new o["i"],h=new o["p"](new o["e"](40,40,70,6,1));h.position.set(0,-50,0),h.updateMatrix();var m=(new u).mesh;m.scale.set(3.5,3.5,150),m.updateMatrix(),r.merge(h.geometry,h.matrix),r.merge(m.geometry,m.matrix);var w=new o["p"](r,l.rust);w.position.set(-125,325,90),w.updateMatrix(),t.merge(w.geometry,w.matrix);var d=new o["p"](t,l.rust);d.castShadow=!0,d.receiveShadow=!0,this.mesh.add(d);for(var c=[{position:{x:0,y:170,z:195},rotation:{x:0,y:Math.PI/2,z:0}},{position:{x:0,y:0,z:195},rotation:{x:0,y:Math.PI/2,z:Math.PI}},{position:{x:215,y:-75,z:10},rotation:{x:Math.PI/2,y:Math.PI/2,z:0}},{position:{x:215,y:-75,z:-20},rotation:{x:Math.PI/2,y:Math.PI,z:0}}],y=0;y<c.length;y++){var z=(new g).mesh;z.position.set(c[y].position.x,c[y].position.y,c[y].position.z),z.rotation.set(c[y].rotation.x,c[y].rotation.y,c[y].rotation.z,"ZYX"),this.mesh.add(z)}for(var f=[{position:{x:195,y:245,z:-195},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:-65},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:65},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:195},rotation:{x:0,y:-Math.PI/2,z:0},isClosed:!0},{position:{x:-65,y:245,z:195},rotation:{x:0,y:-Math.PI/2,z:0},isClosed:!0},{position:{x:-195,y:245,z:-195},rotation:{x:0,y:0,z:0}},{position:{x:-195,y:245,z:-65},rotation:{x:0,y:0,z:0}},{position:{x:-195,y:245,z:65},rotation:{x:0,y:0,z:0}}],b=0;b<f.length;b++){var P=new x(f[b].isClosed).mesh;P.position.set(f[b].position.x,f[b].position.y,f[b].position.z),P.rotation.set(f[b].rotation.x,f[b].rotation.y,f[b].rotation.z),this.mesh.add(P)}var I=(new M).mesh;I.position.set(50,215,-5),this.mesh.add(I)},f=a("ade3"),b=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"rotate",function(e){t.propeller.rotation.z+=e}),this.mesh=new o["r"],this.mesh.name="fan";var a=new o["i"],i=new o["p"](new o["e"](8,8,10,6,1)),n=new o["p"](new o["e"](5,5,400,6,1)),r=new o["p"](new o["e"](25,25,50,8,1));r.rotation.x+=Math.PI/2,r.position.y+=200,r.updateMatrix(),a.merge(i.geometry,i.matrix),a.merge(n.geometry,n.matrix),a.merge(r.geometry,r.matrix);var s=new o["p"](a,l.darkMetal);s.castShadow=!0,s.receiveShadow=!0;var h=new o["r"],m=new o["e"](10,10,30,6,1),w=new o["p"](m,l.darkMetal);w.receiveShadow=!0,w.castShadow=!0,w.position.z+=30,w.rotation.x=Math.PI/2;for(var d=[],c=new o["b"](20,120,2),v=0;v<3;v++){var y=new o["p"](c,l.white);y.geometry.translate(0,20,0),y.geometry.vertices[4].y+=5,y.geometry.vertices[4].z-=1,y.geometry.vertices[5].y+=5,y.geometry.vertices[5].z-=1,y.rotation.z=v*(2*Math.PI/3),y.position.z+=40,y.castShadow=!0,y.receiveShadow=!0,d.push(y)}h.position.y+=200,h.add.apply(h,[w].concat(d)),this.propeller=h,this.mesh.add(s,h)},P=function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(p["a"])(this,e);var t=new o["i"],a=new v([10,20,4],{x:0,y:0,z:0});a.mesh.updateMatrix();var i=new v([28,4,2],{x:-19,y:8,z:0});i.mesh.updateMatrix();var n=new v([28,4,2],{x:-19,y:-3,z:0});n.mesh.updateMatrix();var r=new v([10,6,4],{x:0,y:13,z:0});r.mesh.geometry.vertices[0].x-=5,r.mesh.geometry.vertices[1].x-=5,r.mesh.geometry.vertices[4].x+=5,r.mesh.geometry.vertices[5].x+=5,r.mesh.updateMatrix(),t.merge(n.mesh.geometry,n.mesh.matrix),t.merge(a.mesh.geometry,a.mesh.matrix),t.merge(i.mesh.geometry,i.mesh.matrix),t.merge(r.mesh.geometry,r.mesh.matrix),this.width=38,this.mesh=new o["p"](t,l.wood),this.mesh.position.y+=10},I=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,1,1],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="pine";var i=new o["e"](8,8,15,10,1),n=new o["p"](i,l.wood);n.castShadow=!0,n.receiveShadow=!0,n.position.y+=7.5;for(var r=new o["i"],s=1;s<=7;s++){var h=45-5*s,m=new o["p"](new o["e"](h-10,h,10,6,1));m.position.y+=10+70*s/7,m.updateMatrix(),r.merge(m.geometry,m.matrix)}var w=new o["p"](r,l.green);w.receiveShadow=!0,w.castShadow=!0,this.mesh.scale.x=t[0],this.mesh.scale.y=t[1],this.mesh.scale.z=t[2],this.mesh.rotation.y=a,this.mesh.add(n,w)},S=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"rotateFan",function(e){t.fan.rotation.z+=e}),this.mesh=new o["r"],this.mesh.name="windwane";var a=new o["i"],i=new o["i"],n=new v([20,200,15],{x:0,y:100,z:0}).mesh;n.geometry.vertices[0].x-=5,n.geometry.vertices[0].z-=5,n.geometry.vertices[1].x-=5,n.geometry.vertices[1].z+=5,n.geometry.vertices[4].x+=5,n.geometry.vertices[4].z+=5,n.geometry.vertices[5].x+=5,n.geometry.vertices[5].z-=5,n.updateMatrix(),i.merge(n.geometry,n.matrix);for(var r=0;r<4;r++){var s=new v([65,10,5],{x:-25,y:30+40*r,z:0}).mesh;s.rotation.z+=Math.PI/4*(r%2===0?-1:1),s.updateMatrix(),i.merge(s.geometry,s.matrix)}for(var h=0;h<4;h++){var m=new o["p"](i,l.wood);m.position.x+=40*Math.cos(h*Math.PI/2),m.position.z+=40*Math.sin(h*Math.PI/2),m.rotation.y+=Math.PI/4-h*(Math.PI/2),m.updateMatrix(),a.merge(m.geometry,m.matrix)}var w=new v([80,10,80],{x:0,y:200,z:0}).mesh;w.rotation.y-=Math.PI/4,w.updateMatrix(),a.merge(w.geometry,w.matrix);var d=new o["p"](a,l.wood);d.name="stand",d.castShadow=!0,d.receiveShadow=!0,d.rotation.y+=Math.PI/4;var c=new o["i"],y=new o["p"](new o["e"](2,2,60,6,1));y.rotation.z=Math.PI/6,y.position.set(15,230,0),y.updateMatrix();var g=y.clone();g.rotation.z=-Math.PI/6,g.position.x=-15,g.updateMatrix();var u=new o["p"](new o["e"](4,4,6,6,1));u.position.set(0,255,0),u.updateMatrix(),c.merge(y.geometry,y.matrix),c.merge(g.geometry,g.matrix),c.merge(u.geometry,u.matrix);var x=new o["p"](c,l.lightMetal);x.castShadow=!0,x.receiveShadow=!0;var M=new o["r"],z=new o["p"](new o["e"](2,2,100,6,1),l.lightMetal);z.position.set(0,260,0),z.rotation.x+=Math.PI/2,z.receiveShadow=!0,z.castShadow=!0;var b=new o["p"](new o["e"](3,3,5,6,1),l.lightMetal);b.position.set(0,260,0),b.receiveShadow=!0,b.castShadow=!0;var P=new o["w"],I=36,S=16;P.moveTo(0,S/2),P.lineTo(I/4,S),P.lineTo(I,S),P.lineTo(I-I/4,S/2),P.lineTo(I,0),P.lineTo(I/4,0),P.moveTo(0,S/2);var j={steps:2,depth:4,bevelEnabled:!1},O=new o["p"](new o["h"](P,j),l.red);O.castShadow=!0,O.receiveShadow=!0,O.position.set(-2,260-S/2,-25),O.rotation.y=Math.PI/2;for(var k=new o["r"],T=new o["i"],L=0;L<12;L++){var E=new v([45,2,1],{x:4*Math.cos(L*(Math.PI/6)),y:4*Math.sin(L*(Math.PI/6)),z:0}).mesh;E.geometry.translate(20,0,0),E.geometry.vertices[1].z-=4,E.geometry.vertices[1].y+=10,E.rotation.z+=L*Math.PI/6,E.updateMatrix(),T.merge(E.geometry,E.matrix)}var q=new o["p"](T,l.lightMetal);q.castShadow=!0,q.receiveShadow=!0;var B=new o["p"](new o["e"](4,4,4,6,1),l.darkMetal);B.rotation.x=Math.PI/2,B.castShadow=!0,B.receiveShadow=!0,k.add(q,B),k.position.set(0,260,45),this.fan=k,M.add(z,b,O,k),this.vane=M,this.mesh.add(d,x,M)},j=function e(){Object(p["a"])(this,e);var t=new o["i"],a=new v([5,410,5],{x:0,y:205,z:0}).mesh;t.merge(a.geometry,a.matrix);var i=a.clone();i.position.z-=30,i.updateMatrix(),t.merge(i.geometry,i.matrix);for(var n=0;n<40;n++){var r=new v([2,2,30],{x:0,y:10*n+10,z:-15}).mesh;t.merge(r.geometry,r.matrix)}this.mesh=new o["p"](t,l.wood),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},O=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0]];Object(p["a"])(this,e);for(var a=new o["i"],i=0;i<t.length;i++){var n=new v([30,40,30],{x:t[i][0],y:t[i][1],z:t[i][2]}).mesh;n.rotation.set(Math.random()*(2*Math.PI),Math.random()*(2*Math.PI),Math.random()*(2*Math.PI)),n.updateMatrix(),a.merge(n.geometry,n.matrix)}this.mesh=new o["p"](a,l.lightMetal),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},k=function e(){var t;Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="middle-island",this.mesh.add(new v([400,400,400],{x:0,y:0,z:0},s.lightBrown,"middle-cube-basement").mesh),this.fans=[];for(var a=[{x:200,y:100,z:-100,rx:-Math.PI/2,rz:-Math.PI/2},{x:200,y:-50,z:100,rx:-Math.PI/2,rz:-Math.PI/2}],n=0;n<a.length;n++){var r=new b;r.mesh.position.set(a[n].x,a[n].y,a[n].z),r.mesh.rotation.set(a[n].rx,0,a[n].rz),this.fans.push(r)}for(var h=[{x:190,z:-190,ry:0,mx:-1,mz:0,count:11},{x:190,z:185,ry:-Math.PI/2,mx:0,mz:-1,count:10},{x:-190,z:190,ry:0,mx:1,mz:0,count:4},{x:80,z:185,ry:Math.PI,mx:1,mz:0,count:3}],m=38,w=new o["i"],d=0;d<h.length;d++)for(var c=0;c<h[d].count;c++){var u=(new P).mesh;u.position.set(h[d].x+c*h[d].mx*m,210,h[d].z+c*h[d].mz*m),u.rotation.y=h[d].ry,u.updateMatrix(),w.merge(u.geometry,u.matrix)}var x=new o["p"](w,l.wood);x.name="fence-perimeter",x.castShadow=!0,x.receiveShadow=!0;var M=new I([1.2,2,1.2]).mesh;M.position.set(-140,200,140);var z=new S;z.mesh.position.set(100,200,-50),z.mesh.rotation.y+=Math.PI/16,this.windvane=z;var f=(new j).mesh;f.position.set(-158,200,-90),f.rotation.z=Math.PI/32;for(var k=[],T=0;T<12;T++)k.push([250*Math.cos(T*Math.PI/24),0,-180*Math.sin(T*Math.PI/24)]);for(var L=0;L<8;L++)k.push([150*Math.cos(L*Math.PI/16)+10,0,-100*Math.sin(L*Math.PI/16)]);var E=new O(k).mesh;E.position.set(-210,200,170);for(var q=new o["i"],B=(new o["i"],[{type:"straight",position:[80,-475,125],rotation:[Math.PI/2,0,0]},{type:"connection",position:[80,-475,35],rotation:[Math.PI/2,0,0],options:{m:1}},{type:"arc",position:[80,-397.5,20],rotation:[-Math.PI/2,Math.PI/2,-Math.PI/2],options:{scale:1.1}},{type:"connection",position:[80,-300,-57.5],rotation:[0,0,0],options:{m:8}},{type:"straight",position:[-275,-75,80],rotation:[0,0,Math.PI/2]},{type:"connection",position:[-360,-75,80],rotation:[0,0,Math.PI/2],options:{m:1}},{type:"arc",position:[-370,0,80],rotation:[0,0,Math.PI/2],options:{scale:1.1}},{type:"connection",position:[-450,150,80],rotation:[0,0,0],options:{m:4}}]),C=0;C<B.length;C++){var H=function(e,t){e.position.set(t.position[0],t.position[1],t.position[2]),e.rotation.set(t.rotation[0],t.rotation[1],t.rotation[2]),e.updateMatrix()},N=void 0;switch(B[C].type){case"straight":N=new o["p"](new o["e"](35,35,150,8,1));break;case"connection":N=new y(B[C].options.m).mesh;break;case"arc":N=new g(!1,!1).mesh,N.scale.set(B[C].options.scale,B[C].options.scale,B[C].options.scale);break}H(N,B[C]),q.merge(N.geometry,N.matrix)}var D=new o["p"](q,l.lightMetal);D.castShadow=!0,D.receiveShadow=!0,(t=this.mesh).add.apply(t,[x,M,z.mesh,f,E].concat(Object(i["a"])(this.fans.map(function(e){return e.mesh})),[D]))},T=function e(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8;Object(p["a"])(this,e),this.radius=i;var r=new o["c"]([new o["z"](0,0,0),new o["z"](0,0,t),new o["z"](0,a,t+i)]),s=new o["w"];s.moveTo(this.radius*Math.cos(0),this.radius*Math.sin(0));for(var h=1;h<16;h++)s.lineTo(this.radius*Math.cos(h*(2*Math.PI)/16),this.radius*Math.sin(h*(2*Math.PI)/16));this.mesh=new o["p"](new o["h"](s,{curveSegments:8,steps:n,bevelEnabled:!1,extrudePath:r}))},L=function e(){Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="house";var t={x:140,y:50,z:140},a=new v([t.x,t.y,t.z],{x:0,y:t.y/2,z:-100},s.brick,"first-floor").mesh;a.castShadow=!0,a.receiveShadow=!0;var i=new v([t.x+10,t.y/10,t.z+10],{x:0,y:t.y/20,z:-100},s.darkMetal,"basement").mesh;i.castShadow=!0,i.receiveShadow=!0;var n=new o["r"],r=new o["p"](new o["e"](t.x-40,t.x-35,5,4,1),l.brick);r.position.y-=2.5,r.castShadow=!0,r.receiveShadow=!0;var h=new o["p"](new o["e"](20,20,5,4,1),l.brick);h.position.y+=122.5,h.castShadow=!0,h.receiveShadow=!0;var m=new o["p"](new o["e"](15,15,5,4,1),l.brick);m.position.y+=155,m.castShadow=!0,m.receiveShadow=!0,n.add(r,h,m),n.position.set(0,t.y,-100),n.rotation.y+=Math.PI/4;for(var w=new o["i"],d=[{y:20,rT:50,rB:100,height:40},{y:70,rT:20,rB:50,height:60},{y:110,rT:15,rB:20,height:20},{y:130,rT:30,rB:15,height:10},{y:145,rT:10,rB:30,height:20},{y:165,rT:1,rB:10,height:20}],c=0;c<d.length;c++){var y=new o["p"](new o["e"](d[c].rT,d[c].rB,d[c].height,4,1));y.position.y+=d[c].y,y.updateMatrix(),w.merge(y.geometry,y.matrix)}var g=new o["p"](w,l.roof);g.castShadow=!0,g.receiveShadow=!0,n.add(g);for(var u=new o["i"],x=[{x:0,y:100,z:-70,width:30,height:50},{x:-10,y:120,z:-80,width:20,height:80}],M=0;M<x.length;M++){var z=new T(x[M].width,x[M].height).mesh;z.position.set(x[M].x,x[M].y,x[M].z),z.updateMatrix(),u.merge(z.geometry,z.matrix)}var f=new o["p"](u,l.lightMetal);f.castShadow=!0,f.receiveShadow=!0;var b=new o["w"];b.moveTo(15,-15),b.lineTo(15,15);for(var P=0;P<8;P++)b.lineTo(15*Math.cos(P*Math.PI/8),10*Math.sin(P*Math.PI/8)+15);b.lineTo(-15,-15),b.moveTo(-15,15);var I={steps:2,depth:4,bevelEnabled:!1},S=new o["p"](new o["h"](b,I),l.wood);S.castShadow=!0,S.receiveShadow=!0,S.position.set(70,15,-125),S.rotation.y=Math.PI/2;var j=new o["w"];j.moveTo(0,0),j.absarc(0,0,15,0,2*Math.PI);var O=new o["s"];O.moveTo(0,0),O.absarc(0,0,12,0,2*Math.PI),j.holes.push(O);var k=new o["h"](j,{depth:4,steps:1,bevelEnabled:!1}),L=new v([1,30,4]),E=new v([30,1,4]);k.merge(L.geometry,L.matrix),k.merge(E.geometry,E.matrix);var q=new o["p"](k,l.wood);q.position.set(70,25,-65),q.rotation.y=Math.PI/2,q.scale.x=1.15,q.receiveShadow=!0,q.castShadow=!0,this.mesh.add(i,a,S,q,n,f)},E=function e(){var t=this;Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="top-island",this.mesh.add(new v([400,400,400],{x:0,y:0,z:0},s.lightGreen).mesh),this.fans=[];for(var a=[{x:-100,y:100},{x:100,y:-100}],i=0;i<a.length;i++){var n=new b;n.mesh.position.set(a[i].x,a[i].y,200),n.mesh.rotation.set(Math.PI/2,Math.PI,0),this.fans.push(n)}this.fans.map(function(e){t.mesh.add(e.mesh)});var r=(new L).mesh;r.position.x+=70,r.position.y+=200,r.position.z+=5,r.rotation.y-=Math.PI/16,this.mesh.add(r);for(var h=new o["i"],m=[{x:190,z:187,ry:0,mx:-1,mz:0,count:10},{x:-187,z:185,ry:-Math.PI/2,mx:0,mz:-1,count:10},{x:-187,z:-187,ry:Math.PI,mx:1,mz:0,count:10},{x:190,z:118,ry:Math.PI/2,mx:0,mz:1,count:2},{x:187,z:-155,ry:-Math.PI/2,mx:0,mz:-1,count:1}],w=38,d=0;d<m.length;d++)for(var c=0;c<m[d].count;c++){var y=(new P).mesh;y.position.set(m[d].x+c*m[d].mx*w,210,m[d].z+c*m[d].mz*w),y.rotation.y=m[d].ry,y.updateMatrix(),h.merge(y.geometry,y.matrix)}var u=new o["p"](h,l.wood);u.name="fence-perimeter",u.castShadow=!0,u.receiveShadow=!0,this.mesh.add(u);for(var x=[{x:120,y:200,z:140,sx:1,sy:1,sz:1},{x:15,y:200,z:140,sx:1,sy:1.2,sz:1},{x:-100,y:200,z:140,sx:1.1,sy:1.5,sz:1.1},{x:-90,y:200,z:-80,sx:1.6,sy:1.8,sz:1.6}],M=0;M<x.length;M++){var z=new I([x[M].sx,x[M].sy,x[M].sz]).mesh;z.position.set(x[M].x,x[M].y,x[M].z),this.mesh.add(z)}var f=(new g).mesh;f.position.x-=60,f.position.y+=215,f.position.z+=40,this.mesh.add(f),this.mesh.position.set(-400,400,0)},q=function e(){Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="zeppelin-balloon";for(var t=200,a=12,i=[],n=0;n<a;n++)i.push(new o["y"](t*Math.sin(n*(Math.PI/a)),t*Math.cos(n*(Math.PI/a))*2));var r=new o["p"](new o["k"](i),l.balloon);r.receiveShadow=!0;var s=new o["w"];s.moveTo(i[0].y,i[0].x);for(var h=1;h<i.length-1;h++)s.lineTo(i[h].y,i[h].x);s.moveTo(i[i.length]);var m=new o["p"](new o["h"](s,{steps:1,depth:20,bevelEnabled:!1}),l.lightMetal);m.rotation.z-=Math.PI/2,m.position.set(5,0,-10),m.castShadow=!0,m.receiveShadow=!0,this.mesh.add(r,m),this.mesh.rotation.x=Math.PI/2},B=function e(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;Object(p["a"])(this,e),this.radius=t;var n=new o["c"](a),r=new o["w"];r.moveTo(this.radius*Math.cos(0),this.radius*Math.sin(0));for(var s=1;s<16;s++)r.lineTo(this.radius*Math.cos(s*(2*Math.PI)/16),this.radius*Math.sin(s*(2*Math.PI)/16));this.mesh=new o["p"](new o["h"](r,{steps:i,bevelEnabled:!1,extrudePath:n})),this.mesh.name="hose"},C=function e(){var t=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(p["a"])(this,e),Object(f["a"])(this,"rotate",function(e){t.propeller.rotation.y+=e}),this.mesh=new o["r"],this.mesh.name="zeppelin-fan";for(var n=40,r=new o["i"],s=new o["p"](new o["e"](n,n-5,2*n,16,1)),h=[],m=0;m<16;m++)h.push(new o["y"](n*Math.cos(m*(Math.PI/32)),n*Math.sin(m*(Math.PI/32))/3));var w=new o["p"](new o["k"](h,8));w.position.y+=n,w.updateMatrix();var d=new o["p"](new o["e"](5,5,120,6,1));if(d.position.set(-60,0,0),d.rotation.z-=Math.PI/2,d.updateMatrix(),a){var c=new v([15,45,1]).mesh;c.position.set(35,5,15),c.updateMatrix();var y=c.clone();c.position.z-=30,c.updateMatrix(),r.merge(c.geometry,c.matrix),r.merge(y.geometry,y.matrix);for(var g=-2;g<4;g++){var u=new o["p"](new o["e"](4,4,30,3,1));u.rotation.set(Math.PI/2,Math.PI/3,0),u.position.set(n+g/2-2,8*g,0),u.updateMatrix(),r.merge(u.geometry,u.matrix)}var x=i?-1:1,M=new B(4,[new o["z"](-10,28,35*x),new o["z"](0,5,50*x),new o["z"](10,-4,55*x),new o["z"](20,-8,50*x),new o["z"](24,-12,40*x),new o["z"](20,-16,25*x)]).mesh;r.merge(M.geometry,M.matrix)}var z=new o["p"](new o["e"](5,10,15,6,1,!0));z.position.y+=58,z.updateMatrix(),r.merge(s.geometry,s.matrix),r.merge(w.geometry,w.matrix),r.merge(d.geometry,d.matrix),r.merge(z.geometry,z.matrix);var b=new o["p"](r,l.lightMetal);b.castShadow=!0,b.receiveShadow=!0;var P=new o["i"],I=new o["p"](new o["e"](4,4,280,6,1));I.position.set(0,100,0),I.updateMatrix();var S=new o["p"](new o["e"](12,5,10,6,1));S.position.set(0,228,0),S.updateMatrix();var j=new o["i"],O=new o["w"];O.moveTo(0,-5);for(var k=-4;k<4;k++)O.lineTo(120+10*Math.cos(k*Math.PI/8),10*Math.sin(k*Math.PI/8));O.lineTo(0,5);for(var T=0;T<4;T++){var L=new o["p"](new o["h"](O,{curveSegments:8,steps:1,depth:2,bevelEnabled:!1}));L.rotation.z+=T*(Math.PI/2),L.updateMatrix(),j.merge(L.geometry,L.matrix)}var E=new o["p"](j,l.white);E.position.set(0,235,0),E.geometry.applyMatrix((new o["o"]).makeRotationX(Math.PI/2)),E.updateMatrix(),P.merge(I.geometry,I.matrix),P.merge(S.geometry,S.matrix),P.merge(E.geometry,E.matrix),this.propeller=new o["p"](P,l.white),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0,this.mesh.add(b,this.propeller)},H=function e(){Object(p["a"])(this,e);for(var t=new o["i"],a=new o["i"],i=30,n=new o["p"](new o["e"](i,i,70,16,1)),r=[],s=0;s<16;s++)r.push(new o["y"](i*Math.cos(s*(Math.PI/32)),i*Math.sin(s*(Math.PI/32))/2));var h=new o["p"](new o["k"](r,12));h.position.y=35,h.updateMatrix();var m=h.clone();m.rotation.z+=Math.PI,m.position.y=-35,m.updateMatrix();var w=new o["p"](new o["e"](8,8,10,8,1));w.position.y+=50,w.updateMatrix(),a.merge(n.geometry,n.matrix),a.merge(h.geometry,h.matrix),a.merge(m.geometry,m.matrix),a.merge(w.geometry,w.matrix);var d=new o["p"](a);d.position.z+=35,d.updateMatrix();var c=d.clone();c.position.z-=70,c.updateMatrix();var y=new v([5,4,80]).mesh;y.position.y+=52,y.updateMatrix();var g=new o["p"](new o["e"](2,2,120,6,1));g.position.set(-60,52,0),g.rotation.z-=Math.PI/2,g.updateMatrix(),t.merge(d.geometry,d.matrix),t.merge(c.geometry,c.matrix),t.merge(y.geometry,y.matrix),t.merge(g.geometry,g.matrix),this.mesh=new o["p"](t,l.lightMetal),this.mesh.name="fuel-tanks",this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},N=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"rotate",function(e){t.propeller.rotation.z+=e}),this.mesh=new o["r"],this.mesh.name="turbine";var a=new o["i"],i=new o["w"];i.moveTo(0,0),i.absarc(0,0,60,0,2*Math.PI);var n=new o["s"];n.moveTo(0,0),n.absarc(0,0,55,0,2*Math.PI),i.holes.push(n);var r=new o["p"](new o["h"](i,{depth:80,steps:1,bevelEnabled:!1}));r.position.z-=40,r.updateMatrix();var s=new v([150,5,30],{x:-130,y:0,z:0}).mesh,h=new v([118,5,10]).mesh;h.rotation.z+=Math.PI/4,h.updateMatrix();var m=new o["p"](new o["e"](20,20,50,8,1));m.rotation.x+=Math.PI/2,m.updateMatrix(),a.merge(r.geometry,r.matrix),a.merge(s.geometry,s.matrix),a.merge(h.geometry,h.matrix),a.merge(m.geometry,m.matrix);var w=new o["p"](a,l.darkMetal);w.castShadow=!0,w.receiveShadow=!0;for(var d=new o["i"],c=0;c<12;c++){var y=new v([50,2,1],{x:4*Math.cos(c*(Math.PI/6)),y:4*Math.sin(c*(Math.PI/6)),z:30}).mesh;y.geometry.translate(20,0,0),y.geometry.vertices[1].z-=8,y.geometry.vertices[1].y+=10,y.rotation.z+=c*Math.PI/6,y.updateMatrix(),d.merge(y.geometry,y.matrix)}var g=new o["p"](new o["e"](10,1,10,8,1));g.rotation.x-=Math.PI/2,g.position.z+=35,g.updateMatrix(),d.merge(g.geometry,g.matrix),this.propeller=new o["p"](d,l.lightMetal),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0,this.mesh.add(w,this.propeller)},D=function e(){var t;Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="cabine";var a=new o["p"](new o["e"](150,100,80,16,1),l.darkMetal);a.scale.x=.5,a.updateMatrix(),this.turbines=[];for(var n=[{x:200,y:-50,z:0,rx:0,ry:0,rz:0},{x:-200,y:-50,z:0,rx:Math.PI,ry:Math.PI,rz:Math.PI/4}],r=0;r<n.length;r++){var s=new N;s.mesh.position.set(n[r].x,n[r].y,n[r].z),s.mesh.rotation.set(n[r].rx,n[r].ry,n[r].rz),s.mesh.rotation.z-=Math.PI/8,this.turbines.push(s)}(t=this.mesh).add.apply(t,[a].concat(Object(i["a"])(this.turbines.map(function(e){return e.mesh})))),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},X=function e(){var t;Object(p["a"])(this,e),this.mesh=new o["r"],this.mesh.name="zeppelin",this.mesh.position.set(-400,550,-900);var a=(new q).mesh;this.fans=[];for(var n=[{x:250,y:0,z:200,ry:0,full:!0,mirrored:!1},{x:240,y:0,z:-200,ry:0,full:!0,mirrored:!0},{x:-250,y:0,z:200,ry:Math.PI,full:!1,mirrored:!1},{x:-240,y:0,z:-200,ry:Math.PI,full:!1,mirrored:!1}],r=0;r<n.length;r++){var s=new C(n[r].full,n[r].mirrored);s.mesh.position.set(n[r].x,n[r].y,n[r].z),s.mesh.rotation.y+=n[r].ry,this.fans.push(s)}var h=(new H).mesh;h.rotation.z-=Math.PI/8,h.position.set(220,-65,-50);for(var m=new o["i"],w=[[new o["z"](200,-110,-15),new o["z"](210,-150,20),new o["z"](195,-10,60),new o["z"](195,-50,100),new o["z"](220,0,160)],[new o["z"](200,-110,-85),new o["z"](210,-160,-140),new o["z"](220,20,-180)]],d=0;d<w.length;d++){var c=new B(4,w[d],40).mesh;m.merge(c.geometry,c.matrix)}var v=new o["p"](m,l.lightMetal);v.castShadow=!0,v.receiveShadow=!0,this.cabine=new D,this.cabine.mesh.position.y-=210,(t=this.mesh).add.apply(t,[this.cabine.mesh,a].concat(Object(i["a"])(this.fans.map(function(e){return e.mesh})),[h,v]))},G=function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[new o["z"](0,0,0),new o["z"](1,1,1)],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;Object(p["a"])(this,e),Object(f["a"])(this,"moveWaves",function(){for(var e=t.mesh.geometry.vertices,a=e.length,i=0;i<a;i++){var n=e[i],r=t.waves[i];n.x=r.x-Math.cos(r.ang)*r.amp,n.y=r.y+Math.sin(r.ang)*r.amp,r.ang+=r.speed}t.mesh.geometry.verticesNeedUpdate=!0});var n=new o["c"](a),r={steps:i,bevelEnabled:!1,extrudePath:n},s=new o["w"],h=36,m=16;s.moveTo(h*Math.cos(0),h*Math.sin(0));for(var w=1;w<m;w++)s.lineTo(h*Math.cos(w*(2*Math.PI)/m),h*Math.sin(w*(2*Math.PI)/m)/1.5);var d=new o["h"](s,r),c=l.water;d.mergeVertices();var v=d.vertices.length;this.waves=[];for(var y=0;y<v;y++){var g=d.vertices[y];this.waves.push({y:g.y,x:g.x,z:g.z,ang:Math.random()*Math.PI*2,amp:5+15*Math.random(),speed:.032+.064*Math.random()})}this.mesh=new o["p"](d,c),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0},W=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"turnLights",function(e){e?(t.light.intensity=.95,t.light.distance=1e3,t.light.decay=2,t.light.castShadow=!0,t.light.shadow.mapSize.width=128,t.light.shadow.mapSize.height=128):(t.light.intensity=0,t.light.distance=1,t.light.decay=1,t.light.castShadow=!1,t.light.shadow.mapSize.width=8,t.light.shadow.mapSize.height=8)}),this.mesh=new o["r"],this.mesh.name="lamp-post";var a=new v([8,100,8]).mesh;a.geometry.vertices[2].x+=1,a.geometry.vertices[2].z+=1,a.geometry.vertices[3].x+=1,a.geometry.vertices[3].z-=1,a.geometry.vertices[6].x-=1,a.geometry.vertices[6].z-=1,a.geometry.vertices[7].x-=1,a.geometry.vertices[7].z+=1,a.updateMatrix();var i=new v([6,6,40],{x:0,y:45,z:12}).mesh,n=new v([4,4,20],{x:0,y:38,z:10}).mesh;n.rotation.x-=Math.PI/4,n.updateMatrix();var r=new o["i"];r.merge(a.geometry,a.matrix),r.merge(i.geometry,i.matrix),r.merge(n.geometry,n.matrix);var s=new o["p"](r,l.wood);s.castShadow=!0,s.receiveShadow=!0;var h=new o["p"](new o["e"](1,6,4,8),l.darkMetal);h.castShadow=!0,h.receiveShadow=!0,h.position.set(0,40,30),this.light=new o["u"](16636818,0,0,0),this.light.castShadow=!1,this.light.shadow.mapSize.width=16,this.light.shadow.mapSize.height=16,this.light.position.set(-10,30,30),this.mesh.add(s,h,this.light)},Y={sunrise:{hemisphereLight:{intensity:.6},ambientLight:{intensity:.3},sunLight:{intensity:.75,position:[630,210,-110],color:16759431}},midday:{hemisphereLight:{intensity:.9},ambientLight:{intensity:.5},sunLight:{intensity:.75,position:[-280,695,350],color:16777215}},sunset:{hemisphereLight:{intensity:.6},ambientLight:{intensity:.3},sunLight:{intensity:.75,position:[-290,560,900],color:16759431}},midnight:{hemisphereLight:{intensity:.025},ambientLight:{intensity:.025},sunLight:{intensity:.025,position:[-420,800,370],color:15658734}}},_=[6,8,17,20],R=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"get",function(e,a){return t.localData[t.lang][e][a]}),this.lang=navigator.language.substring(0,2)||"en",this.localData={en:{weekday:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],month:["january","february","march","aril","may","june","july","august\t","september","october","november","december"]},ru:{weekday:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],month:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]}}},F=function e(){var t=this;Object(p["a"])(this,e),Object(f["a"])(this,"update",function(){if(Date.now()-t.now>6e4){if(t.now=new Date,t.hours=("0"+t.now.getHours()).slice(-2),t.minutes=("0"+t.now.getMinutes()).slice(-2),t.date=t.now.getDate(),t.month=t.lang.get("month",t.now.getMonth()),t.day=t.lang.get("weekday",t.now.getDay()),!t.timeNode)return;t.timeNode.innerHTML="".concat(t.hours,":").concat(t.minutes),t.dayNode.innerHTML="".concat(t.date," ").concat(t.month,", ").concat(t.day)}}),Object(f["a"])(this,"getHours",function(){return t.hours}),this.now=new Date(0),this.lang=new R,this.timeNode=document.getElementById("time"),this.dayNode=document.getElementById("day"),this.update()};function A(){return J.apply(this,arguments)}function J(){return J=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,n,s,w,p,v,y,g,u,x,M,f,b,P,I,S,j,O,T,L,q,B,C,H,N,D,R,A,J,U,V,Z,K,Q,$,ee,te;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return K=function(){q&&q.begin(),C=B.getDelta(),x.fans[0].rotate(5*C),x.fans[1].rotate(6*C),M.fans[0].rotate(-2*C),M.fans[1].rotate(-4*C),x.windvane.rotateFan(C),P[0].moveWaves(),P[1].moveWaves(),P[2].moveWaves(),f.fans[0].rotate(20*C),f.fans[1].rotate(21*C),f.fans[2].rotate(19*C),f.fans[3].rotate(22*C),f.cabine.turbines[0].rotate(.25*C),f.cabine.turbines[1].rotate(.25*C),f.mesh.position.y+=Math.sin(Z*Math.PI),b.position.y+=Math.cos(Z*Math.PI)/2,U.rotation.y+=Math.cos(Z*Math.PI)*V/10,Z+=.01,n.rotation.x+=(-H.nY*(Math.PI/10)+Math.PI/4-n.rotation.x)*V,n.rotation.y+=(H.nX*(Math.PI/8)-Math.PI/4-n.rotation.y)*V,w.render(n,s),D.update(),q&&q.end(),requestAnimationFrame(K)},J=function(e){e>=_[0]&&e<_[1]?(A.className="sunrise",g("sunrise")):e>=_[1]&&e<_[2]?(A.className="midday",g("midday")):e>=_[2]&&e<_[3]?(A.className="sunset",g("sunset")):(A.className="midnight",l.line.color.setHex(1118481),g("midnight"))},g=function(e){var t;p.intensity=Y[e].hemisphereLight.intensity,v.intensity=Y[e].ambientLight.intensity,y.intensity=Y[e].sunLight.intensity,y.color.setHex(Y[e].sunLight.color),(t=y.position).set.apply(t,Object(i["a"])(Y[e].sunLight.position)),"midnight"===e?(j.map(function(e){return e.turnLights(!0)}),l.line.color.setHex(1118481)):(j.map(function(e){return e.turnLights()}),l.line.color.setHex(14465972))},t=window.innerWidth,a=window.innerHeight,window.addEventListener("resize",function(){t=window.innerWidth,a=window.innerHeight,w.setSize(t,a),s.aspect=t/a,s.updateProjectionMatrix()},!1),n=h(),s=m(t,a),e.next=10,d("world",t,a,!0);case 10:for(w=e.sent,p=new o["j"](11184810,0,.9),v=new o["a"](4210752,.5),y=c(),u=new z,x=new k,M=new E,f=new X,b=new o["r"],b.name="islands",b.add(u.mesh,x.mesh,M.mesh),P=[],I=[{points:[new o["z"](-450,690,40),new o["z"](-370,615,40),new o["z"](-195,600,40),new o["z"](-180,210,40),new o["z"](-60,210,50),new o["z"](-20,210,100),new o["z"](15,205,210),new o["z"](0,-180,230),new o["z"](0,-180,570)],steps:25},{points:[new o["z"](0,-250,665),new o["z"](0,-380,665)],steps:4},{points:[new o["z"](-450,90,80),new o["z"](-450,0,80)],steps:2}],S=0;S<I.length;S++)P.push(new G(I[S].points,I[S].steps));for(P.map(function(e){return b.add(e.mesh)}),j=[],O=[{x:-215,y:650,z:-185,ry:0},{x:-215,y:650,z:185,ry:Math.PI},{x:180,y:250,z:-175,ry:-Math.PI/4},{x:170,y:-150,z:400,ry:-Math.PI/2}],T=0;T<O.length;T++)L=new W,L.mesh.position.set(O[T].x,O[T].y,O[T].z),L.mesh.rotation.y+=O[T].ry,j.push(L);b.add.apply(b,Object(i["a"])(j.map(function(e){return e.mesh}))),n.add(p,v,y,b,f.mesh),n.rotation.x=Math.PI/4,n.rotation.y=-Math.PI/4,B=new o["d"],H={x:t/2,y:a/2,nX:0,nY:0},document.addEventListener("mousemove",function(e){H.nX=e.clientX/t*2-1,H.nY=1-e.clientY/a*2}),N={x:0,y:0},window.addEventListener("deviceorientation",function(e){e.beta&&e.gamma&&(N.x=e.beta,N.y=e.gamma,N.x>90&&(N.x=90),N.x<-90&&(N.x=-90),N.y>45&&(N.y=45),N.y<-45&&(N.y=-45),H.nY=N.x/90*2-1,H.nX=1-N.y/45*2)},!0),D=new F,R=+D.getHours(),A=document.getElementById("world"),J(R),U=x.windvane.vane,V=.05,Z=0,document.body.classList.add("loaded"),K(),Q=new r["a"]({autoplace:!1}),Q.closed=!0,$=document.getElementById("gui"),$.appendChild(Q.domElement),ee={cameraControls:!0,isOverride:!1,sunrise:function(){return J(7)},midday:function(){return J(11)},sunset:function(){return J(19)},midnight:function(){return J(0)}},te=Q.addFolder("daytime"),te.add(ee,"sunrise"),te.add(ee,"midday"),te.add(ee,"sunset"),te.add(ee,"midnight"),te.open();case 63:case"end":return e.stop()}},e,this)})),J.apply(this,arguments)}window.addEventListener("load",function(){A();var e=!1,t=function(){e?document.body.classList.add("show-controls"):document.body.classList.remove("show-controls")};t(),document.addEventListener("keyup",function(a){var i=a.keyCode;72===i&&(e=!e,t())}),console.log("press h to show controls")})},"63a6":function(e,t,a){}});
//# sourceMappingURL=app.6d6ee00e.js.map