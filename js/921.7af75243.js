"use strict";(self["webpackChunkmhn"]=self["webpackChunkmhn"]||[]).push([[921],{238:function(e,t,n){n.d(t,{Z:function(){return c}});var s=n(6252);const l={id:"sidebar"},a={class:"list-unstyled"};function o(e,t){const n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",l,[(0,s._)("div",null,[(0,s._)("ul",a,[(0,s._)("li",null,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("evergreen one")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("evergreen two")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("evergreen three")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("evergreen four")])),_:1})])])])])}var r=n(3744);const u={},i=(0,r.Z)(u,[["render",o],["__scopeId","data-v-b222a748"]]);var c=i},3921:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(6252),l=n(3577),a=n(238);const o=async e=>{const t="https://api.dropinblog.com/v1/json/post/?b=6d891cc8-40c7-46de-9ae6-52f34642ef55&post="+e;return await fetch(t,{method:"get"}).then((e=>e.json())).then((e=>e.data)).catch((e=>{console.log(e)}))};var r=o,u=n(2262);const i={class:"section-padding"},c={class:"container medium-content"},d={class:"row"},v={class:"d-flex"},p={key:0,id:"post"},_={class:"h2 fw-light"},f={class:"tagline mb-3"},m=["src"],g={class:"tagline mb-5"},w=["innerHTML"];var h={__name:"Posts",props:{slug:String},setup(e){const t=e,n=(0,u.iH)(),o=(0,u.iH)(!1);return(0,s.bv)((async()=>{n.value=await r(t.slug),o.value=!0})),(e,t)=>{const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",i,[(0,s._)("div",c,[(0,s._)("div",d,[(0,s._)("div",v,[(0,s.Wm)(a.Z),o.value?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("h1",_,(0,l.zw)(n.value.headTitle),1),(0,s._)("p",f,(0,l.zw)(n.value.post.readtime),1),(0,s._)("img",{class:"mb-3",src:n.value.post.featuredImage,alt:""},null,8,m),(0,s._)("p",g,(0,l.zw)(n.value.post.publishedAt),1),(0,s._)("div",{innerHTML:n.value.post.content},null,8,w),(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Back to Home")])),_:1})])):(0,s.kq)("",!0)])])])])}}};const k=h;var b=k}}]);
//# sourceMappingURL=921.7af75243.js.map