(this.webpackJsonpsathishmoneymanagement=this.webpackJsonpsathishmoneymanagement||[]).push([[0],{203:function(e,t,a){e.exports=a(388)},387:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(17),i=a(21),s=a(28),m=a(38),u=a(389),d=a(394),f=a(45),p=a(12),h=a(400),g=a(399),y=a(395),b=a(398),E=a(397),w=a(40),v=a(392),S=a(393),C=a(19),T=a(46),O=a.n(T),D=[{name:"PROVISION",color:"magenta"},{name:"INTERNET",color:"red"},{name:"TEST",color:"yellow"}],I=[{name:"10",color:"magenta"},{name:"20",color:"green"},{name:"50",color:"red"},{name:"100",color:"yellow"},{name:"200",color:"blue"},{name:"-20",color:"red"},{name:"-50",color:"red"}],A="https://spendable-length.000webhostapp.com",x={LOGIN:A+"/login.php",GET_WALLET:A+"/getWallet.php",POST_TRANSACTION:A+"/postTransaction.php",GET_TRANSACTION:A+"/getTransaction.php",REVERT_TRANSACTION:A+"/revertTransaction.php"},_="/login",j="/",N="/deposit",k="/transaction",R=a(11),P=a(201),W=a(81),z=a(403),L="category",F="expense",V="comments",M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).formRef=r.a.createRef(),e.state={wallet:{balance:-1},walletLoading:!1,postingData:!1},e.fetchWallet=function(){q().then((function(t){console.log(t.data),e.setState({walletLoading:!1,wallet:t.data})})).catch((function(t){console.log("err occured while fetching wallet",t),e.setState({walletLoading:!1})}))},e.handleSubmit=function(t){e.setState({postingData:!0}),G(t).then((function(t){e.setState({postingData:!1}),e.formRef.current.resetFields(),e.fetchWallet()})).catch((function(t){console.log("err: While posting transaction data",t),alert("Transaction failed"),e.setState({postingData:!1})}))},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({walletLoading:!0}),this.fetchWallet()}},{key:"render",value:function(){var e=this,t=D.map((function(t){return r.a.createElement(P.a,{color:t.color,style:{padding:"0px 10px",margin:"5px"},onClick:function(){e.formRef.current.setFieldsValue({category:t.name})},onMouseDown:function(e){return e.preventDefault()}},t.name)})),a=I.map((function(t){return r.a.createElement(P.a,{color:t.color,style:{padding:"0px 10px",margin:"5px"},onClick:function(a){a.preventDefault();var n=e.formRef.current.getFieldValue(F)||0,r=Number(t.name)+Number(n);e.formRef.current.setFieldsValue({expense:r<0?0:r})},onMouseDown:function(e){return e.preventDefault()}},t.name)}));return-1!=this.state.wallet.balance&&this.state.wallet.balance<=0?r.a.createElement(W.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:r.a.createElement("span",null,"Wallet is Empty")},r.a.createElement(C.a,{type:"primary",onClick:function(){e.props.history.push("/deposit"),window.location.reload()}},"Deposit Now")):r.a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(v.a,{ref:this.formRef,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onFinish:this.handleSubmit,size:"large"},r.a.createElement(v.a.Item,{label:"Wallet Balance"},this.state.walletLoading&&r.a.createElement(z.a,null),!this.state.walletLoading&&r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#66bb6a"}},"\u20b9",this.state.wallet.balance,r.a.createElement("span",{style:{fontWeight:"normal",fontSize:"16px",color:"lightgrey",alignContent:"center"}}," (",this.state.wallet.wallet_name,")")))),r.a.createElement(v.a.Item,{rules:[{required:!0,message:"Please select Category"}],label:"Category",name:L},r.a.createElement(S.a,{placeholder:"Category",onChange:function(t){return e.formRef.current.setFieldsValue(Object(R.a)({},L,""))}})),r.a.createElement(v.a.Item,{label:"Shorthands"},t),r.a.createElement(v.a.Item,{rules:[{required:!0,message:"Please add expense"}],label:"Expense",name:F},r.a.createElement(S.a,{placeholder:"Enter Amount",type:"number"})),r.a.createElement(v.a.Item,{label:"Shorthands"},a),r.a.createElement(v.a.Item,{label:"Comments",name:V},r.a.createElement(S.a.TextArea,{placeholder:"Enter Something like... Milk & Veg, etc.."})),r.a.createElement(v.a.Item,{wrapperCol:{md:{offset:4,span:8}}},r.a.createElement(C.a,{disabled:"ADMIN"!==U().role,loading:this.state.postingData,type:"primary",htmlType:"submit",style:{width:"100%"}},"Submit"))))}}]),a}(r.a.Component);function U(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=localStorage.getItem("loginUser");if(!t)return null;var a=JSON.parse(t);if(!a)return null;if(!a.user_id)return null;var n="?user_name=".concat(a.user_name,"&password=").concat(a.password);return e&&O.a.get(x.LOGIN+n).then((function(e){localStorage.setItem("loginUser",JSON.stringify(e.data))})).catch((function(e){console.log("err occured while fetching user info",e),localStorage.removeItem("loginUser"),window.location.reload()})),a}function G(e){var t=U(!0),a={category:e.category,amount:e.expense,comments:e.comments,type:"W",wallet_id:t.wallet_id,created:(new Date).getTime(),created_by:t.user_id},n="?";return Object.keys(a).forEach((function(e){n+="".concat(e,"=").concat(a[e],"&")})),n=n.substring(0,n.length-1),O.a.get(x.POST_TRANSACTION+n)}function q(){return O.a.get("".concat(x.GET_WALLET,"?wallet_id=").concat(U().wallet_id))}function B(e){var t=U(!0),a={amount:e.deposit,comments:e.comments,type:"D",wallet_id:t.wallet_id,created:(new Date).getTime(),created_by:t.user_id,deposited_by:t.user_id},n="?";return Object.keys(a).forEach((function(e){n+="".concat(e,"=").concat(a[e],"&")})),n=n.substring(0,n.length-1),O.a.get(x.POST_TRANSACTION+n)}function J(){return O.a.get("".concat(x.GET_TRANSACTION,"?wallet_id=").concat(U().wallet_id))}var H="deposit",K="comments",Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).formRef=r.a.createRef(),e.state={wallet:{balance:0},walletLoading:!1,postingData:!1},e.fetchWallet=function(){q().then((function(t){console.log(t.data),e.setState({walletLoading:!1,wallet:t.data})})).catch((function(t){console.log("err occured while fetching wallet",t),e.setState({walletLoading:!1})}))},e.handleSubmit=function(t){console.log(t),e.setState({postingData:!0}),B(t).then((function(t){e.setState({postingData:!1}),e.formRef.current.resetFields(),e.fetchWallet()})).catch((function(t){console.log("err: While posting transaction data",t),alert("Transaction failed"),e.setState({postingData:!1})}))},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({walletLoading:!0}),this.fetchWallet()}},{key:"render",value:function(){return r.a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(v.a,{ref:this.formRef,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onFinish:this.handleSubmit,size:"large"},r.a.createElement(v.a.Item,{label:"Wallet Balance"},this.state.walletLoading&&r.a.createElement(z.a,null),!this.state.walletLoading&&r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#66bb6a"}},"\u20b9",this.state.wallet.balance,r.a.createElement("span",{style:{fontWeight:"normal",fontSize:"16px",color:"lightgrey",alignContent:"center"}}," (",this.state.wallet.wallet_name,")")))),r.a.createElement(v.a.Item,{rules:[{required:!0,message:"Please enter deposit amount"}],label:"Add Money",name:H},r.a.createElement(S.a,{placeholder:"Enter Amount",type:"number"})),r.a.createElement(v.a.Item,{label:"Comments",name:K},r.a.createElement(S.a.TextArea,{placeholder:"Enter Something like... Milk & Veg, etc.."})),r.a.createElement(v.a.Item,{wrapperCol:{md:{offset:4,span:8}}},r.a.createElement(C.a,{disabled:"ADMIN"!==U().role,loading:this.state.postingData,type:"primary",htmlType:"submit",style:{width:"100%"}},"Submit"))))}}]),a}(r.a.Component),Z=a(50),$=a(32),Q=a(391),X=a(396),ee=a(390),te=a(404),ae=a(405),ne=a(406),re=a(47),oe=a.n(re),le=Q.a.RangePicker,ce={expandedRowRender:function(e){return r.a.createElement("p",null,e.comments&&"undefined"!==e.comments?e.comments:"No Comments Provided")}},ie={position:"bottom"},se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={currentTableViewTotalAmt:0,dateFilterDropdownVisible:!1,tableData:[],fullCopyTableData:[],tableProps:{footer:function(){return r.a.createElement("h4",null,"Total amt is: ",e.state.currentTableViewTotalAmt)},loading:!0,pagination:ie,size:"default",expandable:ce,hasData:!0,bottom:"bottomRight"}},e.fetchTransaction=function(){e.setState({tableProps:Object($.a)(Object($.a)({},e.state.tableProps),{},{loading:!0})}),J().then((function(t){var a=t.data.map((function(e){return Object($.a)(Object($.a)({},e),{},{key:e.transaction_id})}));e.setState({tableData:a,fullCopyTableData:a,tableProps:Object($.a)(Object($.a)({},e.state.tableProps),{},{loading:!1})},(function(){return e.calculateTotalAmount(e.state.tableData)}))})).catch((function(t){console.log("err occured while fetching wallet",t),e.setState({tableProps:Object($.a)(Object($.a)({},e.state.tableProps),{},{loading:!1})})}))},e.onChange=function(t,a,n,r){var o=r.currentDataSource||[];e.calculateTotalAmount(o)},e.fetchAmount=function(e){return"W"===e.type?-e.amount:e.amount},e.calculateTotalAmount=function(t){var a=0;1==t.length?a=e.fetchAmount(t[0]):t.length>1&&t.forEach((function(t){a+=e.fetchAmount(t)})),e.setState({currentTableViewTotalAmt:a})},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.fetchTransaction()}},{key:"render",value:function(){var e=this,t=[{title:"Type",dataIndex:"type",filters:[{text:r.a.createElement(te.a,{style:{fontSize:20},twoToneColor:"red"}),value:"W"},{text:r.a.createElement(ae.a,{style:{fontSize:20},twoToneColor:"#52c41a"}),value:"D"}],onFilter:function(e,t){return 0===t.type.indexOf(e)},render:function(e,t,a){var n=r.a.createElement("div",null);return"W"===e&&(n=r.a.createElement(te.a,{style:{fontSize:25},twoToneColor:"red"})),"D"===e&&(n=r.a.createElement(ae.a,{style:{fontSize:25},twoToneColor:"#52c41a"})),n},sorter:function(e,t){return e.type.localeCompare(t.type)}},{title:"Date",dataIndex:"created",render:function(e,t,a){return r.a.createElement("div",null,oe()(e).format("llll"))},sorter:function(e,t){return new Date(e.created)-new Date(t.created)},defaultSortOrder:"descend",filterDropdown:r.a.createElement(le,{onChange:function(t){console.log(t);var a=e.state.fullCopyTableData;if(t){var n=t[0].startOf("day"),r=t[1].endOf("day");a=a.filter((function(e){return new Date(e.created)-n.toDate()>=0&&new Date(e.created)-r.toDate()<=0}))}e.setState({dateFilterDropdownVisible:!1,tableData:a},(function(){return e.calculateTotalAmount(e.state.tableData)}))}}),filterDropdownVisible:this.state.dateFilterDropdownVisible,onFilterDropdownVisibleChange:function(t){return e.setState({dateFilterDropdownVisible:t})}},{title:"Owner",dataIndex:"created_by_name",render:function(e,t,a){return r.a.createElement("div",null,e)},sorter:function(e,t){return e.created_by_name.localeCompare(t.created_by_name)}},{title:"Category",dataIndex:"category",filters:D.map((function(e){return{text:e.name,value:e.name}})),onFilter:function(e,t){return 0===t.category.indexOf(e)},sorter:function(e,t){return e.category.localeCompare(t.category)},render:function(e,t,a){var n=D.filter((function(t){return t.name===e}))[0];return n?r.a.createElement(P.a,{color:n.color},n.name):r.a.createElement("div",null,e.name)}},{title:"Amount",dataIndex:"amount",render:function(e,t,a){return r.a.createElement("div",null,r.a.createElement("h3",{style:{color:"W"===t.type?"#b71c1c":"#66bb6a"}},"W"===t.type?"":"+"," \u20b9",e,"/-"),r.a.createElement("span",{style:{color:"#90a4ae",fontSize:10}},"Closing Balance: \u20b9",t.closing_balance))},sorter:function(t,a){return e.fetchAmount(t)-e.fetchAmount(a)}},{title:"",key:"action",render:function(t,a){return r.a.createElement(X.a,{title:"Are you sure?",onConfirm:function(){var t;(t=a.transaction_id,O.a.get("".concat(x.REVERT_TRANSACTION,"?transaction_id=").concat(t))).then((function(t){return e.fetchTransaction()})).catch((function(e){return console.log("err While reverting transaction: "+a.transaction_id,e)}))},onCancel:function(){},okText:"Yes",cancelText:"No"},r.a.createElement(ne.a,null))}}];"ADMIN"!==U().role&&t.pop();var a=this.state.tableProps,n=a.xScroll,o=a.yScroll,l=Object(Z.a)(a,["xScroll","yScroll"]),c={};o&&(c.y=240),n&&(c.x="100vw");var i=t.map((function(e){return Object($.a)(Object($.a)({},e),{},{ellipsis:l.ellipsis})}));return"fixed"===n&&(i[0].fixed=!0,i[i.length-1].fixed="right"),r.a.createElement("div",null,r.a.createElement(ee.a,Object.assign({},this.state.tableProps,{pagination:{position:[this.state.tableProps.bottom],pageSize:10},columns:i,dataSource:l.hasData?this.state.tableData:null,scroll:c,onChange:this.onChange,onMouseDown:function(e){return e.preventDefault()}})))}}]),a}(r.a.Component),me=a(92),ue=a(402),de=a(401);var fe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!1,invalidCreds:!1},n.onFinish=function(e){n.setState({invalidCreds:!1,loading:!0}),console.log("Received values of form: ",e);var t="?user_name=".concat(e.username,"&password=").concat(function(e){function t(e,t){var a=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(a>>16)<<16|65535&a}function a(e,t){return e>>>t|e<<32-t}function n(e,t){return e>>>t}function r(e,t,a){return e&t^~e&a}function o(e,t,a){return e&t^e&a^t&a}function l(e){return a(e,2)^a(e,13)^a(e,22)}function c(e){return a(e,6)^a(e,11)^a(e,25)}function i(e){return a(e,7)^a(e,18)^n(e,3)}return function(e){for(var t="0123456789abcdef",a="",n=0;n<4*e.length;n++)a+=t.charAt(e[n>>2]>>8*(3-n%4)+4&15)+t.charAt(e[n>>2]>>8*(3-n%4)&15);return a}(function(e,s){var m,u,d,f,p,h,g,y,b,E,w,v=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),S=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),C=new Array(64);e[s>>5]|=128<<24-s%32,e[15+(s+64>>9<<4)]=s;for(var T=0;T<e.length;T+=16){m=S[0],u=S[1],d=S[2],f=S[3],p=S[4],h=S[5],g=S[6],y=S[7];for(var O=0;O<64;O++)C[O]=O<16?e[O+T]:t(t(t(a(w=C[O-2],17)^a(w,19)^n(w,10),C[O-7]),i(C[O-15])),C[O-16]),b=t(t(t(t(y,c(p)),r(p,h,g)),v[O]),C[O]),E=t(l(m),o(m,u,d)),y=g,g=h,h=p,p=t(f,b),f=d,d=u,u=m,m=t(b,E);S[0]=t(m,S[0]),S[1]=t(u,S[1]),S[2]=t(d,S[2]),S[3]=t(f,S[3]),S[4]=t(p,S[4]),S[5]=t(h,S[5]),S[6]=t(g,S[6]),S[7]=t(y,S[7])}return S}(function(e){for(var t=Array(),a=0;a<8*e.length;a+=8)t[a>>5]|=(255&e.charCodeAt(a/8))<<24-a%32;return t}(e=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",a=0;a<e.length;a++){var n=e.charCodeAt(a);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}(e)),8*e.length))}(e.password));O.a.get(x.LOGIN+t).then((function(e){n.setState({loading:!1,invalidCreds:!1}),localStorage.setItem("loginUser",JSON.stringify(e.data)),n.props.history.push(j),window.location.reload()})).catch((function(e){console.log("err",e),n.setState({invalidCreds:!0,loading:!1})}))},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},this.state.invalidCreds&&r.a.createElement("h5",{style:{color:"red"}},"Invalid Username/Password"),r.a.createElement(v.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(S.a,{prefix:r.a.createElement(ue.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(v.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(S.a.Password,{prefix:r.a.createElement(de.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(me.a,null,"Remember me"))),r.a.createElement(v.a.Item,null,r.a.createElement(C.a,{loading:this.state.loading,type:"primary",htmlType:"submit",className:"login-form-button"},"Log in")))}}]),a}(r.a.Component),pe=function(e){var t=window.location.pathname.includes(_),a="1";return window.location.pathname.includes(k)?a="2":window.location.pathname.includes(N)&&(a="3"),t?r.a.createElement(w.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},r.a.createElement(w.a.Item,{key:"1"},r.a.createElement(h.a,{style:{fontSize:25}}))):r.a.createElement(w.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[a]},r.a.createElement(w.a.Item,{key:"1"},r.a.createElement(f.b,{to:j},r.a.createElement(g.a,{style:{fontSize:25}}))),r.a.createElement(w.a.Item,{key:"2"},r.a.createElement(f.b,{to:k},r.a.createElement(y.a,{style:{fontSize:25}}))),r.a.createElement(w.a.Item,{key:"3"},r.a.createElement(f.b,{to:N},r.a.createElement(b.a,{style:{fontSize:25}}))),r.a.createElement(w.a.Item,{key:"4"},r.a.createElement(f.b,{to:_,onClick:function(){localStorage.removeItem("loginUser"),window.location.reload()}},r.a.createElement(E.a,{style:{fontSize:25}}))))},he=function(e){return r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:j,component:M}),r.a.createElement(p.a,{path:k,component:se}),r.a.createElement(p.a,{path:N,component:Y}),r.a.createElement(p.a,{path:_,component:function(t){return r.a.createElement(fe,Object.assign({forceUpdatePage:e.forceUpdatePage},t))}}))},ge=(a(387),u.a.Header),ye=u.a.Content,be=u.a.Footer,Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),U(!0)||n.props.history.push(_),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=U();return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(u.a,{className:"layout"},r.a.createElement(ge,null,r.a.createElement(pe,null)),r.a.createElement(ye,{style:{padding:"0 20px"}},r.a.createElement(d.a,{style:{margin:"16px 0"}},r.a.createElement(d.a.Item,null,"Hey... ",t?"".concat(t.first_name," ").concat(t.last_name):"Guest")),r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(he,{forceUpdatePage:function(){e.forceUpdate()}}))),r.a.createElement(be,{style:{textAlign:"center"}},"Developed by Sathish"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{path:j,component:Ee}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.84729390.chunk.js.map