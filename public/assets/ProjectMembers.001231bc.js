var ne=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var W=(a,t,e)=>t in a?ne(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))ie.call(t,e)&&W(a,e,t[e]);if(G)for(var e of G(t))ue.call(t,e)&&W(a,e,t[e]);return a},K=(a,t)=>re(a,le(t));import{L as ce,M as de,N as me,v as pe,e as fe,d as he,E as R,l as _e,J as ge,K as ye,h as be,i as ve,f as Y,j as Se,I as Ce}from"./element-plus.33434d3d.js";import{b as V,u as ke,y as O,B as $,a as we,C as A,d as q,E as je,F as Pe,G as Me,H as Le,I as Te}from"./index.992918ae.js";import{o as u,e as y,Q as Ee,V as v,W as _,S as C,T as w,an as T,G as J,Y as c,a3 as Be,x as xe,aj as Ke,d as N,aU as D,v as F,u as b,A as Re,r as k,aY as Ae,a_ as Ie,b8 as I,ab as M,f as H,_ as Q,am as Ve}from"./vendor.1b70e788.js";import{u as Oe}from"./usePage.f8b9488d.js";const Ne={name:"AcTable",props:{isShowIndex:{type:Boolean,default:!1},isShowSelection:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]},tableData:{type:Array,default:()=>[]},pageSize:{type:Number,default:()=>15},pageTotal:{type:Number,default:()=>0},pageCount:{type:Number,default:()=>0},currentPage:{type:Number,default:()=>1},loading:{type:Boolean,default:!1},isShowPager:{type:Boolean,default:!0},emptyText:{type:String,default:"\u6682\u65E0\u6570\u636E"},dataKey:{type:Object,default:()=>({label:"title",prop:"key"})}},setup(a,t){const{emit:e}=t;return{handleSizeChange:r=>e("size-change",r),handleCurrentChange:r=>{e("update:currentPage",a.currentPage),e("current-change",r)},handleSelectionChange:r=>e("selection-change",r)}}},De={class:"ac-table"},Fe={key:0,class:"mt-4 flex justify-end"};function ze(a,t,e,p,s,d){const r=ce,f=de,l=me,g=pe;return u(),y("div",De,[Ee((u(),v(f,{data:e.tableData,"empty-text":e.emptyText,onSelectionChange:p.handleSelectionChange},{default:_(()=>[e.isShowIndex?(u(),v(r,{key:0,type:"index",width:"50",label:"\u5E8F\u53F7"})):C("",!0),e.isShowSelection?(u(),v(r,{key:1,type:"selection",width:"55"})):C("",!0),(u(!0),y(w,null,T(e.columns,n=>(u(),y(w,{key:n.prop},[n[e.dataKey.label]&&!n.slot?(u(),v(r,{key:0,prop:n[e.dataKey.prop],"show-overflow-tooltip":"",label:n[e.dataKey.label],formatter:n.render||n.formatter,width:n.width},null,8,["prop","label","formatter","width"])):C("",!0),n.slot&&n[e.dataKey.label]?J(a.$slots,n.slot,{key:1}):C("",!0)],64))),128)),J(a.$slots,"operation")]),_:3},8,["data","empty-text","onSelectionChange"])),[[g,e.loading]]),e.isShowPager&&e.pageTotal?(u(),y("div",Fe,[c(l,{"page-size":e.pageSize,layout:"prev, pager, next",total:e.pageTotal,"current-page":e.currentPage,"onUpdate:current-page":t[0]||(t[0]=n=>e.currentPage=n),onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange},null,8,["page-size","total","current-page","onSizeChange","onCurrentChange"])])):C("",!0)])}var X=V(Ne,[["render",ze]]);const Z=(a,t={isLoaded:!0,dataKey:"data",totalKey:"total"})=>{const{isLoaded:e=!0,searchParam:p={},dataKey:s,totalKey:d}=t,[r,f]=ke(a,{isShowMessage:!1}),l=Be({data:[],total:0}),{page:g}=Oe(()=>n()),n=async()=>{const m=await f(K(x({},p),{page:g.value}));m&&m.data?(l.data=m.data[s]||[],l.total=m.data[d]||1):(l.data=[],l.total=0)};return e&&xe(async()=>{await n()}),K(x({isLoading:r,currentPage:g},Ke(l)),{getTableData:n})};var Ue=N({emits:["on-success"],setup(a,{emit:t}){const e=[{title:"\u59D3\u540D",key:"name"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u89D2\u8272",render:m=>c("span",{class:"text dis_hover"},[m.authority_name])}],p={project_id:""},s=O(),{projectInfo:d}=D(s),{isLoading:r,total:f,currentPage:l,data:g,getTableData:n}=Z($,{searchParam:p,totalKey:"total_members",dataKey:"project_members",isLoaded:!1});return F(()=>d.value,async()=>{d.value&&d.value.id&&(p.project_id=d.value.id,await n(),t("on-success",f.value||0))},{immediate:!0}),(m,o)=>{const j=X;return u(),v(j,{loading:b(r),"table-data":b(g),"page-total":b(f),"current-page":b(l),"onUpdate:current-page":o[0]||(o[0]=S=>Re(l)?l.value=S:null),columns:e,class:"pb-3"},null,8,["loading","table-data","page-total","current-page"])}}});I.configure({showSpinner:!1});var Ge=N({emits:["on-remove","on-success"],setup(a,{emit:t}){const e={project_id:""},p=O(),{projectInfo:s}=D(p),d=we(),r=k(),f=k(!1),l=k(),g=A,n=Ae();let m=null;const{isLoading:o,currentPage:j,data:S,total:L,getTableData:E}=Z($,{searchParam:e,totalKey:"total_members",dataKey:"project_members",isLoaded:!1}),ee=[{title:"\u59D3\u540D",key:"name"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u89D2\u8272",render:i=>d.userInfo.user_id===i.user_id?c("span",null,[i.authority_name]):c("a",{class:"inline-flex items-center el-icon__more",onClick:h=>te(h,i),"data-role":i.authority,href:"javascript:void(0)"},[c("span",null,[i.authority_name]),c(fe,null,{default:()=>[c(he,null,null)]})])},{title:"\u64CD\u4F5C",width:160,render:i=>{if(i.authority===0)return[];let h=[];return i.authority!==2&&h.push(c("span",{class:"cursor-pointer text-blue-600 mr-2",onClick:()=>ae(i)},[M("\u79FB\u4EA4\u9879\u76EE")])),d.userInfo.user_id!==i.user_id&&h.push(c("span",{class:"cursor-pointer text-red-400",onClick:()=>oe(i)},[M("\u79FB\u9664\u6210\u5458")])),h}}],te=(i,h)=>{m=h,r.value=i.currentTarget,f.value=!0},ae=i=>{q({title:"\u79FB\u4EA4\u63D0\u793A",content:"\u786E\u5B9A\u5C06\u9879\u76EE\u79FB\u4EA4\u7ED9\u8BE5\u6210\u5458\u5417\uFF1F",onOk:h=>je(s.value.id,i.user_id).then(P=>{R.success(P.msg||"\u79FB\u4EA4\u6210\u529F\uFF01"),n.replace({name:"projects"})}).catch(()=>h())})},oe=i=>{q({title:"\u5220\u9664\u63D0\u793A",content:"\u786E\u5B9A\u79FB\u9664\u8BE5\u6210\u5458\u5417\uFF1F",onOk:()=>Pe(s.value.id,i.user_id).then(h=>{R.success(h.msg||"\u79FB\u9664\u6210\u529F\uFF01"),t("on-remove"),E()})})},se=i=>{I.start(),Me({authority:i.value,user_id:m.user_id,project_id:s.value.id}).then(h=>{R.success(h.msg||"\u6743\u9650\u4FEE\u6539\u6210\u529F\uFF01"),m.authority=i.value,m.authority_name=i.text}).catch(()=>{}).finally(()=>{I.done()})};return Ie(r,i=>{var z,U;const P=i.target.parentNode,B=P.parentNode;((z=P==null?void 0:P.classList)==null?void 0:z.contains("el-icon__more"))||((U=B==null?void 0:B.classList)==null?void 0:U.contains("el-icon__more"))||(f.value=!1)}),F(()=>s.value,async()=>{s.value&&s.value.id&&(e.project_id=s.value.id,await E(),t("on-success",L.value||0))},{immediate:!0}),{isLoading:o,roles:g,project:s,members:S,currentPage:j,total:L,columns:ee,popoverRef:l,isShowPopover:f,rolePopperRef:r,onRoleItemClick:se,getTableData:E}}});const We=["onClick"];function qe(a,t,e,p,s,d){const r=X,f=_e;return u(),y(w,null,[c(r,{loading:a.isLoading,"table-data":a.members,"page-total":a.total,"current-page":a.currentPage,"onUpdate:current-page":t[0]||(t[0]=l=>a.currentPage=l),columns:a.columns,class:"pb-3"},null,8,["loading","table-data","page-total","current-page","columns"]),c(f,{ref:"popoverRef","popper-class":"ac-popper-menu",width:"auto",visible:a.isShowPopover,"onUpdate:visible":t[1]||(t[1]=l=>a.isShowPopover=l),"virtual-ref":a.rolePopperRef,"virtual-triggering":""},{default:_(()=>[H("ul",null,[(u(!0),y(w,null,T(a.roles,l=>(u(),y("li",{key:l.value,class:"ac-popper-menu__item",onClick:g=>a.onRoleItemClick(l)},Q(l.text),9,We))),128))])]),_:1},8,["visible","virtual-ref"])],64)}var Je=V(Ge,[["render",qe]]);const Ye={emits:["on-ok"],props:{members:{type:Array,default:()=>[]},project:{type:Object,default:()=>({})}},data(){return{isShow:!1,isLoading:!1,roles:A,form:{user_ids:[],authority:A[0].value},rules:{user_ids:{required:!0,message:"\u8BF7\u9009\u62E9\u9700\u8981\u6DFB\u52A0\u7684\u6210\u5458",trigger:"change",type:"array"}}}},watch:{isShow:function(){!this.isShow&&this.reset()}},methods:{show(a){this.form.project_id=a.id,this.isShow=!0},hide(){this.isShow=!1},onCloseBtnClick(){this.isShow=!1,this.reset()},reset(){this.$refs.teamForm.resetFields()},handleSubmit(a){this.$refs[a].validate(t=>t&&this.submit())},submit(){this.isLoading=!0,Le(this.form).then(a=>{this.$Message.success(a.msg||"\u6DFB\u52A0\u6210\u5458\u6210\u529F!"),this.hide(),this.$emit("on-ok")}).catch(a=>{}).finally(()=>{this.isLoading=!1})}}},$e=M("\u53D6\u6D88"),He=M("\u786E\u5B9A");function Qe(a,t,e,p,s,d){const r=ge,f=ye,l=be,g=ve,n=Y,m=Se;return u(),v(m,{modelValue:s.isShow,"onUpdate:modelValue":t[5]||(t[5]=o=>s.isShow=o),width:340,"close-on-click-modal":!1,title:"\u6DFB\u52A0\u6210\u5458","append-to-body":"","custom-class":"show-footer-line vertical-center-modal"},{footer:_(()=>[c(n,{onClick:t[3]||(t[3]=o=>d.onCloseBtnClick())},{default:_(()=>[$e]),_:1}),c(n,{loading:s.isLoading,type:"primary",onClick:t[4]||(t[4]=o=>d.handleSubmit("teamForm"))},{default:_(()=>[He]),_:1},8,["loading"])]),default:_(()=>[c(g,{onKeyup:t[2]||(t[2]=Ve(o=>d.handleSubmit("teamForm"),["enter"])),ref:"teamForm",model:s.form,rules:s.rules,"label-position":"top",style:{"margin-bottom":"-19px"}},{default:_(()=>[c(l,{label:"\u9009\u62E9\u6210\u5458",prop:"user_ids",class:"hide_required"},{default:_(()=>[c(f,{modelValue:s.form.user_ids,"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.user_ids=o),placeholder:"\u9009\u62E9\u6210\u5458","no-data-text":"\u6682\u65E0\u6210\u5458",filterable:"",multiple:"",clearable:"",class:"w-full"},{default:_(()=>[(u(!0),y(w,null,T(e.members,o=>(u(),v(r,{value:o.user_id,key:o.user_id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),c(l,{label:"\u6743\u9650",prop:"authority"},{default:_(()=>[c(f,{modelValue:s.form.authority,"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.authority=o),class:"w-full"},{default:_(()=>[(u(!0),y(w,null,T(s.roles,o=>(u(),v(r,{value:o.value,key:o.value,label:o.text},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}var Xe=V(Ye,[["render",Qe]]);const Ze={key:0,class:"absolute right-2",style:{top:"7px"}},et=M("\u6DFB\u52A0\u6210\u5458");var rt=N({setup(a){const t=O(),{projectInfo:e}=D(t),p=k([]),s=k(),d=k(),r=k(0),f=()=>{var o;(o=s.value)==null||o.show(e.value)},l=async()=>{var o;(o=d.value)==null||o.getTableData(),await m()},g=async()=>{await m()},n=o=>{r.value=o},m=async()=>{const{authority:o,id:j}=e.value||{};if(o===0)try{const{data:S}=await Te(j);p.value=S||[]}catch{p.value=[]}};return F(()=>e.value,async()=>{e.value&&e.value.id&&await m()},{immediate:!0}),(o,j)=>{const S=Y,L=Ce;return u(),y(w,null,[c(L,{shadow:"never","body-style":{padding:0}},{header:_(()=>[H("span",null,"\u6210\u5458\u5217\u8868"+Q(r.value?`(${r.value})`:""),1),b(e)&&b(e).authority===0?(u(),y("div",Ze,[c(S,{onClick:f,type:"primary"},{default:_(()=>[et]),_:1})])):C("",!0)]),default:_(()=>[b(e)&&b(e).authority===0?(u(),v(Je,{key:0,ref_key:"projectMembersManage",ref:d,onOnRemove:g,onOnSuccess:n},null,512)):C("",!0),b(e)&&b(e).authority!==0?(u(),v(Ue,{key:1,onOnSuccess:n})):C("",!0)]),_:1}),c(Xe,{members:p.value,ref_key:"addProjectMemberModal",ref:s,onOnOk:l},null,8,["members"])],64)}}});export{rt as default};
