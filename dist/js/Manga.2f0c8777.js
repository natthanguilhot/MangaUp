(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Manga"],{"04d1":function(e,t,n){var r=n("342f"),a=r.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"3fab":function(e,t,n){},"40e3":function(e,t,n){"use strict";n("3fab")},"4dae":function(e,t,n){var r=n("da84"),a=n("23cb"),o=n("07fa"),c=n("8418"),i=r.Array,s=Math.max;e.exports=function(e,t,n){for(var r=o(e),l=a(t,r),u=a(void 0===n?r:n,r),b=i(s(u-l,0)),d=0;l<u;l++,d++)c(b,d,e[l]);return b.length=d,b}},"4e82":function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),o=n("59ed"),c=n("7b0b"),i=n("07fa"),s=n("577e"),l=n("d039"),u=n("addb"),b=n("a640"),d=n("04d1"),h=n("d998"),f=n("2d00"),m=n("512c"),j=[],g=a(j.sort),p=a(j.push),O=l((function(){j.sort(void 0)})),w=l((function(){j.sort(null)})),v=b("sort"),k=!l((function(){if(f)return f<70;if(!(d&&d>3)){if(h)return!0;if(m)return m<603;var e,t,n,r,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)j.push({k:t+r,v:n})}for(j.sort((function(e,t){return t.v-e.v})),r=0;r<j.length;r++)t=j[r].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),y=O||!w||!v||!k,M=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:s(t)>s(n)?1:-1}};r({target:"Array",proto:!0,forced:y},{sort:function(e){void 0!==e&&o(e);var t=c(this);if(k)return void 0===e?g(t):g(t,e);var n,r,a=[],s=i(t);for(r=0;r<s;r++)r in t&&p(a,t[r]);u(a,M(e)),n=a.length,r=0;while(r<n)t[r]=a[r++];while(r<s)delete t[r++];return t}})},"512c":function(e,t,n){var r=n("342f"),a=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"8a7a":function(e,t,n){"use strict";n("bbbd")},"935d":function(e,t,n){"use strict";n("9a16")},"9a16":function(e,t,n){},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,o=function(e,t){var n=e.length,s=a(n/2);return n<8?c(e,t):i(e,o(r(e,0,s),t),o(r(e,s),t),t)},c=function(e,t){var n,r,a=e.length,o=1;while(o<a){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},i=function(e,t,n,r){var a=t.length,o=n.length,c=0,i=0;while(c<a||i<o)e[c+i]=c<a&&i<o?r(t[c],n[i])<=0?t[c++]:n[i++]:c<a?t[c++]:n[i++];return e};e.exports=o},bbbd:function(e,t,n){},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},e4f1:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"min-h-screen bg-white text-black dark:bg-gray-700 dark:text-white relative"},o={class:"m-auto w-auto flex justify-center items-center"},c={key:0},i={key:1};function s(e,t,n,s,l,u){var b=Object(r["A"])("TheDarkModeSwitcher"),d=Object(r["A"])("FormAddManga"),h=Object(r["A"])("TheMangaArray");return Object(r["t"])(),Object(r["g"])("div",a,[Object(r["k"])(b),Object(r["h"])("div",o,[Object(r["h"])("button",{onClick:t[0]||(t[0]=function(e){return l.formAddManga=!l.formAddManga}),"aria-label":"Ajouter un manga",class:"p-4 border-4 hover:shadow-md m-4 rounded-full w-12 h-12 flex justify-center items-center text-4xl active:scale-90 transform duration-75"},[0==l.formAddManga?(Object(r["t"])(),Object(r["g"])("span",c,"+")):(Object(r["t"])(),Object(r["g"])("span",i,"-"))])]),Object(r["K"])(Object(r["k"])(d,null,null,512),[[r["H"],l.formAddManga]]),Object(r["k"])(h)])}var l=n("4360"),u=(n("b0c0"),function(e){return Object(r["w"])("data-v-6a196046"),e=e(),Object(r["u"])(),e}),b={id:"myForm",class:"border rounded-lg w-11/12 lg:w-6/12 mx-auto my-4 p-4 max-w-[512px]"},d={class:"flex justify-center items-center"},h=u((function(){return Object(r["h"])("label",{for:"name",class:"border-b p-1 w-40"},"Nom",-1)})),f={class:"flex justify-center items-center"},m=u((function(){return Object(r["h"])("label",{for:"price",class:"border-b p-1 w-40"},"Prix",-1)})),j={class:"flex justify-center items-center"},g=u((function(){return Object(r["h"])("label",{for:"parution",class:"border-b p-1 w-40"},"Parution",-1)})),p=u((function(){return Object(r["h"])("option",{value:"En cours",selected:""},"En cours",-1)})),O=u((function(){return Object(r["h"])("option",{value:"Terminée"},"Terminée",-1)})),w=[p,O],v={class:"flex justify-center items-center"},k=u((function(){return Object(r["h"])("label",{for:"lastReleased",class:"border-b p-1 w-40"},"Dernier volume",-1)})),y={class:"flex justify-center items-center"},M=u((function(){return Object(r["h"])("label",{for:"lastBought",class:"border-b p-1 w-40"},"Dernier acheté",-1)})),x={class:"flex justify-center items-center"},T=u((function(){return Object(r["h"])("label",{for:"lastRead",class:"border-b p-1 w-40"},"Dernier lu",-1)}));function R(e,t,n,a,o,c){return Object(r["t"])(),Object(r["g"])("form",b,[Object(r["h"])("div",d,[h,Object(r["K"])(Object(r["h"])("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.newManga.name=e}),type:"text",class:"input dark:text-black",placeholder:"Naruto"},null,512),[[r["G"],o.newManga.name]])]),Object(r["h"])("div",f,[m,Object(r["K"])(Object(r["h"])("input",{id:"price","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newManga.price=e}),type:"number",class:"input dark:text-black",placeholder:"6.85",step:"0.05"},null,512),[[r["G"],o.newManga.price]])]),Object(r["h"])("div",j,[g,Object(r["K"])(Object(r["h"])("select",{id:"parution","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.newManga.parution=e}),class:"input dark:text-black"},w,512),[[r["F"],o.newManga.parution]])]),Object(r["h"])("div",v,[k,Object(r["K"])(Object(r["h"])("input",{id:"lastReleased","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.newManga.lastReleasedVolume=e}),class:"input dark:text-black",type:"number",placeholder:"72"},null,512),[[r["G"],o.newManga.lastReleasedVolume]])]),Object(r["h"])("div",y,[M,Object(r["K"])(Object(r["h"])("input",{id:"lastBought","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.newManga.lastBoughtVolume=e}),class:"input dark:text-black",type:"number",placeholder:"65"},null,512),[[r["G"],o.newManga.lastBoughtVolume]])]),Object(r["h"])("div",x,[T,Object(r["K"])(Object(r["h"])("input",{id:"lastRead",onKeyup:t[5]||(t[5]=Object(r["L"])((function(e){return c.addManga(o.newManga)}),["enter"])),"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.newManga.lastRead=e}),class:"input dark:text-black",type:"number",placeholder:"53"},null,544),[[r["G"],o.newManga.lastRead]])]),Object(r["h"])("button",{onClick:t[7]||(t[7]=function(e){return c.addManga(o.newManga)}),type:"button",class:"text-black border px-4 py-2 m-4 mt-8 bg-gray-200 rounded w-40"},"Ajouter")])}var A={name:"FormAddManga",components:{},data:function(){return{newManga:{name:"",price:null,parution:"En cours",lastReleasedVolume:null,lastBoughtVolume:null,lastRead:null}}},methods:{addManga:function(e){this.$store.commit("addMangaToList",e),this.newManga.name="",this.newManga.price=null,this.newManga.parution="En cours",this.newManga.lastReleasedVolume=null,this.newManga.lastBoughtVolume=null,this.newManga.lastRead=null}}},C=(n("8a7a"),n("6b0d")),D=n.n(C);const S=D()(A,[["render",R],["__scopeId","data-v-6a196046"]]);var V=S,P=Object(r["h"])("i",{class:"fas fa-adjust"},null,-1),B=[P];function K(e,t,n,a,o,c){return Object(r["t"])(),Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return c.SwitchDM&&c.SwitchDM.apply(c,arguments)}),class:"absolute top-1 left-1 dark:text-white","aria-label":"Passer au mode sombre"},B)}var F={name:"TheDarkModeSwitcher",methods:{SwitchDM:function(){var e=document.querySelector("#app");e.classList.toggle("dark")}}};const U=D()(F,[["render",K]]);var E=U,G=(n("4e82"),{class:"flex justify-center items-center overflow-hidden"}),H={class:"border-separate overflow-scroll"},I={class:""},L=Object(r["h"])("th",{class:"w-36 border"},"Nom",-1),N=Object(r["j"])("Prix "),J={class:"inline-block transform -rotate-90"},$={class:"inline-block transform rotate-90"},_=Object(r["h"])("th",{class:"w-36 border"},"Parution",-1),q=Object(r["h"])("th",{class:"w-36 border"},"Tomes Sortis",-1),z=Object(r["h"])("th",{class:"w-36 border"},"Tomes Achetés",-1),W=Object(r["h"])("th",{class:"w-36 border"},"Tomes Lus",-1),Q=Object(r["h"])("th",null,null,-1),X={key:0},Y={class:"w-36 border"},Z={class:"w-36 border"},ee={class:"w-36 border"},te={class:"w-36 border relative"},ne=["onClick"],re=["onClick"],ae={class:"w-36 border relative"},oe=["onClick"],ce=["onClick"],ie={class:"w-36 border relative"},se=["onClick"],le=["onClick"],ue=["onClick"],be=Object(r["h"])("i",{class:"fas fa-times"},null,-1),de=[be];function he(e,t,n,a,o,c){return Object(r["t"])(),Object(r["g"])("div",G,[Object(r["h"])("table",H,[Object(r["h"])("thead",I,[Object(r["h"])("tr",null,[L,Object(r["h"])("th",{onClick:t[0]||(t[0]=function(t){return c.sortByPrice(e.$store.state.listManga)}),class:"w-36 border cursor-pointer"},[N,Object(r["K"])(Object(r["h"])("span",J,">",512),[[r["H"],o.sort]]),Object(r["K"])(Object(r["h"])("span",$,">",512),[[r["H"],!o.sort]])]),_,q,z,W,Q])]),e.$store.state.listManga.length>0?(Object(r["t"])(),Object(r["g"])("tbody",X,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(e.$store.state.listManga,(function(e,t){return Object(r["t"])(),Object(r["g"])("tr",{key:e.id,class:"hover:bg-gray-400 h-12"},[Object(r["h"])("th",Y,Object(r["D"])(e.name),1),Object(r["h"])("th",Z,Object(r["D"])(c.priceFormat(e.price)),1),Object(r["h"])("th",ee,Object(r["D"])(e.parution),1),Object(r["h"])("th",te,[Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeReleased(t,"-")},class:"btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"-",8,ne),Object(r["j"])(" "+Object(r["D"])(e.lastReleasedVolume)+" ",1),Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeReleased(t,"+")},class:"btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"+",8,re)]),Object(r["h"])("th",ae,[Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeBought(t,"-")},class:"btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"-",8,oe),Object(r["j"])(" "+Object(r["D"])(e.lastBoughtVolume)+" ",1),Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeBought(t,"+")},class:"btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"+",8,ce)]),Object(r["h"])("th",ie,[Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeRead(t,"-")},class:"btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"-",8,se),Object(r["j"])(" "+Object(r["D"])(e.lastRead)+" ",1),Object(r["h"])("button",{type:"button",onClick:function(e){return c.modifyTomeRead(t,"+")},class:"btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900"},"+",8,le)]),Object(r["h"])("th",null,[Object(r["h"])("button",{type:"button",onClick:function(e){return c.deleteManga(t)},"aria-label":"Supprimer un manga",class:"w-8 h-8 flex justify-center items-center text-red-500 bg-white p-1 m-1 border border-black rounded-full hover:bg-black dark:bg-white dark:hover:bg-black"},de,8,ue)])])})),128))])):Object(r["f"])("",!0)])])}var fe={name:"TheMangaArray",data:function(){return{sort:null}},methods:{priceFormat:function(e){return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)},deleteManga:function(e){l["a"].commit("deleteMangaToList",e)},modifyTomeReleased:function(e,t){l["a"].commit("modifyTomeReleased",{index:e,theSwitch:t})},modifyTomeBought:function(e,t){l["a"].commit("modifyTomeBought",{index:e,theSwitch:t})},modifyTomeRead:function(e,t){l["a"].commit("modifyTomeRead",{index:e,theSwitch:t})},sortPrice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},sortPriceDecrease:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0},sortByPrice:function(e){switch(this.sort){case!0:return this.sort=!1,e.sort(this.sortPrice);case!1:return this.sort=!0,e.sort(this.sortPriceDecrease);case null:return this.sort=!0,e.sort(this.sortPriceDecrease)}}},computed:{}};n("935d");const me=D()(fe,[["render",he]]);var je=me,ge={name:"Home",data:function(){return{formAddManga:!1}},components:{FormAddManga:V,TheMangaArray:je,TheDarkModeSwitcher:E},methods:{init:function(){var e=localStorage.getItem("MangaUp");l["a"].state.listManga=JSON.parse(e)||[]}},mounted:function(){this.init()}};n("40e3");const pe=D()(ge,[["render",s]]);t["default"]=pe}}]);
//# sourceMappingURL=Manga.2f0c8777.js.map