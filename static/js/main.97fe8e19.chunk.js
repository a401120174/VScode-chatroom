(window.webpackJsonpf2e_week6=window.webpackJsonpf2e_week6||[]).push([[0],{15:function(e,t,n){e.exports={aside:"AsideBar_aside__3foFk",title:"AsideBar_title__3dDpS",subTitle:"AsideBar_subTitle__1SVul",roomList:"AsideBar_roomList__3c2sY",addBtnBox:"AsideBar_addBtnBox__1tku2"}},16:function(e,t,n){e.exports={box:"TextInput_box__2ZOdx",textInput:"TextInput_textInput__3HiN_",submit:"TextInput_submit__2POe1",cuteBtn:"TextInput_cuteBtn__1Ocg0",cute:"TextInput_cute__3Rjmm",shiny:"TextInput_shiny__bQy53"}},23:function(e,t,n){e.exports={wrapper:"TabBar_wrapper__1_OwW",active:"TabBar_active__3Z-FO",closeBtn:"TabBar_closeBtn__1okjX"}},27:function(e,t,n){e.exports={rightPart:"Main_rightPart__2aLEO",idType:"Main_idType__2Owsu",box:"Main_box__3dr63"}},3:function(e,t,n){e.exports={wrapper:"Content_wrapper__34LAu",msgBox:"Content_msgBox__os1hI",time:"Content_time__c7nc8",msgTag:"Content_msgTag__31mBT",content:"Content_content__fnh1U",isSelf:"Content_isSelf__2BQDb",rightBox:"Content_rightBox__1ah3u",alert:"Content_alert__Jckl3",blue:"Content_blue__2b1Ve",sky:"Content_sky__1kQYw",orange:"Content_orange__1yK-L"}},36:function(e,t,n){e.exports={App:"App_App__2QLba"}},40:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=n(22),s=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(5),m=n(14),u=n.n(m),p=(n(33),n(34),n(36)),d=n.n(p),f={apiKey:"AIzaSyDZ-WE4xegOzuba568z1DXE9WAuLV0LhsE",authDomain:"mychatroom-b5909.firebaseapp.com",databaseURL:"https://mychatroom-b5909.firebaseio.com",projectId:"mychatroom-b5909",storageBucket:"mychatroom-b5909.appspot.com",messagingSenderId:"620146762888",appId:"1:620146762888:web:a2dcc475ab5d9187"},E=function(e,t){return u.a.firestore().collection("chatRoom").doc(e).collection("messages").onSnapshot(function(e){e.docChanges().forEach(function(e){t(e.doc.data())})})},_=function(e){return u.a.firestore().collection("chatRoom").onSnapshot(function(t){t.docChanges().forEach(function(t){e(t.doc.data())})})},g=function(e){return{type:"FIREBASE_CONNECTED",isConnected:e}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"UPDATE_MSG",msg:e,isAll:t}},v=function(e){return{type:"SET_LOADING",loading:e}},h=function(){return{type:"RESET_MSGS"}},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"CHANGE_MSG",msg:e,isAdd:t}},C=function(e){return{type:"SET_ID",id:e}},N=function(e){return{type:"OPEN_POPUP",popup:e}},y=function(e,t){return{type:"SET_CHAT_ROOMS",room:e,roomParam:t}},S=function(e){return{type:"CHANGE_CURRENT_ROOM",room:e}},R=n(7),T=n.n(R),w=function(e){var t=e.onClickVister,n=e.onClickUseName;return r.a.createElement("div",{className:T.a.idType},r.a.createElement("div",{className:T.a.someWord},r.a.createElement("h2",null,"\u804a\u5929\u5ba42.0\u7248\u4e0a\u7dda\u5566(*\uff9f\u2200\uff9f*) "),r.a.createElement("br",null),"[new] \u65b0\u589e\u591a\u804a\u5929\u5ba4\u529f\u80fd",r.a.createElement("br",null),"[new] \u65b0\u589e\u591a\u7a2e\u8868\u60c5\u7b26\u865f",r.a.createElement("br",null),"\u6b61\u8fce\u5927\u5bb6\u627e\u89aa\u670b\u597d\u53cb\u4f86\u804a~"),r.a.createElement("div",{className:T.a.btnBox},r.a.createElement("div",{onClick:t},"[\u533f\u540d\u804a\u5929]"),r.a.createElement("div",{onClick:n},"[\u66b1\u7a31\u804a\u5929]")))},P=function(e){var t=e.inputValue,n=e.onClickConfirm,a=e.onChangeId;return r.a.createElement("div",{className:T.a.idSet},r.a.createElement("div",{className:T.a.title},"\u66b1\u7a31\u804a\u5929"),r.a.createElement("input",{value:t,onChange:a,placeholder:"\u8f38\u5165\u66b1\u7a31"}),r.a.createElement("div",{onClick:n,className:T.a.confirm},"[\u78ba\u5b9a]"))},j=function(e){var t=e.inputValue,n=e.onChange,a=e.onClickConfirm;return r.a.createElement("div",{className:T.a.idSet},r.a.createElement("div",{className:T.a.title},"\u5275\u7acb\u804a\u5929\u5ba4"),r.a.createElement("input",{value:t,onChange:n,placeholder:"\u8f38\u5165\u804a\u5929\u5ba4\u540d\u7a31"}),r.a.createElement("div",{onClick:a,className:T.a.confirm},"[\u78ba\u5b9a]"))},k=function(e){var t=e.popup,n=e.userName,a=e.roomNameInput,o=e.setId,c=e.openIdSetPop,l=e.onChangeId,s=e.onChangeRoomName,i=e.creatNewRoom,m=e.closePopup;return r.a.createElement("div",{className:"".concat(T.a.cover," ").concat(t?"":T.a.hide),onClick:m},r.a.createElement("div",{className:T.a.contentBox},function(e){switch(e){case"SET_ID_TYPE":return r.a.createElement(w,{onClickVister:o,onClickUseName:c});case"SET_ID":return r.a.createElement(P,{onClickConfirm:o,onChangeId:l,inputValue:n});case"CREAT_ROOM":return r.a.createElement(j,{inputValue:a,onChange:s,onClickConfirm:i});default:return null}}(t)))},x=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e});return r.a.createElement(k,{popup:t.popup,userName:t.userName,roomNameInput:t.roomNameInput,setId:function(){var n=Math.floor(1e3*Math.random());e(C(t.userName||"\u8a2a\u5ba2".concat(n,"\u865f"))),e(N(""))},openIdSetPop:function(){e(N("SET_ID"))},onChangeId:function(t){e(C(t.target.value.trim()))},onChangeRoomName:function(t){e({type:"SET_ROOM_NAME",name:t.target.value.trim()})},creatNewRoom:function(){var n,a;t.roomNameInput&&(n=t.roomNameInput,a=function(){e(S(t.roomNameInput)),e(N(""))},u.a.firestore().collection("chatRoom").doc(n).set({name:n}).then(function(e){a()}).catch(function(e){console.error("Error adding document: ",e)}))},closePopup:function(n){n.target===n.currentTarget&&"CREAT_ROOM"===t.popup&&e(N(""))}})},A=n(15),I=n.n(A);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#d4d4d4;}")),L=r.a.createElement("g",{transform:"translate(0 -18.271)"},r.a.createElement("g",{transform:"translate(0 18.271)"},r.a.createElement("path",{className:"a",d:"M38.385,21.952a1.841,1.841,0,1,0-1.3-.539A1.773,1.773,0,0,0,38.385,21.952Z",transform:"translate(-35.625 -18.271)"}),r.a.createElement("path",{className:"a",d:"M165.258,96.076a2.76,2.76,0,1,0-.809-1.952A2.66,2.66,0,0,0,165.258,96.076Z",transform:"translate(-160.308 -89.523)"}),r.a.createElement("path",{className:"a",d:"M367.293,21.952a1.841,1.841,0,1,0-1.3-.539A1.773,1.773,0,0,0,367.293,21.952Z",transform:"translate(-356.25 -18.271)"}),r.a.createElement("path",{className:"a",d:"M382.232,164.456a1.376,1.376,0,0,0-.313.151,4.719,4.719,0,0,1-.7.306,2.525,2.525,0,0,1-.855.155,2.886,2.886,0,0,1-.956-.165,3.613,3.613,0,0,1,.036.474,3.164,3.164,0,0,1-.583,1.84,2.479,2.479,0,0,1,1.905.92h.963a1.648,1.648,0,0,0,.992-.291.985.985,0,0,0,.4-.852Q383.123,164.456,382.232,164.456Z",transform:"translate(-369.32 -160.775)"}),r.a.createElement("path",{className:"a",d:"M83.087,294.951a6.087,6.087,0,0,0-.191-.78,3.7,3.7,0,0,0-.309-.7,2.534,2.534,0,0,0-.446-.582,1.878,1.878,0,0,0-.615-.385,2.159,2.159,0,0,0-.8-.144.847.847,0,0,0-.309.155q-.237.154-.525.345a3.338,3.338,0,0,1-3.48,0q-.288-.19-.525-.345a.847.847,0,0,0-.309-.155,2.16,2.16,0,0,0-.8.144,1.875,1.875,0,0,0-.615.385,2.528,2.528,0,0,0-.446.582,3.7,3.7,0,0,0-.309.7,6.106,6.106,0,0,0-.191.78,7.309,7.309,0,0,0-.1.784q-.025.363-.025.744a1.791,1.791,0,0,0,.525,1.362,1.94,1.94,0,0,0,1.395.5h6.283a1.94,1.94,0,0,0,1.395-.5,1.791,1.791,0,0,0,.525-1.362q0-.381-.025-.744A7.435,7.435,0,0,0,83.087,294.951Z",transform:"translate(-71.25 -285.457)"}),r.a.createElement("path",{className:"a",d:"M4.263,167.216a3.165,3.165,0,0,1-.582-1.84,3.59,3.59,0,0,1,.036-.474,2.889,2.889,0,0,1-.956.165,2.524,2.524,0,0,1-.855-.155,4.725,4.725,0,0,1-.7-.306,1.372,1.372,0,0,0-.313-.151q-.891,0-.891,2.538a.985.985,0,0,0,.4.852,1.648,1.648,0,0,0,.992.291h.963A2.479,2.479,0,0,1,4.263,167.216Z",transform:"translate(0 -160.774)"}))),U=function(e){var t=e.svgRef,n=e.title,a=M(e,["svgRef","title"]);return r.a.createElement("svg",B({width:13.803,height:12.883,viewBox:"0 0 13.803 12.883",ref:t},a),r.a.createElement("title",null,n),D,L)},G=r.a.forwardRef(function(e,t){return r.a.createElement(U,B({svgRef:t},e))}),H=(n.p,function(e){var t=e.creatRoom,n=e.chatRooms,a=e.onClick;return r.a.createElement("aside",{className:I.a.aside},r.a.createElement("div",{className:I.a.title},r.a.createElement("h2",null,r.a.createElement(G,null),r.a.createElement("span",null,"\u804a\u5929\u5ba4\u7e3d\u7ba1"))),r.a.createElement("div",{className:I.a.subTitle},"\u804a\u5929\u5ba4\u5217\u8868 (",n.length,")"),r.a.createElement("div",{className:I.a.roomList},r.a.createElement("ul",null,n.map(function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return a(e.name)}},"C00",t+1," ",e.name)}))),r.a.createElement("div",{className:I.a.addBtnBox},r.a.createElement("button",{onClick:t},"\u65b0\u589e\u804a\u5929\u5ba4")))}),V=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e});return r.a.createElement(H,{creatRoom:function(){e(N("CREAT_ROOM"))},chatRooms:t.chatRooms,onClick:function(t){e(S(t))}})},q=n(27),W=n.n(q),Z=n(3),F=n.n(Z);function z(e,t){return(e=new Date(e.dateObj).getTime())-(t=new Date(t.dateObj).getTime())}var Q=function(e){var t=e.name,n=e.msg,a=e.isSelf,o=e.time;return r.a.createElement("div",{className:"".concat(F.a.msgBox," ").concat(a?F.a.isSelf:"")},r.a.createElement("div",{className:F.a.time},r.a.createElement("div",null,o)),r.a.createElement("div",{className:F.a.rightBox},r.a.createElement("div",{className:F.a.msgTag},"<".concat(a?"!--":"").concat(t,">")),r.a.createElement("div",{className:F.a.content},n),r.a.createElement("div",{className:F.a.msgTag},"".concat(a?"--":"</".concat(t),">"))))},X=function(e){var t=e.text;return r.a.createElement("div",{className:F.a.alert},r.a.createElement("span",{className:F.a.blue},"<link"),r.a.createElement("span",{className:F.a.sky}," rel="),r.a.createElement("span",{className:F.a.orange},'"random"'),r.a.createElement("span",{className:F.a.sky}," href="),r.a.createElement("span",{className:F.a.orange},'"'.concat(t,'">')))},K=r.a.memo(function(e){var t=e.msgs,n=e.userName,a=e.loading;t=t.sort(z);var o=null;return o=a?r.a.createElement(X,{text:"\u6b63\u5728\u8b80\u53d6\u8a0a\u606f\u4e2d... \u6216\u8a31\u662f\u76ee\u524d\u804a\u5929\u5ba4\u5167\u7121\u4efb\u4f55\u8a0a\u606f, \u4f86\u6436\u982d\u9999\u5427!"}):t.map(function(e,t){return r.a.createElement(Q,{name:e.name,msg:e.msg,time:e.dateToShow,key:t,isSelf:e.name===n})}),r.a.createElement("div",{className:F.a.wrapper,id:"content"},r.a.createElement("div",{className:F.a.scrollArea},o))}),Y=n(39),J=n(16),$=n.n(J),ee=["\u03c3`\u2200\xb4)\u03c3","_(:3 \u300d\u2220 )_","(\u0301\u25c9\u25de\u0c6a\u25df\u25c9\u2035)","\u0c25\u0c6a\u0c25","(\u03c3\u2032\u25bd\u2035)\u2032\u25bd\u2035)\u03c3","\uff61\uff9f\u30fd(*\xb4\u2200`)\uff89\uff9f\uff61","(\u25d4\u0c6a\u25d4)","(*\xb4\u2200`)~\u2665","(*\uff9f\u2200\uff9f*)","\u03c3`\u2200\xb4)\u03c3","(`\u30fb\u03c9\u30fb\xb4)","\u3002\uff65\uff9f\uff65(\u3064\u0434`\uff9f)\uff65\uff9f\uff65"],te=function(e){var t=e.onClick;return r.a.createElement("div",{className:$.a.cute},ee.map(function(e,n){return r.a.createElement("div",{key:n,onClick:function(){t(e)}},e)}))},ne=function(e){var t=e.onSubmit,n=e.onChangeMsg,o=e.onAddCute,c=e.value,l=e.user,s=Object(a.useRef)(null),i=Object(a.useState)(!1),m=Object(Y.a)(i,2),u=m[0],p=m[1];return r.a.createElement("div",{className:$.a.box},r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,r.a.createElement("span",null,l||"\u4f7f\u7528\u8005"," >"),r.a.createElement("input",{name:"msg",type:"text",ref:s,value:c,onChange:n,className:$.a.textInput,placeholder:"\u8aaa\u9ede\u751a\u9ebc\u5427..."})),r.a.createElement("div",{className:$.a.cuteBtn},r.a.createElement("span",{onClick:function(e){p(!u)}},"(\uff9f\u2200\uff9f) "),"<","-\u7528\u8868\u60c5\u7b26\u865f\u4f86\u8868\u9054\u4f60\u7684\u60c5\u611f\u5427~"),r.a.createElement("input",{type:"submit",value:"\u9001\u51fa",className:$.a.submit}),u&&r.a.createElement(te,{onClick:function(e){p(!1),s.current.focus(),o(e)}})))},ae=n(23),re=n.n(ae),oe=function(e){var t=e.tabs,n=e.active,a=e.onClose,o=e.onClick;return r.a.createElement("div",{className:re.a.wrapper},r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"".concat(e===n?re.a.active:""),onClick:function(){return o(e)}},e,0!==t&&r.a.createElement("div",{className:re.a.closeBtn,onClick:function(t){t.stopPropagation(),a(e)}},"X"))})))},ce=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e});Object(a.useEffect)(function(){var e=document.querySelector("#content");e.scrollTop=e.scrollHeight},[t.msg.length]);return r.a.createElement("div",{className:W.a.rightPart},r.a.createElement(oe,{tabs:t.tabs,active:t.currentRoom,onClose:function(t){e(function(e){return{type:"CLOSE_TAB",tab:e}}(t))},onClick:function(t){e(S(t))}}),r.a.createElement(K,{msgs:t.msg,userName:t.userName,loading:t.loading}),r.a.createElement("div",{className:W.a.box}),r.a.createElement(ne,{user:t.userName,onSubmit:function(n){if(n&&n.preventDefault(),0!==t.currentMsg.trim().length){var a,r,o,c={name:t.userName,msg:t.currentMsg,timeStamp:new Date};e(O("")),a=t.currentRoom,r=c,o=function(){},u.a.firestore().collection("chatRoom").doc(a).collection("messages").add(r).then(function(e){o()}).catch(function(e){console.error("Error adding document: ",e)})}},onChangeMsg:function(t){e(O(t.target.value))},value:t.currentMsg,onAddCute:function(t){e(O(t,!0))}}))};var le=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e}),n=Object(a.useRef)(),o=Object(s.g)().roomParam,c=Object(s.f)();return Object(a.useEffect)(function(){try{u.a.initializeApp(f),e(g(!0))}catch(t){console.log(t)}},[]),Object(a.useEffect)(function(){t.isConnected&&_(function(t){e(y(t,o))})},[t.isConnected]),Object(a.useEffect)(function(){o!==t.currentRoom&&c.replace("/".concat(t.currentRoom)),n.current&&(n.current(),e(h())),e(v(!0)),console.log(void 0),n.current=E(t.currentRoom,function(t){e(v(!1)),e(b(t,!1))})},[t.currentRoom]),r.a.createElement("div",{className:d.a.App},r.a.createElement(V,null),r.a.createElement(ce,null),r.a.createElement(x,null))},se=n(19),ie=n(12),me=n(38);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach(function(t){Object(me.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var de={toggle:!0,roomss:[],isConnected:!1,userName:"",msg:[],currentMsg:"",popup:"SET_ID_TYPE",chatRooms:[],currentRoom:"\u5927\u5ef3",tabs:["\u5927\u5ef3"],roomNameInput:"",loading:!0,test:""},fe=function(e){var t=e.getHours(),n=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes();return"".concat(t,":").concat(n)},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return pe({},e,{toggle:!e.toggle});case"ROOM_FETCH_SUCCEEDED":return pe({},e,{rooms:t.rooms});case"FIREBASE_CONNECTED":return pe({},e,{isConnected:t.isConnected});case"UPDATE_MSG":var n=pe({},t.msg,{dateObj:t.msg.timeStamp.toDate(),dateToShow:fe(t.msg.timeStamp.toDate())});return t.isAll?pe({},e,{msg:Object(ie.a)(n)}):pe({},e,{msg:[].concat(Object(ie.a)(e.msg),[n])});case"CHANGE_MSG":return pe({},e,{currentMsg:t.isAdd?e.currentMsg+t.msg:t.msg});case"SET_ID":return pe({},e,{userName:t.id});case"OPEN_POPUP":return pe({},e,{popup:t.popup});case"UPDATE_ONLINE_USER":return pe({},e,{onlineUser:t.count});case"SET_CHAT_ROOMS":return t.room.name===t.roomParam?pe({},e,{chatRooms:[].concat(Object(ie.a)(e.chatRooms),[t.room]),currentRoom:t.roomParam,tabs:e.tabs.includes(t.roomParam)?e.tabs:[].concat(Object(ie.a)(e.tabs),[t.roomParam])}):pe({},e,{chatRooms:[].concat(Object(ie.a)(e.chatRooms),[t.room])});case"CHANGE_CURRENT_ROOM":return e.tabs.includes(t.room)?pe({},e,{currentRoom:t.room}):pe({},e,{currentRoom:t.room,tabs:[].concat(Object(ie.a)(e.tabs),[t.room])});case"CLOSE_TAB":var a=e.tabs.indexOf(t.tab);return pe({},e,{currentRoom:e.currentRoom===t.tab?e.tabs[a-1]:e.currentRoom,tabs:[].concat(Object(ie.a)(e.tabs.slice(0,a)),Object(ie.a)(e.tabs.slice(a+1)))});case"RESET_MSGS":return pe({},e,{msg:[]});case"SET_ROOM_NAME":return pe({},e,{roomNameInput:t.name});case"SET_LOADING":return pe({},e,{loading:t.loading});default:return e}},_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.b;c.a.render(r.a.createElement(function(e){var t=Object(se.c)(Ee,_e());return r.a.createElement(i.a,{store:t},e.children)},null,r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,children:r.a.createElement(le,null)}),r.a.createElement(s.a,{path:"/:roomParam",children:r.a.createElement(le,null)})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={cover:"PopContent_cover__3KCcn",hide:"PopContent_hide__2fAAp",contentBox:"PopContent_contentBox__2MmOq",idType:"PopContent_idType__iDWKS",someWord:"PopContent_someWord__2CAqb",btnBox:"PopContent_btnBox__2v9wU",idSet:"PopContent_idSet__1zy9i",title:"PopContent_title__Ntytq",confirm:"PopContent_confirm__3FiRv"}}},[[40,1,2]]]);
//# sourceMappingURL=main.97fe8e19.chunk.js.map