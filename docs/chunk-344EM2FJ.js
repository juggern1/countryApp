import{A as T,B as D,C as F,D as R,E as Q,F as w,G as b,H as M,I as W,J as X,N as Y,P as Z,Q as ee,R as L,V as j,W as te,X as ie,a as O,b as q,c as k,d as z,e as V,f as I,g as H,h as u,i as _,j as G,k as J,l as B,m as c,n as f,o as p,p as h,q as r,r as o,s as l,t as K,u as x,v,w as P,x as a,y as d,z as S}from"./chunk-HMUE5FWW.js";var g=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1"}getCountriesRequest(i){return this.http.get(i).pipe(k(()=>O([])))}searchCountryByAlphaCode(i){let n=`${this.apiUrl}/alpha/${i}`;return this.http.get(n).pipe(q(m=>m.length>0?m[0]:null),k(()=>O(null)))}searchCapital(i){let n=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(n)}searchCountry(i){let n=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(n)}searchRegion(i){let n=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(n)}};e.\u0275fac=function(n){return new(n||e)(H(X))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function me(t,e){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),o())}var le=t=>["/countries/by",t];function pe(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),l(6,"img",5),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),D(13,"number"),o(),r(14,"td")(15,"a",6),a(16,"Info"),o()()()),t&2){let s=e.$implicit,i=e.index;c(2),d(i+1),c(2),d(s.flag),c(2),p("src",s.flags.svg,B)("alt",s.name.common),c(2),d(s.name.common),c(2),d(s.capital),c(2),d(F(13,8,s.population)),c(3),p("routerLink",T(10,le,s.cca3))}}function de(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Bandera"),o(),r(7,"th"),a(8,"Icon"),o(),r(9,"th"),a(10,"Nombre"),o(),r(11,"th"),a(12,"Capital"),o(),r(13,"th"),a(14,"Poblaci\xF3n"),o(),l(15,"th"),o()(),r(16,"tbody"),h(17,pe,17,12,"tr",4),o()()),t&2){let s=v();c(17),p("ngForOf",s.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,m){if(n&1&&h(0,me,2,0,"div",0)(1,de,18,1,"ng-template",null,1,R),n&2){let y=P(2);p("ngIf",m.countries.length===0)("ngIfElse",y)}},dependencies:[w,b,ee,M],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function fe(t,e){t&1&&l(0,"shared-loading-spinner")}var ne=(()=>{let e=class e{constructor(i){this.countriesServices=i,this.countries=[],this.isLoading=!1}searchByCapital(i){this.isLoading=!0,this.countriesServices.searchCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1}),console.log({term:i})}};e.\u0275fac=function(n){return new(n||e)(f(g))},e.\u0275cmp=u({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Introduzca una capital",3,"onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por Capital"),o(),l(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return m.searchByCapital($)}),o()()(),r(6,"div",0)(7,"div",1),l(8,"hr"),h(9,fe,1,0,"shared-loading-spinner",3),l(10,"countries-table",4),o()()),n&2&&(c(9),p("ngIf",m.isLoading),c(1),p("countries",m.countries))},dependencies:[b,te,j,E]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(i){this.countriesServices=i,this.countries=[]}searchByCountry(i){this.countriesServices.searchCountry(i).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(f(g))},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Introduzca un pa\xEDs",3,"onDebounce"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),o(),l(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return m.searchByCountry($)}),o()()(),l(6,"hr"),r(7,"div",0)(8,"div",1),l(9,"countries-table",3),o()()),n&2&&(c(9),p("countries",m.countries))},dependencies:[j,E]});let t=e;return t})();var he=t=>({"btn-outline-primary":t});function ge(t,e){if(t&1){let s=K();r(0,"button",5),x("click",function(){let m=G(s).$implicit,y=v();return J(y.searchByRegion(m))}),a(1),o()}if(t&2){let s=e.$implicit,i=v();p("ngClass",T(2,he,i.selectedRegion===s)),c(1),S(" ",s," ")}}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}searchByRegion(i){this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(f(g))},e.\u0275cmp=u({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),o(),l(2,"hr"),r(3,"div",0)(4,"div",1),h(5,ge,2,4,"button",2),o()(),l(6,"hr"),r(7,"div",0)(8,"div",3),l(9,"countries-table",4),o()()),n&2&&(c(5),p("ngForOf",m.regions),c(4),p("countries",m.countries))},dependencies:[Q,w,E]});let t=e;return t})();function ye(t,e){t&1&&(r(0,"div",2),a(1," Espere por favor "),o())}function ve(t,e){if(t&1&&(r(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"h2"),a(5,"Pa\xEDs: "),r(6,"strong"),a(7),o()(),l(8,"hr"),o()(),r(9,"div")(10,"div",3)(11,"div",5)(12,"h3"),a(13,"Bandera"),o(),l(14,"img",6)(15,"hr"),o(),r(16,"div",7)(17,"h3"),a(18,"INFORMACI\xD3N"),o(),r(19,"ul",8)(20,"li",9)(21,"strong"),a(22,"Poblaci\xF3n:"),o(),a(23),D(24,"number"),o(),r(25,"li",9)(26,"strong"),a(27,"C\xF3digo:"),o(),a(28),o()()()()(),r(29,"div",10)(30,"div",7)(31,"h3"),a(32,"Traducciones"),o(),r(33,"div",11)(34,"span",12),a(35),o(),r(36,"span",12),a(37),o(),r(38,"span",12),a(39),o(),r(40,"span",12),a(41),o(),r(42,"span",12),a(43),o()()()()()()),t&2){let s=v();c(7),d(s.country.name.common),c(7),p("src",s.country.flags.svg,B)("alt",s.country.name.common),c(9),S(" ",F(24,10,s.country.population)," "),c(5),S(" ",s.country.cca3," "),c(7),d(s.country.translations.ara.common),c(2),d(s.country.translations.ces.common),c(2),d(s.country.translations.deu.common),c(2),d(s.country.translations.est.common),c(2),d(s.country.translations.jpn.common)}}var ae=(()=>{let e=class e{constructor(i,n,m){this.activatedRoute=i,this.router=n,this.countriesService=m}ngOnInit(){this.activatedRoute.params.pipe(z(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(f(Y),f(Z),f(g))},e.\u0275cmp=u({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,m){if(n&1&&h(0,ye,2,0,"ng-template",null,0,R)(2,ve,44,12,"div",1),n&2){let y=P(1);c(2),p("ngIf",m.country)("ngIfElse",y)}},dependencies:[b,M]});let t=e;return t})();var Ce=[{path:"by-capital",component:ne},{path:"by-country",component:oe},{path:"by-region",component:re},{path:"by/:id",component:ae},{path:"**",redirectTo:"by-capital"}],ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[L.forChild(Ce),L]});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[W,ce,ie]});let t=e;return t})();export{Je as CountriesModule};
