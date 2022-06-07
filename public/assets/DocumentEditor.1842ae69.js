var E=Object.defineProperty,N=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&l(t,o,e[o]);if(m)for(var o of m(e))$.call(e,o)&&l(t,o,e[o]);return t},d=(t,e)=>N(t,T(e));import{b as v,a5 as L,a6 as P,a7 as j,a8 as A,a1 as h,a0 as U,a9 as p,aa as y,a4 as b}from"./index.992918ae.js";import{E as i,f as k,v as I}from"./element-plus.33434d3d.js";import{d as O,be as w,q as V,b4 as S,aY as M,as as _,b0 as R,Q as f,e as J,f as u,av as q,V as Y,S as z,Y as Q,W,a1 as G,o as g,ab as H}from"./vendor.1b70e788.js";import{a as K,d as X,b as Z}from"./params.6edb3cb8.js";const x=O({components:{AcEditor:w(()=>b(()=>import("./editor.es.3fdbefd3.js"),["assets/editor.es.3fdbefd3.js","assets/vendor.1b70e788.js","assets/index.992918ae.js","assets/index.0ea8bad7.css","assets/element-plus.33434d3d.js","assets/element-plus.07fbf481.css","assets/sortable.esm.85cd8ec3.js"]))},setup(){const t=V("updateTreeNode"),e=S(),o=M();return{project_id:e.params.project_id,node_id:parseInt(e.params.node_id,10),$route:e,$router:o,updateTreeNode:t}},data(){return{editorOptions:{uploadImage:t=>this.uploadImage(t),getAllCommonParams:()=>this.getAllCommonParams(),addCommonParam:t=>this.addCommonParam(t),deleteCommonParam:t=>this.deleteCommonParam(t),getUrlList:()=>this.getUrlList(),deleteUrl:t=>this.deleteUrl(t),openNotification:()=>this.openNotification()},document:{},isLoading:!1,isDocumentLoading:!1}},watch:{"$route.params.node_id":{immediate:!0,handler:function(){this.getDocumentDetail()}},"document.title":function(){this.onDocumentTitleChange()}},methods:{openNotification(){this.$refs.notice.show()},intoEditor(t){t.target.nodeName!=="INPUT"&&setTimeout(()=>this.$refs.editor&&this.$refs.editor.editor.focus(),200)},uploadImage(t){return new Promise((e,o)=>{if(!t)return i.error("\u8BF7\u9009\u62E9\u56FE\u7247"),o("\u8BF7\u9009\u62E9\u56FE\u7247");if(t.size>10*1024*1024)return i.error("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB"),o("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB");L().send(t).end((a,r)=>{if(!a){P(r.data).then(({src:c})=>e(c));return}i.error(a||"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"),o("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")})})},getUrlList(){return j(this.project_id).then(t=>t.data).catch(()=>{})},deleteUrl(t){return A(this.project_id,t).then(()=>{i.success("\u5E38\u7528URL\u5220\u9664\u6210\u529F")})},addCommonParam(t){const e=d(s({},t),{project_id:this.project_id});return delete e.sub_params,delete e._id,K(e).then(o=>(i.success("\u5E38\u7528\u53C2\u6570\u6DFB\u52A0\u6210\u529F"),o.data))},deleteCommonParam(t){return X(this.project_id,t.id).then(e=>(i.success("\u5E38\u7528\u53C2\u6570\u5220\u9664\u6210\u529F"),e.data))},getAllCommonParams(){return Z(this.project_id).then(t=>t.data).catch(t=>{})},getDocumentDetail(){const t=parseInt(this.$route.params.node_id,10);if(isNaN(t)){h();return}this.node_id=t,this.isDocumentLoading=!0,U(this.project_id,this.node_id).then(e=>{e.data.project_id=this.project_id,e.data.doc_id=e.data.id,!e.data.url&&(e.data.url=""),e.data.content=JSON.parse(e.data.content||"{}"),this.document=e.data,this.autoFocus()}).catch(e=>{}).finally(()=>{this.isDocumentLoading=!1,h()})},updateTreeNodeTitle(t){t&&this.updateTreeNode&&this.updateTreeNode(t.doc_id,{title:t.title||""})},onSaveBtnClick(){this.save()},save(){this.isLoading=!0,p(this.getDocumentContent()).then(t=>{i.success(t.message||"\u4FDD\u5B58\u6210\u529F"),this.updateTreeNodeTitle(t.data),this.$router.push({name:"document.api.detail",params:{project_id:this.project_id,node_id:this.node_id}})}).catch(t=>t).finally(()=>{this.isLoading=!1})},getDocumentContent(){if(this.$refs.editor&&this.$refs.editor.editor){let t=this.$refs.editor.editor.getJSON();return d(s({},this.document),{content:JSON.stringify(t)})}return this.document},onDocumentChange:_(function(){p(this.getDocumentContent()).then(t=>{this.updateTreeNodeTitle(t.data)})},500),onDocumentTitleChange:_(function(){R(this.document.title)||(y({project_id:this.project_id,title:this.document.title,doc_id:this.node_id}),this.updateTreeNodeTitle({doc_id:this.node_id,title:this.document.title}))},500),autoFocus(){this.$route.query.isNew&&this.$refs.title&&this.$refs.title.focus()}}}),tt={class:"ac-document__operate"},et={class:"ac-document__operate-inner text-right"},ot=H(" \u4FDD\u5B58 ");function it(t,e,o,a,r,c){const D=G("AcEditor"),C=k,F=I;return f((g(),J("div",{class:"ac-document is-edit",onClick:e[1]||(e[1]=(...n)=>t.intoEditor&&t.intoEditor(...n))},[f(u("input",{class:"ac-document__title",type:"text",maxlength:"255",ref:"title","onUpdate:modelValue":e[0]||(e[0]=n=>t.document.title=n),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u6807\u9898"},null,512),[[q,t.document.title]]),t.document.content?(g(),Y(D,{key:0,ref:"editor",document:t.document.content,options:t.editorOptions,onOnChange:t.onDocumentChange},null,8,["document","options","onOnChange"])):z("",!0),u("div",tt,[u("div",et,[Q(C,{loading:t.isLoading,type:"primary",onClick:t.onSaveBtnClick},{default:W(()=>[ot]),_:1},8,["loading","onClick"])])])])),[[F,t.isDocumentLoading]])}var rt=v(x,[["render",it]]);export{rt as default};
