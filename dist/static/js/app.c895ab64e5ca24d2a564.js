webpackJsonp([1],{"60Pi":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("60Pi"),a("np1r");var i=a("Xxa5"),n=a.n(i),o=(a("mvHQ"),a("Gu7T")),r=a.n(o),s=a("exGp"),h=a.n(s),m=a("od15"),w=a.n(m),d=a("+G5l"),p=a("Ml+6"),c=10335764,v=5876775,y=16767913,g=7496554,l=7496554,x=14465972,u=16645367,M=10972695,z=14070926,f=7942486,P=16711680,I=12158069,S=8435420,b=14277081,T=15658734;function L(e,t){var a=e/t,i=new p.t(50,a,1,3500);return i.position.set(0,-350,2150),i.rotation.set(.2,.036,0),i}var k,E=this,q=(k=h()(n.a.mark(function e(t,a,i){var o,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new p.A({alpha:!0,antialias:r})).setSize(a,i),o.shadowMap.enabled=!0,document.getElementById(t).appendChild(o.domElement),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,E)})),function(e,t,a){return k.apply(this,arguments)});function H(){var e=new p.f(16777215,.75);return e.position.set(-280,695,350),e.castShadow=!0,e.shadow.camera.left=-800,e.shadow.camera.right=800,e.shadow.camera.top=800,e.shadow.camera.bottom=-800,e.shadow.camera.near=1,e.shadow.camera.far=1500,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e}var B=a("Zrlr"),C=a.n(B),N=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[100,100,100],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0,z:0},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cube-"+~~(1e3*Math.random());C()(this,e),this.width=t[0],this.height=t[1],this.depth=t[2],this.color=i,this.geometry=new p.b(this.width,this.height,this.depth),this.material,this.color?this.material=new p.q({color:this.color,flatShading:!0}):this.material=null,this.mesh=new p.p(this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.x+=a.x,this.mesh.position.y+=a.y,this.mesh.position.z+=a.z,this.mesh.name=n,this.mesh.updateMatrix()},D={wood:new p.q({color:M,flatShading:!0}),green:new p.q({color:v,flatShading:!0}),darkMetal:new p.q({color:l,specular:328965,shininess:100}),lightMetal:new p.q({color:x,side:p.g,specular:328965,shininess:100}),glass:new p.q({color:T,side:p.g,transparent:!0,opacity:.5,specular:328965,shininess:1e4}),rust:new p.q({color:I,side:p.g,specular:328965,shininess:100}),brick:new p.q({color:z,flatShading:!0}),roof:new p.q({color:f,flatShading:!0}),white:new p.q({color:u,flatShading:!0}),red:new p.q({color:P,flatShading:!0}),balloon:new p.q({color:b,flatShading:!0,side:p.g}),line:new p.m({color:x,linewidth:1}),water:new p.q({color:S,flatShading:!0,specular:328965,shininess:1e3,transparent:!0,opacity:.8}),override:new p.q({color:14464896,wireframe:!0})},X=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:35,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];C()(this,e);var s=new p.i;this.radius=n,this.segmentsCount=o;var h=r?D.lightMetal:null,m=new p.p(new p.e(n,n,24*t,16,1,!0));if(m.rotation.y=2*Math.PI/80,m.updateMatrix(),s.merge(m.geometry,m.matrix),a){var w=new p.p(new p.x(n,6,10,16,2*Math.PI));w.position.y=12*t,w.rotation.x=Math.PI/2,w.updateMatrix(),s.merge(w.geometry,w.matrix)}if(i){var d=new p.p(new p.x(n,6,10,16,2*Math.PI));d.position.y=-12*t,d.rotation.x=Math.PI/2,d.updateMatrix(),s.merge(d.geometry,d.matrix)}for(var c=new p.e(2,2,24*t,3,1,!0),v=0;v<this.segmentsCount;v++){var y=new p.p(c);y.position.set(n*Math.cos(v*(2*Math.PI)/this.segmentsCount),0,n*Math.sin(v*(2*Math.PI)/this.segmentsCount)),y.updateMatrix(),s.merge(y.geometry,y.matrix)}this.mesh=new p.p(s,h),this.mesh.name="pipe-connection"},j=function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];C()(this,e),this.mesh=new p.r,this.mesh.name="pipe-corner";var i=new p.i,n=new p.x(70,35,16,16,Math.PI/2),o=new p.p(n);if(o.rotation.z=Math.PI/2,o.updateMatrix(),i.merge(o.geometry,o.matrix),a){var r=(new X).mesh;r.rotation.z+=Math.PI/2,r.position.y+=70,r.updateMatrix(),i.merge(r.geometry,r.matrix)}if(t){var s=(new X).mesh;s.position.x-=70,s.updateMatrix(),i.merge(s.geometry,s.matrix)}var h=new p.p(i,D.lightMetal);h.castShadow=!0,h.receiveShadow=!0,this.mesh=h},W=function e(){C()(this,e);var t=new p.w;t.moveTo(0,0),t.absarc(0,0,12,0,2*Math.PI);var a=new p.s;a.moveTo(0,0),a.absarc(0,0,10,0,2*Math.PI),t.holes.push(a);var i=new p.h(t,{curveSegments:8,steps:1,depth:1,bevelEnabled:!1});this.mesh=new p.p(i,D.rust),this.mesh.rotation.x+=Math.PI/2,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.name="chimney"},Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];C()(this,e),this.mesh=new p.r,this.mesh.name="fence";var a=Math.atan(70/130),i=new p.i,n=new p.p(new p.b(5,90,5));if(i.merge(n.geometry,n.matrix),t){var o=n.clone();o.position.z+=130,o.updateMatrix(),i.merge(o.geometry,o.matrix)}var r=new p.p(new p.b(2,2,130));r.position.set(0,25,65),r.updateMatrix(),i.merge(r.geometry,r.matrix);var s=new p.p(i,D.darkMetal);s.name="pillars",s.castShadow=!0,s.receiveShadow=!0;for(var h=new p.i,m=0;m<65;m++)h.vertices.push(new p.z(10*Math.cos(m),10*Math.sin(m),2*m));var w=new p.l(h,D.line);w.name="helix",w.castShadow=!0,w.receiveShadow=!0,w.position.set(-5,40,0);for(var d=new p.i,c=0;c<130;c+=26){var v=130-c;d.vertices.push(new p.z(0,0,c)),d.vertices.push(new p.z(0,v*Math.tan(a),130))}for(var y=130;y>0;y-=26){var g=130-y;d.vertices.push(new p.z(0,70,g)),d.vertices.push(new p.z(0,70-g*Math.tan(a),0))}for(var l=0;l<130;l+=26){var x=130-l;d.vertices.push(new p.z(0,0,x)),d.vertices.push(new p.z(0,x*Math.tan(a),0))}for(var u=0;u<130;u+=26){var M=130-u;d.vertices.push(new p.z(0,70,u)),d.vertices.push(new p.z(0,70-M*Math.tan(a),130))}var z=new p.n(d,D.line);z.position.y-=45,z.castShadow=!0,z.receiveShadow=!0,z.name="grid",this.mesh.add(s,w,z)},F=function e(){C()(this,e),this.mesh=new p.r,this.mesh.name="filter";var t=new p.i,a=new p.p(new p.b(5,30,390)),i=a.clone();i.position.x-=100,i.updateMatrix(),t.merge(a.geometry,a.matrix),t.merge(i.geometry,i.matrix);var n=new p.p(t,D.rust);n.castShadow=!0,n.receiveShadow=!0;for(var o=new p.i,r=0;r<4;r++){var s=4*r;o.vertices.push(new p.z(0,s,-40)),o.vertices.push(new p.z(-100,s,-40))}var h=new p.n(o,D.line);h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(n,h)},G=function e(){C()(this,e),this.mesh=new p.r,this.mesh.name="bottom-island",this.mesh.add(new N([400,400,400],{x:0,y:0,z:0},g).mesh),this.mesh.position.set(0,-400,400);for(var t=new p.i,a=[{x:120,y:350,z:-120,scale:150},{x:135,y:270,z:-90,scale:70},{x:95,y:245,z:-70,scale:50},{x:80,y:240,z:70,scale:40},{x:90,y:230,z:100,scale:30},{x:120,y:220,z:80,scale:20},{x:-130,y:320,z:-110,scale:140},{x:-125,y:270,z:-70,scale:70},{x:-140,y:500,z:90,scale:200}],i=0;i<a.length;i++){var n=(new W).mesh;n.position.set(a[i].x,a[i].y,a[i].z),n.scale.z=a[i].scale,n.updateMatrix(),t.merge(n.geometry,n.matrix)}var o=new p.i,r=new p.p(new p.e(40,40,70,6,1));r.position.set(0,-50,0),r.updateMatrix();var s=(new W).mesh;s.scale.set(3.5,3.5,150),s.updateMatrix(),o.merge(r.geometry,r.matrix),o.merge(s.geometry,s.matrix);var h=new p.p(o,D.rust);h.position.set(-125,325,90),h.updateMatrix(),t.merge(h.geometry,h.matrix);var m=new p.p(t,D.rust);m.castShadow=!0,m.receiveShadow=!0,this.mesh.add(m);for(var w=[{position:{x:0,y:170,z:195},rotation:{x:0,y:Math.PI/2,z:0}},{position:{x:0,y:0,z:195},rotation:{x:0,y:Math.PI/2,z:Math.PI}},{position:{x:215,y:-75,z:10},rotation:{x:Math.PI/2,y:Math.PI/2,z:0}},{position:{x:215,y:-75,z:-20},rotation:{x:Math.PI/2,y:Math.PI,z:0}}],d=0;d<w.length;d++){var c=(new j).mesh;c.position.set(w[d].position.x,w[d].position.y,w[d].position.z),c.rotation.set(w[d].rotation.x,w[d].rotation.y,w[d].rotation.z,"ZYX"),this.mesh.add(c)}for(var v=[{position:{x:195,y:245,z:-195},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:-65},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:65},rotation:{x:0,y:0,z:0}},{position:{x:195,y:245,z:195},rotation:{x:0,y:-Math.PI/2,z:0},isClosed:!0},{position:{x:-65,y:245,z:195},rotation:{x:0,y:-Math.PI/2,z:0},isClosed:!0},{position:{x:-195,y:245,z:-195},rotation:{x:0,y:0,z:0}},{position:{x:-195,y:245,z:-65},rotation:{x:0,y:0,z:0}},{position:{x:-195,y:245,z:65},rotation:{x:0,y:0,z:0}}],y=0;y<v.length;y++){var l=new Y(v[y].isClosed).mesh;l.position.set(v[y].position.x,v[y].position.y,v[y].position.z),l.rotation.set(v[y].rotation.x,v[y].rotation.y,v[y].rotation.z),this.mesh.add(l)}var x=(new F).mesh;x.position.set(50,215,-5),this.mesh.add(x)},A=function e(){var t=this;C()(this,e),this.rotate=function(e){t.propeller.rotation.z+=e},this.mesh=new p.r,this.mesh.name="fan";var a=new p.i,i=new p.p(new p.e(8,8,10,6,1)),n=new p.p(new p.e(5,5,400,6,1)),o=new p.p(new p.e(25,25,50,8,1));o.rotation.x+=Math.PI/2,o.position.y+=200,o.updateMatrix(),a.merge(i.geometry,i.matrix),a.merge(n.geometry,n.matrix),a.merge(o.geometry,o.matrix);var r=new p.p(a,D.darkMetal);r.castShadow=!0,r.receiveShadow=!0;var s=new p.r,h=new p.e(10,10,30,6,1),m=new p.p(h,D.darkMetal);m.receiveShadow=!0,m.castShadow=!0,m.position.z+=30,m.rotation.x=Math.PI/2;for(var w=[],d=new p.b(20,120,2),c=0;c<3;c++){var v=new p.p(d,D.white);v.geometry.translate(0,20,0),v.geometry.vertices[4].y+=5,v.geometry.vertices[4].z-=1,v.geometry.vertices[5].y+=5,v.geometry.vertices[5].z-=1,v.rotation.z=c*(2*Math.PI/3),v.position.z+=40,v.castShadow=!0,v.receiveShadow=!0,w.push(v)}s.position.y+=200,s.add.apply(s,[m].concat(w)),this.propeller=s,this.mesh.add(r,s)},O=function e(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];C()(this,e);var t=new p.i,a=new N([10,20,4],{x:0,y:0,z:0});a.mesh.updateMatrix();var i=new N([28,4,2],{x:-19,y:8,z:0});i.mesh.updateMatrix();var n=new N([28,4,2],{x:-19,y:-3,z:0});n.mesh.updateMatrix();var o=new N([10,6,4],{x:0,y:13,z:0});o.mesh.geometry.vertices[0].x-=5,o.mesh.geometry.vertices[1].x-=5,o.mesh.geometry.vertices[4].x+=5,o.mesh.geometry.vertices[5].x+=5,o.mesh.updateMatrix(),t.merge(n.mesh.geometry,n.mesh.matrix),t.merge(a.mesh.geometry,a.mesh.matrix),t.merge(i.mesh.geometry,i.mesh.matrix),t.merge(o.mesh.geometry,o.mesh.matrix),this.width=38,this.mesh=new p.p(t,D.wood),this.mesh.position.y+=10},Z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,1,1],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;C()(this,e),this.mesh=new p.r,this.mesh.name="pine";var i=new p.e(8,8,15,10,1),n=new p.p(i,D.wood);n.castShadow=!0,n.receiveShadow=!0,n.position.y+=7.5;for(var o=new p.i,r=1;r<=7;r++){var s=45-5*r,h=new p.p(new p.e(s-10,s,10,6,1));h.position.y+=10+70*r/7,h.updateMatrix(),o.merge(h.geometry,h.matrix)}var m=new p.p(o,D.green);m.receiveShadow=!0,m.castShadow=!0,this.mesh.scale.x=t[0],this.mesh.scale.y=t[1],this.mesh.scale.z=t[2],this.mesh.rotation.y=a,this.mesh.add(n,m)},_=function e(){var t=this;C()(this,e),this.rotateFan=function(e){t.fan.rotation.z+=e},this.mesh=new p.r,this.mesh.name="windwane";var a=new p.i,i=new p.i,n=new N([20,200,15],{x:0,y:100,z:0}).mesh;n.geometry.vertices[0].x-=5,n.geometry.vertices[0].z-=5,n.geometry.vertices[1].x-=5,n.geometry.vertices[1].z+=5,n.geometry.vertices[4].x+=5,n.geometry.vertices[4].z+=5,n.geometry.vertices[5].x+=5,n.geometry.vertices[5].z-=5,n.updateMatrix(),i.merge(n.geometry,n.matrix);for(var o=0;o<4;o++){var r=new N([65,10,5],{x:-25,y:30+40*o,z:0}).mesh;r.rotation.z+=Math.PI/4*(o%2==0?-1:1),r.updateMatrix(),i.merge(r.geometry,r.matrix)}for(var s=0;s<4;s++){var h=new p.p(i,D.wood);h.position.x+=40*Math.cos(s*Math.PI/2),h.position.z+=40*Math.sin(s*Math.PI/2),h.rotation.y+=Math.PI/4-s*(Math.PI/2),h.updateMatrix(),a.merge(h.geometry,h.matrix)}var m=new N([80,10,80],{x:0,y:200,z:0}).mesh;m.rotation.y-=Math.PI/4,m.updateMatrix(),a.merge(m.geometry,m.matrix);var w=new p.p(a,D.wood);w.name="stand",w.castShadow=!0,w.receiveShadow=!0,w.rotation.y+=Math.PI/4;var d=new p.i,c=new p.p(new p.e(2,2,60,6,1));c.rotation.z=Math.PI/6,c.position.set(15,230,0),c.updateMatrix();var v=c.clone();v.rotation.z=-Math.PI/6,v.position.x=-15,v.updateMatrix();var y=new p.p(new p.e(4,4,6,6,1));y.position.set(0,255,0),y.updateMatrix(),d.merge(c.geometry,c.matrix),d.merge(v.geometry,v.matrix),d.merge(y.geometry,y.matrix);var g=new p.p(d,D.lightMetal);g.castShadow=!0,g.receiveShadow=!0;var l=new p.r,x=new p.p(new p.e(2,2,100,6,1),D.lightMetal);x.position.set(0,260,0),x.rotation.x+=Math.PI/2,x.receiveShadow=!0,x.castShadow=!0;var u=new p.p(new p.e(3,3,5,6,1),D.lightMetal);u.position.set(0,260,0),u.receiveShadow=!0,u.castShadow=!0;var M=new p.w;M.moveTo(0,8),M.lineTo(9,16),M.lineTo(36,16),M.lineTo(27,8),M.lineTo(36,0),M.lineTo(9,0),M.moveTo(0,8);var z=new p.p(new p.h(M,{steps:2,depth:4,bevelEnabled:!1}),D.red);z.castShadow=!0,z.receiveShadow=!0,z.position.set(-2,252,-25),z.rotation.y=Math.PI/2;for(var f=new p.r,P=new p.i,I=0;I<12;I++){var S=new N([45,2,1],{x:4*Math.cos(I*(Math.PI/6)),y:4*Math.sin(I*(Math.PI/6)),z:0}).mesh;S.geometry.translate(20,0,0),S.geometry.vertices[1].z-=4,S.geometry.vertices[1].y+=10,S.rotation.z+=I*Math.PI/6,S.updateMatrix(),P.merge(S.geometry,S.matrix)}var b=new p.p(P,D.lightMetal);b.castShadow=!0,b.receiveShadow=!0;var T=new p.p(new p.e(4,4,4,6,1),D.darkMetal);T.rotation.x=Math.PI/2,T.castShadow=!0,T.receiveShadow=!0,f.add(b,T),f.position.set(0,260,45),this.fan=f,l.add(x,u,z,f),this.vane=l,this.mesh.add(w,g,l)},J=function e(){C()(this,e);var t=new p.i,a=new N([5,410,5],{x:0,y:205,z:0}).mesh;t.merge(a.geometry,a.matrix);var i=a.clone();i.position.z-=30,i.updateMatrix(),t.merge(i.geometry,i.matrix);for(var n=0;n<40;n++){var o=new N([2,2,30],{x:0,y:10*n+10,z:-15}).mesh;t.merge(o.geometry,o.matrix)}this.mesh=new p.p(t,D.wood),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},Q=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0]];C()(this,e);for(var a=new p.i,i=0;i<t.length;i++){var n=new N([30,40,30],{x:t[i][0],y:t[i][1],z:t[i][2]}).mesh;n.rotation.set(Math.random()*(2*Math.PI),Math.random()*(2*Math.PI),Math.random()*(2*Math.PI)),n.updateMatrix(),a.merge(n.geometry,n.matrix)}this.mesh=new p.p(a,D.lightMetal),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},R=function e(){var t;C()(this,e),this.mesh=new p.r,this.mesh.name="middle-island",this.mesh.add(new N([400,400,400],{x:0,y:0,z:0},y,"middle-cube-basement").mesh),this.fans=[];for(var a=[{x:200,y:100,z:-100,rx:-Math.PI/2,rz:-Math.PI/2},{x:200,y:-50,z:100,rx:-Math.PI/2,rz:-Math.PI/2}],i=0;i<a.length;i++){var n=new A;n.mesh.position.set(a[i].x,a[i].y,a[i].z),n.mesh.rotation.set(a[i].rx,0,a[i].rz),this.fans.push(n)}for(var o=[{x:190,z:-190,ry:0,mx:-1,mz:0,count:11},{x:190,z:185,ry:-Math.PI/2,mx:0,mz:-1,count:10},{x:-190,z:190,ry:0,mx:1,mz:0,count:4},{x:80,z:185,ry:Math.PI,mx:1,mz:0,count:3}],s=new p.i,h=0;h<o.length;h++)for(var m=0;m<o[h].count;m++){var w=(new O).mesh;w.position.set(o[h].x+m*o[h].mx*38,210,o[h].z+m*o[h].mz*38),w.rotation.y=o[h].ry,w.updateMatrix(),s.merge(w.geometry,w.matrix)}var d=new p.p(s,D.wood);d.name="fence-perimeter",d.castShadow=!0,d.receiveShadow=!0;var c=new Z([1.2,2,1.2]).mesh;c.position.set(-140,200,140);var v=new _;v.mesh.position.set(100,200,-50),v.mesh.rotation.y+=Math.PI/16,this.windvane=v;var g=(new J).mesh;g.position.set(-158,200,-90),g.rotation.z=Math.PI/32;for(var l=[],x=0;x<12;x++)l.push([250*Math.cos(x*Math.PI/24),0,-180*Math.sin(x*Math.PI/24)]);for(var u=0;u<8;u++)l.push([150*Math.cos(u*Math.PI/16)+10,0,-100*Math.sin(u*Math.PI/16)]);var M=new Q(l).mesh;M.position.set(-210,200,170);for(var z,f,P=new p.i,I=(new p.i,[{type:"straight",position:[80,-475,125],rotation:[Math.PI/2,0,0]},{type:"connection",position:[80,-475,35],rotation:[Math.PI/2,0,0],options:{m:1}},{type:"arc",position:[80,-397.5,20],rotation:[-Math.PI/2,Math.PI/2,-Math.PI/2],options:{scale:1.1}},{type:"connection",position:[80,-300,-57.5],rotation:[0,0,0],options:{m:8}},{type:"straight",position:[-275,-75,80],rotation:[0,0,Math.PI/2]},{type:"connection",position:[-360,-75,80],rotation:[0,0,Math.PI/2],options:{m:1}},{type:"arc",position:[-370,0,80],rotation:[0,0,Math.PI/2],options:{scale:1.1}},{type:"connection",position:[-450,150,80],rotation:[0,0,0],options:{m:4}}]),S=0;S<I.length;S++){var b=void 0;switch(I[S].type){case"straight":b=new p.p(new p.e(35,35,150,8,1));break;case"connection":b=new X(I[S].options.m).mesh;break;case"arc":(b=new j(!1,!1).mesh).scale.set(I[S].options.scale,I[S].options.scale,I[S].options.scale)}f=I[S],(z=b).position.set(f.position[0],f.position[1],f.position[2]),z.rotation.set(f.rotation[0],f.rotation[1],f.rotation[2]),z.updateMatrix(),P.merge(b.geometry,b.matrix)}var T=new p.p(P,D.lightMetal);T.castShadow=!0,T.receiveShadow=!0,(t=this.mesh).add.apply(t,[d,c,v.mesh,g,M].concat(r()(this.fans.map(function(e){return e.mesh})),[T]))},U=function e(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8;C()(this,e),this.radius=i;var o=new p.c([new p.z(0,0,0),new p.z(0,0,t),new p.z(0,a,t+i)]),r=new p.w;r.moveTo(this.radius*Math.cos(0),this.radius*Math.sin(0));for(var s=1;s<16;s++)r.lineTo(this.radius*Math.cos(s*(2*Math.PI)/16),this.radius*Math.sin(s*(2*Math.PI)/16));this.mesh=new p.p(new p.h(r,{curveSegments:8,steps:n,bevelEnabled:!1,extrudePath:o}))},V=function e(){C()(this,e),this.mesh=new p.r,this.mesh.name="house";var t=140,a=50,i=140,n=new N([t,a,i],{x:0,y:a/2,z:-100},z,"first-floor").mesh;n.castShadow=!0,n.receiveShadow=!0;var o=new N([t+10,a/10,i+10],{x:0,y:a/20,z:-100},l,"basement").mesh;o.castShadow=!0,o.receiveShadow=!0;var r=new p.r,s=new p.p(new p.e(t-40,t-35,5,4,1),D.brick);s.position.y-=2.5,s.castShadow=!0,s.receiveShadow=!0;var h=new p.p(new p.e(20,20,5,4,1),D.brick);h.position.y+=122.5,h.castShadow=!0,h.receiveShadow=!0;var m=new p.p(new p.e(15,15,5,4,1),D.brick);m.position.y+=155,m.castShadow=!0,m.receiveShadow=!0,r.add(s,h,m),r.position.set(0,a,-100),r.rotation.y+=Math.PI/4;for(var w=new p.i,d=[{y:20,rT:50,rB:100,height:40},{y:70,rT:20,rB:50,height:60},{y:110,rT:15,rB:20,height:20},{y:130,rT:30,rB:15,height:10},{y:145,rT:10,rB:30,height:20},{y:165,rT:1,rB:10,height:20}],c=0;c<d.length;c++){var v=new p.p(new p.e(d[c].rT,d[c].rB,d[c].height,4,1));v.position.y+=d[c].y,v.updateMatrix(),w.merge(v.geometry,v.matrix)}var y=new p.p(w,D.roof);y.castShadow=!0,y.receiveShadow=!0,r.add(y);for(var g=new p.i,x=[{x:0,y:100,z:-70,width:30,height:50},{x:-10,y:120,z:-80,width:20,height:80}],u=0;u<x.length;u++){var M=new U(x[u].width,x[u].height).mesh;M.position.set(x[u].x,x[u].y,x[u].z),M.updateMatrix(),g.merge(M.geometry,M.matrix)}var f=new p.p(g,D.lightMetal);f.castShadow=!0,f.receiveShadow=!0;var P=new p.w;P.moveTo(15,-15),P.lineTo(15,15);for(var I=0;I<8;I++)P.lineTo(15*Math.cos(I*Math.PI/8),10*Math.sin(I*Math.PI/8)+15);P.lineTo(-15,-15),P.moveTo(-15,15);var S=new p.p(new p.h(P,{steps:2,depth:4,bevelEnabled:!1}),D.wood);S.castShadow=!0,S.receiveShadow=!0,S.position.set(70,15,-125),S.rotation.y=Math.PI/2;var b=new p.w;b.moveTo(0,0),b.absarc(0,0,15,0,2*Math.PI);var T=new p.s;T.moveTo(0,0),T.absarc(0,0,12,0,2*Math.PI),b.holes.push(T);var L=new p.h(b,{depth:4,steps:1,bevelEnabled:!1}),k=new N([1,30,4]),E=new N([30,1,4]);L.merge(k.geometry,k.matrix),L.merge(E.geometry,E.matrix);var q=new p.p(L,D.wood);q.position.set(70,25,-65),q.rotation.y=Math.PI/2,q.scale.x=1.15,q.receiveShadow=!0,q.castShadow=!0,this.mesh.add(o,n,S,q,r,f)},K=function e(){var t=this;C()(this,e),this.mesh=new p.r,this.mesh.name="top-island",this.mesh.add(new N([400,400,400],{x:0,y:0,z:0},c).mesh),this.fans=[];for(var a=[{x:-100,y:100},{x:100,y:-100}],i=0;i<a.length;i++){var n=new A;n.mesh.position.set(a[i].x,a[i].y,200),n.mesh.rotation.set(Math.PI/2,Math.PI,0),this.fans.push(n)}this.fans.map(function(e){t.mesh.add(e.mesh)});var o=(new V).mesh;o.position.x+=70,o.position.y+=200,o.position.z+=5,o.rotation.y-=Math.PI/16,this.mesh.add(o);for(var r=new p.i,s=[{x:190,z:187,ry:0,mx:-1,mz:0,count:10},{x:-187,z:185,ry:-Math.PI/2,mx:0,mz:-1,count:10},{x:-187,z:-187,ry:Math.PI,mx:1,mz:0,count:10},{x:190,z:118,ry:Math.PI/2,mx:0,mz:1,count:2},{x:187,z:-155,ry:-Math.PI/2,mx:0,mz:-1,count:1}],h=0;h<s.length;h++)for(var m=0;m<s[h].count;m++){var w=(new O).mesh;w.position.set(s[h].x+m*s[h].mx*38,210,s[h].z+m*s[h].mz*38),w.rotation.y=s[h].ry,w.updateMatrix(),r.merge(w.geometry,w.matrix)}var d=new p.p(r,D.wood);d.name="fence-perimeter",d.castShadow=!0,d.receiveShadow=!0,this.mesh.add(d);for(var v=[{x:120,y:200,z:140,sx:1,sy:1,sz:1},{x:15,y:200,z:140,sx:1,sy:1.2,sz:1},{x:-100,y:200,z:140,sx:1.1,sy:1.5,sz:1.1},{x:-90,y:200,z:-80,sx:1.6,sy:1.8,sz:1.6}],y=0;y<v.length;y++){var g=new Z([v[y].sx,v[y].sy,v[y].sz]).mesh;g.position.set(v[y].x,v[y].y,v[y].z),this.mesh.add(g)}var l=(new j).mesh;l.position.x-=60,l.position.y+=215,l.position.z+=40,this.mesh.add(l),this.mesh.position.set(-400,400,0)},$=function e(){C()(this,e),this.mesh=new p.r,this.mesh.name="zeppelin-balloon";for(var t=[],a=0;a<12;a++)t.push(new p.y(200*Math.sin(a*(Math.PI/12)),200*Math.cos(a*(Math.PI/12))*2));var i=new p.p(new p.k(t),D.balloon);i.receiveShadow=!0;var n=new p.w;n.moveTo(t[0].y,t[0].x);for(var o=1;o<t.length-1;o++)n.lineTo(t[o].y,t[o].x);n.moveTo(t[t.length]);var r=new p.p(new p.h(n,{steps:1,depth:20,bevelEnabled:!1}),D.lightMetal);r.rotation.z-=Math.PI/2,r.position.set(5,0,-10),r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(i,r),this.mesh.rotation.x=Math.PI/2},ee=function e(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;C()(this,e),this.radius=t;var n=new p.c(a),o=new p.w;o.moveTo(this.radius*Math.cos(0),this.radius*Math.sin(0));for(var r=1;r<16;r++)o.lineTo(this.radius*Math.cos(r*(2*Math.PI)/16),this.radius*Math.sin(r*(2*Math.PI)/16));this.mesh=new p.p(new p.h(o,{steps:i,bevelEnabled:!1,extrudePath:n})),this.mesh.name="hose"},te=function e(){var t=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];C()(this,e),this.rotate=function(e){t.propeller.rotation.y+=e},this.mesh=new p.r,this.mesh.name="zeppelin-fan";for(var n=new p.i,o=new p.p(new p.e(40,35,80,16,1)),r=[],s=0;s<16;s++)r.push(new p.y(40*Math.cos(s*(Math.PI/32)),40*Math.sin(s*(Math.PI/32))/3));var h=new p.p(new p.k(r,8));h.position.y+=40,h.updateMatrix();var m=new p.p(new p.e(5,5,120,6,1));if(m.position.set(-60,0,0),m.rotation.z-=Math.PI/2,m.updateMatrix(),a){var w=new N([15,45,1]).mesh;w.position.set(35,5,15),w.updateMatrix();var d=w.clone();w.position.z-=30,w.updateMatrix(),n.merge(w.geometry,w.matrix),n.merge(d.geometry,d.matrix);for(var c=-2;c<4;c++){var v=new p.p(new p.e(4,4,30,3,1));v.rotation.set(Math.PI/2,Math.PI/3,0),v.position.set(40+c/2-2,8*c,0),v.updateMatrix(),n.merge(v.geometry,v.matrix)}var y=i?-1:1,g=new ee(4,[new p.z(-10,28,35*y),new p.z(0,5,50*y),new p.z(10,-4,55*y),new p.z(20,-8,50*y),new p.z(24,-12,40*y),new p.z(20,-16,25*y)]).mesh;n.merge(g.geometry,g.matrix)}var l=new p.p(new p.e(5,10,15,6,1,!0));l.position.y+=58,l.updateMatrix(),n.merge(o.geometry,o.matrix),n.merge(h.geometry,h.matrix),n.merge(m.geometry,m.matrix),n.merge(l.geometry,l.matrix);var x=new p.p(n,D.lightMetal);x.castShadow=!0,x.receiveShadow=!0;var u=new p.i,M=new p.p(new p.e(4,4,280,6,1));M.position.set(0,100,0),M.updateMatrix();var z=new p.p(new p.e(12,5,10,6,1));z.position.set(0,228,0),z.updateMatrix();var f=new p.i,P=new p.w;P.moveTo(0,-5);for(var I=-4;I<4;I++)P.lineTo(120+10*Math.cos(I*Math.PI/8),10*Math.sin(I*Math.PI/8));P.lineTo(0,5);for(var S=0;S<4;S++){var b=new p.p(new p.h(P,{curveSegments:8,steps:1,depth:2,bevelEnabled:!1}));b.rotation.z+=S*(Math.PI/2),b.updateMatrix(),f.merge(b.geometry,b.matrix)}var T=new p.p(f,D.white);T.position.set(0,235,0),T.geometry.applyMatrix((new p.o).makeRotationX(Math.PI/2)),T.updateMatrix(),u.merge(M.geometry,M.matrix),u.merge(z.geometry,z.matrix),u.merge(T.geometry,T.matrix),this.propeller=new p.p(u,D.white),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0,this.mesh.add(x,this.propeller)},ae=function e(){C()(this,e);for(var t=new p.i,a=new p.i,i=new p.p(new p.e(30,30,70,16,1)),n=[],o=0;o<16;o++)n.push(new p.y(30*Math.cos(o*(Math.PI/32)),30*Math.sin(o*(Math.PI/32))/2));var r=new p.p(new p.k(n,12));r.position.y=35,r.updateMatrix();var s=r.clone();s.rotation.z+=Math.PI,s.position.y=-35,s.updateMatrix();var h=new p.p(new p.e(8,8,10,8,1));h.position.y+=50,h.updateMatrix(),a.merge(i.geometry,i.matrix),a.merge(r.geometry,r.matrix),a.merge(s.geometry,s.matrix),a.merge(h.geometry,h.matrix);var m=new p.p(a);m.position.z+=35,m.updateMatrix();var w=m.clone();w.position.z-=70,w.updateMatrix();var d=new N([5,4,80]).mesh;d.position.y+=52,d.updateMatrix();var c=new p.p(new p.e(2,2,120,6,1));c.position.set(-60,52,0),c.rotation.z-=Math.PI/2,c.updateMatrix(),t.merge(m.geometry,m.matrix),t.merge(w.geometry,w.matrix),t.merge(d.geometry,d.matrix),t.merge(c.geometry,c.matrix),this.mesh=new p.p(t,D.lightMetal),this.mesh.name="fuel-tanks",this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},ie=function e(){var t=this;C()(this,e),this.rotate=function(e){t.propeller.rotation.z+=e},this.mesh=new p.r,this.mesh.name="turbine";var a=new p.i,i=new p.w;i.moveTo(0,0),i.absarc(0,0,60,0,2*Math.PI);var n=new p.s;n.moveTo(0,0),n.absarc(0,0,55,0,2*Math.PI),i.holes.push(n);var o=new p.p(new p.h(i,{depth:80,steps:1,bevelEnabled:!1}));o.position.z-=40,o.updateMatrix();var r=new N([150,5,30],{x:-130,y:0,z:0}).mesh,s=new N([118,5,10]).mesh;s.rotation.z+=Math.PI/4,s.updateMatrix();var h=new p.p(new p.e(20,20,50,8,1));h.rotation.x+=Math.PI/2,h.updateMatrix(),a.merge(o.geometry,o.matrix),a.merge(r.geometry,r.matrix),a.merge(s.geometry,s.matrix),a.merge(h.geometry,h.matrix);var m=new p.p(a,D.darkMetal);m.castShadow=!0,m.receiveShadow=!0;for(var w=new p.i,d=0;d<12;d++){var c=new N([50,2,1],{x:4*Math.cos(d*(Math.PI/6)),y:4*Math.sin(d*(Math.PI/6)),z:30}).mesh;c.geometry.translate(20,0,0),c.geometry.vertices[1].z-=8,c.geometry.vertices[1].y+=10,c.rotation.z+=d*Math.PI/6,c.updateMatrix(),w.merge(c.geometry,c.matrix)}var v=new p.p(new p.e(10,1,10,8,1));v.rotation.x-=Math.PI/2,v.position.z+=35,v.updateMatrix(),w.merge(v.geometry,v.matrix),this.propeller=new p.p(w,D.lightMetal),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0,this.mesh.add(m,this.propeller)},ne=function e(){var t;C()(this,e),this.mesh=new p.r,this.mesh.name="cabine";var a=new p.p(new p.e(150,100,80,16,1),D.darkMetal);a.scale.x=.5,a.updateMatrix(),this.turbines=[];for(var i=[{x:200,y:-50,z:0,rx:0,ry:0,rz:0},{x:-200,y:-50,z:0,rx:Math.PI,ry:Math.PI,rz:Math.PI/4}],n=0;n<i.length;n++){var o=new ie;o.mesh.position.set(i[n].x,i[n].y,i[n].z),o.mesh.rotation.set(i[n].rx,i[n].ry,i[n].rz),o.mesh.rotation.z-=Math.PI/8,this.turbines.push(o)}(t=this.mesh).add.apply(t,[a].concat(r()(this.turbines.map(function(e){return e.mesh})))),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},oe=function e(){var t;C()(this,e),this.mesh=new p.r,this.mesh.name="zeppelin",this.mesh.position.set(-400,550,-900);var a=(new $).mesh;this.fans=[];for(var i=[{x:250,y:0,z:200,ry:0,full:!0,mirrored:!1},{x:240,y:0,z:-200,ry:0,full:!0,mirrored:!0},{x:-250,y:0,z:200,ry:Math.PI,full:!1,mirrored:!1},{x:-240,y:0,z:-200,ry:Math.PI,full:!1,mirrored:!1}],n=0;n<i.length;n++){var o=new te(i[n].full,i[n].mirrored);o.mesh.position.set(i[n].x,i[n].y,i[n].z),o.mesh.rotation.y+=i[n].ry,this.fans.push(o)}var s=(new ae).mesh;s.rotation.z-=Math.PI/8,s.position.set(220,-65,-50);for(var h=new p.i,m=[[new p.z(200,-110,-15),new p.z(210,-150,20),new p.z(195,-10,60),new p.z(195,-50,100),new p.z(220,0,160)],[new p.z(200,-110,-85),new p.z(210,-160,-140),new p.z(220,20,-180)]],w=0;w<m.length;w++){var d=new ee(4,m[w],40).mesh;h.merge(d.geometry,d.matrix)}var c=new p.p(h,D.lightMetal);c.castShadow=!0,c.receiveShadow=!0,this.cabine=new ne,this.cabine.mesh.position.y-=210,(t=this.mesh).add.apply(t,[this.cabine.mesh,a].concat(r()(this.fans.map(function(e){return e.mesh})),[s,c]))},re=function(){var e=this;this.moveWaves=function(){for(var t=e.mesh.geometry.vertices,a=t.length,i=0;i<a;i++){var n=t[i],o=e.waves[i];n.x=o.x-Math.cos(o.ang)*o.amp,n.y=o.y+Math.sin(o.ang)*o.amp,o.ang+=o.speed}e.mesh.geometry.verticesNeedUpdate=!0}},se=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[new p.z(0,0,0),new p.z(1,1,1)],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;C()(this,e),re.call(this);var i={steps:a,bevelEnabled:!1,extrudePath:new p.c(t)},n=new p.w;n.moveTo(36*Math.cos(0),36*Math.sin(0));for(var o=1;o<16;o++)n.lineTo(36*Math.cos(o*(2*Math.PI)/16),36*Math.sin(o*(2*Math.PI)/16)/1.5);var r=new p.h(n,i),s=D.water;r.mergeVertices();var h=r.vertices.length;this.waves=[];for(var m=0;m<h;m++){var w=r.vertices[m];this.waves.push({y:w.y,x:w.x,z:w.z,ang:Math.random()*Math.PI*2,amp:5+15*Math.random(),speed:.032+.064*Math.random()})}this.mesh=new p.p(r,s),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0},he=function e(){var t=this;C()(this,e),this.turnLights=function(e){e?(t.light.intensity=.95,t.light.distance=1e3,t.light.decay=2,t.light.castShadow=!0,t.light.shadow.mapSize.width=128,t.light.shadow.mapSize.height=128):(t.light.intensity=0,t.light.distance=1,t.light.decay=1,t.light.castShadow=!1,t.light.shadow.mapSize.width=8,t.light.shadow.mapSize.height=8)},this.mesh=new p.r,this.mesh.name="lamp-post";var a=new N([8,100,8]).mesh;a.geometry.vertices[2].x+=1,a.geometry.vertices[2].z+=1,a.geometry.vertices[3].x+=1,a.geometry.vertices[3].z-=1,a.geometry.vertices[6].x-=1,a.geometry.vertices[6].z-=1,a.geometry.vertices[7].x-=1,a.geometry.vertices[7].z+=1,a.updateMatrix();var i=new N([6,6,40],{x:0,y:45,z:12}).mesh,n=new N([4,4,20],{x:0,y:38,z:10}).mesh;n.rotation.x-=Math.PI/4,n.updateMatrix();var o=new p.i;o.merge(a.geometry,a.matrix),o.merge(i.geometry,i.matrix),o.merge(n.geometry,n.matrix);var r=new p.p(o,D.wood);r.castShadow=!0,r.receiveShadow=!0;var s=new p.p(new p.e(1,6,4,8),D.darkMetal);s.castShadow=!0,s.receiveShadow=!0,s.position.set(0,40,30),this.light=new p.u(16636818,0,0,0),this.light.castShadow=!1,this.light.shadow.mapSize.width=16,this.light.shadow.mapSize.height=16,this.light.position.set(-10,30,30),this.mesh.add(r,s,this.light)},me={sunrise:{hemisphereLight:{intensity:.6},ambientLight:{intensity:.3},sunLight:{intensity:.75,position:[630,210,-110],color:16759431}},midday:{hemisphereLight:{intensity:.9},ambientLight:{intensity:.5},sunLight:{intensity:.75,position:[-280,695,350],color:16777215}},sunset:{hemisphereLight:{intensity:.6},ambientLight:{intensity:.3},sunLight:{intensity:.75,position:[-290,560,900],color:16759431}},midnight:{hemisphereLight:{intensity:.025},ambientLight:{intensity:.025},sunLight:{intensity:.025,position:[-420,800,370],color:15658734}}},we=[6,8,17,20],de=function e(){var t=this;C()(this,e),this.get=function(e,a){return t.localData[t.lang][e][a]},this.lang=navigator.language.substring(0,2)||"en",this.localData={en:{weekday:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],month:["january","february","march","aril","may","june","july","august\t","september","october","november","december"]},ru:{weekday:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],month:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]}}},pe=function e(){var t=this;C()(this,e),this.update=function(){if(Date.now()-t.now>6e4){if(t.now=new Date,t.hours=("0"+t.now.getHours()).slice(-2),t.minutes=("0"+t.now.getMinutes()).slice(-2),t.date=t.now.getDate(),t.month=t.lang.get("month",t.now.getMonth()),t.day=t.lang.get("weekday",t.now.getDay()),!t.timeNode)return;t.timeNode.innerHTML=t.hours+":"+t.minutes,t.dayNode.innerHTML=t.date+" "+t.month+", "+t.day}},this.getHours=function(){return t.hours},this.now=new Date(0),this.lang=new de,this.timeNode=document.getElementById("time"),this.dayNode=document.getElementById("day"),this.update()},ce=function(){var e=h()(n.a.mark(function e(){var t,a,i,o,s,h,m,c,v,y,g,l,x,u,M,z,f,P,I,S,b,T,k,E,B,C,N,X,j,W,Y,F,A,O,Z,_,J;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O=function e(){T&&T.begin(),E=k.getDelta(),g.fans[0].rotate(5*E),g.fans[1].rotate(6*E),l.fans[0].rotate(-2*E),l.fans[1].rotate(-4*E),g.windvane.rotateFan(E),M[0].moveWaves(),M[1].moveWaves(),M[2].moveWaves(),x.fans[0].rotate(20*E),x.fans[1].rotate(21*E),x.fans[2].rotate(19*E),x.fans[3].rotate(22*E),x.cabine.turbines[0].rotate(.25*E),x.cabine.turbines[1].rotate(.25*E),x.mesh.position.y+=Math.sin(A*Math.PI),u.position.y+=Math.cos(A*Math.PI)/2,Y.rotation.y+=Math.cos(A*Math.PI)*F/10,A+=.01,i.rotation.x+=(-B.nY*(Math.PI/10)+Math.PI/4-i.rotation.x)*F,i.rotation.y+=(B.nX*(Math.PI/8)-Math.PI/4-i.rotation.y)*F,s.render(i,o),N.update(),T&&T.end(),requestAnimationFrame(e)},W=function(e){e>=we[0]&&e<we[1]?(j.className="sunrise",v("sunrise")):e>=we[1]&&e<we[2]?(j.className="midday",v("midday")):e>=we[2]&&e<we[3]?(j.className="sunset",v("sunset")):(j.className="midnight",D.line.color.setHex(1118481),v("midnight"))},v=function(e){var t;h.intensity=me[e].hemisphereLight.intensity,m.intensity=me[e].ambientLight.intensity,c.intensity=me[e].sunLight.intensity,c.color.setHex(me[e].sunLight.color),(t=c.position).set.apply(t,r()(me[e].sunLight.position)),"midnight"===e?(P.map(function(e){return e.turnLights(!0)}),D.line.color.setHex(1118481)):(P.map(function(e){return e.turnLights()}),D.line.color.setHex(14465972))},t=window.innerWidth,a=window.innerHeight,window.addEventListener("resize",function(){t=window.innerWidth,a=window.innerHeight,s.setSize(t,a),o.aspect=t/a,o.updateProjectionMatrix()},!1),i=new p.v,o=L(t,a),e.next=10,q("world",t,a,!0);case 10:for(s=e.sent,h=new p.j(11184810,0,.9),m=new p.a(4210752,.5),c=H(),y=new G,g=new R,l=new K,x=new oe,(u=new p.r).name="islands",u.add(y.mesh,g.mesh,l.mesh),M=[],z=[{points:[new p.z(-450,690,40),new p.z(-370,615,40),new p.z(-195,600,40),new p.z(-180,210,40),new p.z(-60,210,50),new p.z(-20,210,100),new p.z(15,205,210),new p.z(0,-180,230),new p.z(0,-180,570)],steps:25},{points:[new p.z(0,-250,665),new p.z(0,-380,665)],steps:4},{points:[new p.z(-450,90,80),new p.z(-450,0,80)],steps:2}],f=0;f<z.length;f++)M.push(new se(z[f].points,z[f].steps));for(M.map(function(e){return u.add(e.mesh)}),P=[],I=[{x:-215,y:650,z:-185,ry:0},{x:-215,y:650,z:185,ry:Math.PI},{x:180,y:250,z:-175,ry:-Math.PI/4},{x:170,y:-150,z:400,ry:-Math.PI/2}],S=0;S<I.length;S++)(b=new he).mesh.position.set(I[S].x,I[S].y,I[S].z),b.mesh.rotation.y+=I[S].ry,P.push(b);u.add.apply(u,r()(P.map(function(e){return e.mesh}))),i.add(h,m,c,u,x.mesh),i.rotation.x=Math.PI/4,i.rotation.y=-Math.PI/4,T=void 0,(T=new w.a).showPanel(0),document.body.appendChild(T.dom),k=new p.d,E=void 0,B={x:t/2,y:a/2,nX:0,nY:0},document.addEventListener("mousemove",function(e){B.nX=e.clientX/t*2-1,B.nY=1-e.clientY/a*2}),C={x:0,y:0},window.addEventListener("deviceorientation",function(e){e.beta&&e.gamma&&(C.x=e.beta,C.y=e.gamma,C.x>90&&(C.x=90),C.x<-90&&(C.x=-90),C.y>45&&(C.y=45),C.y<-45&&(C.y=-45),B.nY=C.x/90*2-1,B.nX=1-C.y/45*2)},!0),N=new pe,X=+N.getHours(),j=document.getElementById("world"),W(X),Y=g.windvane.vane,F=.05,A=0,document.body.classList.add("loaded"),O(),(Z=new d.a({autoplace:!1})).closed=!0,document.getElementById("gui").appendChild(Z.domElement),_={cameraControls:!0,isOverride:!1,sunrise:function(){return W(7)},midday:function(){return W(11)},sunset:function(){return W(19)},midnight:function(){return W(0)}},(J=Z.addFolder("daytime")).add(_,"sunrise"),J.add(_,"midday"),J.add(_,"sunset"),J.add(_,"midnight"),J.open();case 65:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();window.addEventListener("load",function(){ce();var e=!1,t=function(){e?document.body.classList.add("show-controls"):document.body.classList.remove("show-controls")};t(),document.addEventListener("keyup",function(a){72===a.keyCode&&(e=!e,t())}),console.log("press h to show controls")})},np1r:function(e,t){}},["NHnr"]);