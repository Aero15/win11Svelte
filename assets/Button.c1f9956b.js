import{S as y,i as C,s as E,G as F,d as B,t as P,l as S,o as q,I as c,J as G,K as g,L as I,M as J,e as K,N,O as k,v,g as L,P as M,Q as O,R as Q,T as R,E as T}from"./index.63ba77c3.js";import{c as j}from"./NavigationView.svelte_svelte_type_style_lang.6c305e99.js";function h(s){let e,n,f,a,t,r,b;const m=s[8].default,i=J(m,s,s[7],null);let d=[{role:n=s[2]&&!s[3]?"button":void 0},{href:f=s[2]&&!s[3]?s[2]:void 0},{class:a="button style-"+s[1]+" "+s[4]},s[6]],o={};for(let l=0;l<d.length;l+=1)o=g(o,d[l]);return{c(){e=K(s[2]&&!s[3]?"a":"button"),i&&i.c(),/-/.test(s[2]&&!s[3]?"a":"button")?N(e,o):k(e,o),v(e,"disabled",s[3]),v(e,"svelte-1ulhukx",!0)},m(l,_){B(l,e,_),i&&i.m(e,null),s[9](e),t=!0,r||(b=L(s[5].call(null,e)),r=!0)},p(l,_){i&&i.p&&(!t||_&128)&&M(i,m,l,l[7],t?Q(m,l[7],_,null):O(l[7]),null),o=R(d,[(!t||_&12&&n!==(n=l[2]&&!l[3]?"button":void 0))&&{role:n},(!t||_&12&&f!==(f=l[2]&&!l[3]?l[2]:void 0))&&{href:f},(!t||_&18&&a!==(a="button style-"+l[1]+" "+l[4]))&&{class:a},_&64&&l[6]]),/-/.test(l[2]&&!l[3]?"a":"button")?N(e,o):k(e,o),v(e,"disabled",l[3]),v(e,"svelte-1ulhukx",!0)},i(l){t||(P(i,l),t=!0)},o(l){S(i,l),t=!1},d(l){l&&q(e),i&&i.d(l),s[9](null),r=!1,b()}}}function z(s){let e=s[2]&&!s[3]?"a":"button",n,f,a=(s[2]&&!s[3]?"a":"button")&&h(s);return{c(){a&&a.c(),n=F()},m(t,r){a&&a.m(t,r),B(t,n,r),f=!0},p(t,[r]){t[2]&&t[3],e?E(e,t[2]&&!t[3]?"a":"button")?(a.d(1),a=h(t),a.c(),a.m(n.parentNode,n)):a.p(t,r):(a=h(t),a.c(),a.m(n.parentNode,n)),e=t[2]&&!t[3]?"a":"button"},i(t){f||(P(a),f=!0)},o(t){S(a),f=!1},d(t){t&&q(n),a&&a.d(t)}}}function A(s,e,n){const f=["variant","href","disabled","class","element"];let a=c(e,f),{$$slots:t={},$$scope:r}=e,{variant:b="standard"}=e,{href:m=""}=e,{disabled:i=!1}=e,{class:d=""}=e,{element:o=null}=e;const l=j(G());function _(u){T[u?"unshift":"push"](()=>{o=u,n(0,o)})}return s.$$set=u=>{e=g(g({},e),I(u)),n(6,a=c(e,f)),"variant"in u&&n(1,b=u.variant),"href"in u&&n(2,m=u.href),"disabled"in u&&n(3,i=u.disabled),"class"in u&&n(4,d=u.class),"element"in u&&n(0,o=u.element),"$$scope"in u&&n(7,r=u.$$scope)},[o,b,m,i,d,l,a,r,t,_]}class U extends y{constructor(e){super(),C(this,e,A,z,E,{variant:1,href:2,disabled:3,class:4,element:0})}}export{U as B};