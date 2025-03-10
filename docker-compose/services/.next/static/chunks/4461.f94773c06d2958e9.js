(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4461],{74461:function(t,e,n){let o=n(69887),r=n(45145),i=n(69429),uniqueID=()=>Math.floor(Math.random()*Date.now());t.exports=(t,e)=>{let n=o(t),h=r(n%360,1,.5),s=i(h[0][0],h[0][1],h[0][2]),l=i(h[1][0],h[1][1],h[1][2]),a=`rgb(${s[0]}, ${s[1]}, ${s[2]})`,u=`rgb(${l[0]}, ${l[1]}, ${l[2]})`,f=uniqueID();return`<?xml version="1.0" encoding="UTF-8"?>
<svg ${void 0!=e?`width="${e}px" height="${e}px"`:""} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${f}">
      <stop stop-color="${a}" offset="0%"></stop>
      <stop stop-color="${u}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${f})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`}},69429:function(t){let hue=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?t+(e-t)*6*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t;t.exports=(t,e,n)=>{let o,r,i;if(t/=360,0==e)o=r=i=n;else{let h=n<.5?n*(1+e):n+e-n*e,s=2*n-h;o=hue(s,h,t+1/3),r=hue(s,h,t),i=hue(s,h,t-1/3)}return[Math.max(0,Math.min(Math.round(255*o),255)),Math.max(0,Math.min(Math.round(255*r),255)),Math.max(0,Math.min(Math.round(255*i),255))]}},45145:function(t){t.exports=(t,e,n)=>[[t,e,n],[(t+120)%360,e,n],[(t+240)%360,e,n]]},69887:function(t){"use strict";t.exports=function(t){for(var e=5381,n=t.length;n;)e=33*e^t.charCodeAt(--n);return e>>>0}}}]);
//# sourceMappingURL=4461.f94773c06d2958e9.js.map