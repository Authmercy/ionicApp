"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1167],{1167:(T,u,l)=>{l.r(u),l.d(u,{ListPageModule:()=>w});var d=l(6814),m=l(95),a=l(8602),g=l(2692),h=l(5861),t=l(9212),f=l(9862),M=l(8662),x=l(7413),P=l(9145);function _(i,r){1&i&&(t.TgZ(0,"ion-item")(1,"ion-skeleton-text",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"ion-label")(4,"h2"),t._UZ(5,"ion-skeleton-text",13),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"ion-skeleton-text",13),t.qZA(),t.TgZ(8,"p"),t._UZ(9,"ion-skeleton-text",13),t.qZA()()())}const C=()=>[1,2,3,4,5,6];function v(i,r){1&i&&(t.TgZ(0,"ion-list"),t.YNc(1,_,10,0,"ion-item",10),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,C)))}function L(i,r){if(1&i){const c=t.EpF();t.TgZ(0,"ion-item")(1,"ion-avatar"),t._UZ(2,"img",14),t.qZA(),t.TgZ(3,"ion-label")(4,"h2"),t._uU(5),t._UZ(6,"ion-icon",15),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._UZ(10,"ion-icon",16),t._uU(11),t.qZA()(),t.TgZ(12,"ion-button",17),t.NdJ("click",function(){const e=t.CHM(c).$implicit,s=t.oxw(2);return t.KtG(s.plusdetails(e))}),t._uU(13," voir +"),t.qZA()()}if(2&i){const c=r.$implicit;t.xp6(5),t.Oqu(c.properties.name),t.xp6(3),t.hij(" ",c.properties.formatted,""),t.xp6(3),t.Oqu(c.properties.street)}}function O(i,r){if(1&i&&(t.TgZ(0,"ion-list"),t.YNc(1,L,14,3,"ion-item",10),t.qZA()),2&i){const c=t.oxw();t.xp6(1),t.Q6J("ngForOf",c.liste)}}const Z=()=>["/acote"],y=()=>["/list"],A=[{path:"",component:(()=>{var i;class r{constructor(o,n,e,s,p){this.http=o,this.geolocation=n,this.nativeGeocoder=e,this.mapsService=s,this.router=p,this.latitude=0,this.longitude=0,this.cat="map",this.pending=!1,this.liste=[],this.options={timeout:1e4,enableHighAccuracy:!0,maximumAge:3600},this.nativeGeocoderOptions={useLocale:!0,maxResults:5},this.listLat=[],this.listLong=[]}ngOnInit(){var o=this;return(0,h.Z)(function*(){o.getAutourdemoiList(),o.mapsService.initMap("bingMap","Apw2frPNDQwenaJt-Qwt5nDdvYBw_wtG0r6PVoFydMmn_o4uMNjCN_4UMzJZow0w"),o.currentPosition=yield o.mapsService.getPosition(),o.AutorLocation=yield o.mapsService.getAutour(),o.mapsService.centerMap(o.currentPosition),o.mapsService.AutourMap(o.AutorLocation),o.mapsService.addMarker(o.currentPosition,"Ma position"),o.mapsService.addMarker2(o.AutorLocation,"AutorLocation"),o.calculateAndDisplayRoute()})()}getMap(){}getList(){this.cat="list"}getCurrentCoordinates(){this.geolocation.getCurrentPosition().then(o=>{console.log(o),this.latitude=o.coords.latitude,this.longitude=o.coords.longitude,this.getAddress(this.latitude,this.longitude);const n={latitude:o.coords.latitude,longitude:o.coords.longitude};console.log("Get location"),this.mapsService.centerMap(n),this.mapsService.addMarker(new Microsoft.Maps.Location(n.latitude,n.longitude),"Ma Position")}).catch(o=>{console.log("Error getting location",o)})}calculateAndDisplayRoute(){const o=this.mapsService.getMap();if(o&&Microsoft.Maps.Directions&&Microsoft.Maps.Directions.DirectionsManager){const n=new Microsoft.Maps.Directions.DirectionsManager(o),e=new Microsoft.Maps.Directions.Waypoint({location:new Microsoft.Maps.Location(this.currentPosition.latitude,this.currentPosition.longitude)}),s=new Microsoft.Maps.Directions.Waypoint({location:new Microsoft.Maps.Location(40.7128,-74.006)});n.addWaypoint(e),n.addWaypoint(s),n.calculateDirections()}else console.error("Erreur lors du calcul de 'itin\xe9raire : DirectionsManager non disponible.")}getAddress(o,n){this.nativeGeocoder.reverseGeocode(o,n,this.nativeGeocoderOptions).then(e=>{this.address=this.pretifyAddress(e[0]),console.log("Get Adress")}).catch(e=>{alert("Error getting location"+JSON.stringify(e))})}pretifyAddress(o){let n=[],e="";for(let s in o)n.push(o[s]);n.reverse();for(let s in n)n[s].length&&(e+=n[s]+", ");return o.slice(0,-2)}getAutourdemoiList(){this.geolocation.getCurrentPosition().then(o=>{console.log(o),this.latitude=o.coords.latitude,this.longitude=o.coords.longitude,this.getAddress(this.latitude,this.longitude),console.log({latitude:o.coords.latitude,longitude:o.coords.longitude}),this.http.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket,commercial.clothing,commercial.food_and_drink,accommodation.hotel&filter=circle:"+this.longitude+","+this.latitude+",5000&bias=proximity:"+this.longitude+","+this.latitude+"&limit=50&apiKey=549757e660ae405c93a95c0ba18a27ee").subscribe(e=>{console.log(e),this.liste=e.features,this.pending=!0,console.log(e.features);for(let s=0;s<50;s++)console.log(e.features[s].geometry.coordinates[1]),this.name=e.features.categories,this.listLat=e.features[s].geometry.coordinates[1],this.listLong=e.features[s].geometry.coordinates[0],this.name=e.features[s].properties.name,console.log(this.listLong,this.listLat),this.mapsService.centerMap(this.AutorLocation),this.mapsService.addMarker2(new Microsoft.Maps.Location(this.listLat,this.listLong),this.name)},e=>{console.log(e)})})}plusdetails(o){localStorage.setItem("hotels",JSON.stringify(o)),this.router.navigate(["details"])}}return(i=r).\u0275fac=function(o){return new(o||i)(t.Y36(f.eN),t.Y36(M.b),t.Y36(x.d),t.Y36(P.Q),t.Y36(g.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:18,vars:7,consts:[[1,"ion-no-border"],["slot","start"],["justify-content-center",""],[3,"fullscreen"],[1,"container"],["size","6",1,"element"],["color","light",1,"custom-badge",3,"routerLink"],["name","map-outline"],["name","list-outline"],[4,"ngIf"],[4,"ngFor","ngForOf"],["animated","",2,"width","20%"],["src","","height","90px"],["animated","",2,"width","80%"],["src","assets/images/zinga.jpg","height","90px"],["name","heart-outline"],["name","location-outline"],["expand","block","color","success","slot","end",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar"),t._UZ(2,"ion-back-button",1),t.TgZ(3,"ion-title",2),t._uU(4,"Close to me "),t.qZA()()(),t.TgZ(5,"ion-content",3)(6,"div",4)(7,"ion-col",5)(8,"ion-badge",6),t._UZ(9,"ion-icon",7),t._uU(10," MAP "),t.qZA()(),t.TgZ(11,"ion-col",5)(12,"ion-badge",6),t._UZ(13,"ion-icon",8),t._uU(14,"LIST "),t.qZA()()(),t.TgZ(15,"div"),t.YNc(16,v,2,2,"ion-list",9)(17,O,2,1,"ion-list",9),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(3),t.Q6J("routerLink",t.DdM(5,Z)),t.xp6(4),t.Q6J("routerLink",t.DdM(6,y)),t.xp6(4),t.Q6J("ngIf",!n.pending),t.xp6(1),t.Q6J("ngIf",n.pending))},dependencies:[d.sg,d.O5,a.BJ,a.yp,a.YG,a.wI,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.CK,a.wd,a.sr,a.oU,a.YI,g.rH],styles:["ion-toolbar[_ngcontent-%COMP%]{background:#848FF2}ion-content[_ngcontent-%COMP%]{--ion-background-color:#EDECF9 !important}ion-back-button[_ngcontent-%COMP%]{margin-top:15px}ion-searchbar[_ngcontent-%COMP%]{width:90%;font-size:1rem;margin-top:13px;margin-left:auto;margin-right:auto}ion-item[_ngcontent-%COMP%]{height:120px}swiper-container[_ngcontent-%COMP%]{margin-top:30px}.pagination[_ngcontent-%COMP%]{margin-top:80px}ion-badge[_ngcontent-%COMP%]{padding:8px 0;border-radius:18px;color:#8c8c8c;border:1px solid #8c8c8c;width:100%;text-align:center}ion-icon[_ngcontent-%COMP%]{color:#6874e1}.img[_ngcontent-%COMP%]{background-color:#fff;margin-top:10px;box-shadow:#00000026 1.95px 1.95px 2.6px;display:grid;grid-template-columns:40% 35% 15% 10%;border-end-end-radius:15px;padding:10px;height:auto;width:100%}.image[_ngcontent-%COMP%]{padding:10px;height:auto;width:100%}.h3[_ngcontent-%COMP%]{margin-right:10px;justify-self:center;color:#6874e1}.orderId[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a1a18b}.button-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.custom-button[_ngcontent-%COMP%]{flex-basis:25%;margin-bottom:15px;width:5px;height:5px;font-size:10px;margin-right:auto}@media (max-width: 200px){.custom-button[_ngcontent-%COMP%]{flex-basis:15%}}.container[_ngcontent-%COMP%]{display:flex;font-size:10px;padding:3%}.container[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]{margin-left:auto}ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px;height:80px;width:80px;margin-right:10px}ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-left:3px}ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}ion-button[_ngcontent-%COMP%]{margin-top:auto}p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#aabe14}h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#be141496}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}"]}),r})()}];let b=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(A),g.Bz]}),r})(),w=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,m.u5,a.Pc,b]}),r})()}}]);