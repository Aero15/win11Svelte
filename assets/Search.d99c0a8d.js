import{S as D,i as E,s as F,e as _,c as G,a as f,b as u,d as j,m as O,f as c,t as Q,j as W,k as L,l as I,o as z,p as J,q as K,z as S,B as w,A as C,r as N,u as P,w as $,y as R,C as A}from"./index.63ba77c3.js";import"./NavigationView.svelte_svelte_type_style_lang.6c305e99.js";import{T as U}from"./TextBox.774e8a1d.js";import{f as M}from"./index.c5bb7efd.js";function q(i,e,s){const r=i.slice();return r[6]=e[s],r}function H(i){let e,s,r,o,m=i[6]+"",p,x,v,l;function g(){return i[2](i[6])}function T(){return i[3](i[6])}return{c(){e=_("div"),s=_("img"),o=f(),p=N(m),x=f(),P(s.src,r="img/icon/"+i[6]+".png")||u(s,"src",r),u(s,"alt",""),u(s,"height","32"),u(s,"width","32"),u(s,"class","svelte-vrihpx"),u(e,"class","topApp hvrBgLight svelte-vrihpx")},m(d,h){j(d,e,h),c(e,s),c(e,o),c(e,p),c(e,x),v||(l=[$(e,"click",g),$(e,"keypress",T)],v=!0)},p(d,h){i=d},d(d){d&&z(e),v=!1,R(l)}}}function V(i){let e,s,r,o,m,p,x,v,l,g,T,d,h,k;s=new U({props:{placeholder:"Type here to search",autofocus:!0}});let y=i[0],n=[];for(let t=0;t<y.length;t+=1)n[t]=H(q(i,y,t));return{c(){e=_("div"),G(s.$$.fragment),r=f(),o=_("div"),o.innerHTML=`<span class="svelte-vrihpx">All</span> 
    <span class="svelte-vrihpx">Apps</span> 
    <span class="svelte-vrihpx">Documents</span> 
    <span class="svelte-vrihpx">Web</span> 
    <span class="svelte-vrihpx">More</span>`,m=f(),p=_("h4"),p.textContent="Top apps",x=f(),v=_("div");for(let t=0;t<n.length;t+=1)n[t].c();l=f(),g=_("h4"),g.textContent="Quick searches",T=f(),d=_("div"),d.innerHTML=`<div class="searchTile hvrBgLight svelte-vrihpx"><img src="" alt="" height="20" width="20" class="svelte-vrihpx"/>
      Today in history</div> 
    <div class="searchTile hvrBgLight svelte-vrihpx"><img src="" alt="" height="20" width="20" class="svelte-vrihpx"/>
      Markets today</div> 
    <div class="searchTile hvrBgLight svelte-vrihpx"><img src="" alt="" height="20" width="20" class="svelte-vrihpx"/>
      Translate</div> 
    <div class="searchTile hvrBgLight svelte-vrihpx"><img src="" alt="" height="20" width="20" class="svelte-vrihpx"/>
      Currency converter</div>`,u(o,"class","searchType svelte-vrihpx"),u(v,"class","topAppGrid svelte-vrihpx"),u(d,"class","searchTileCont svelte-vrihpx"),u(e,"class","search activeShadow svelte-vrihpx")},m(t,b){j(t,e,b),O(s,e,null),c(e,r),c(e,o),c(e,m),c(e,p),c(e,x),c(e,v);for(let a=0;a<n.length;a+=1)n[a].m(v,null);c(e,l),c(e,g),c(e,T),c(e,d),k=!0},p(t,[b]){if(b&3){y=t[0];let a;for(a=0;a<y.length;a+=1){const B=q(t,y,a);n[a]?n[a].p(B,b):(n[a]=H(B),n[a].c(),n[a].m(v,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=y.length}},i(t){k||(Q(s.$$.fragment,t),W(()=>{h||(h=L(e,M,{y:700,duration:200,opacity:1},!0)),h.run(1)}),k=!0)},o(t){I(s.$$.fragment,t),h||(h=L(e,M,{y:700,duration:200,opacity:1},!1)),h.run(0),k=!1},d(t){t&&z(e),J(s),K(n,t),t&&h&&h.end()}}}function X(i,e,s){let r,o;S(i,w,l=>s(4,r=l)),S(i,C,l=>s(5,o=l));const m=["Settings","Camera","Calculator","File Explorer","Microsoft Store"],p=l=>{r.includes(l)?(A(C,o="",o),A(w,r=r.filter(g=>g!==l),r)):(A(C,o=l,o),A(w,r=[...r,l],r))};return[m,p,l=>p(l),l=>p(l)]}class se extends D{constructor(e){super(),E(this,e,X,V,F,{})}}export{se as default};