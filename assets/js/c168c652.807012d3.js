"use strict";(self.webpackChunkios_auto_touch=self.webpackChunkios_auto_touch||[]).push([[2465],{3905:(t,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>N});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=e.createContext({}),m=function(t){var n=e.useContext(d),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},u=function(t){var n=m(t.components);return e.createElement(d.Provider,{value:n},t.children)},g={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,o=k["".concat(d,".").concat(N)]||k[N]||g[N]||l;return a?e.createElement(o,i(i({ref:n},u),{},{components:a})):e.createElement(o,i({ref:n},u))}));function N(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3295:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var e=a(7462),r=(a(7294),a(3905));const l={sidebar_position:6},i=void 0,p={unversionedId:"API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u8bbe\u5907\u5217\u8868",id:"API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u8bbe\u5907\u5217\u8868",title:"\u83b7\u53d6\u8bbe\u5907\u5217\u8868",description:"\u8bf7\u6c42\u53c2\u6570",source:"@site/docs/API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u8bbe\u5907\u5217\u8868.md",sourceDirName:"API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3",slug:"/API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u8bbe\u5907\u5217\u8868",permalink:"/API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u8bbe\u5907\u5217\u8868",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"API\u6587\u6863",previous:{title:"\u5220\u9664\u5206\u7ec4",permalink:"/API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u5220\u9664\u5206\u7ec4"},next:{title:"\u83b7\u53d6\u5206\u7ec4\u5217\u8868",permalink:"/API\u6587\u6863/\u8bf7\u6c42\u63a5\u53e3/\u83b7\u53d6\u5206\u7ec4\u5217\u8868"}},d={},m=[{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u6210\u529f\u54cd\u5e94\u793a\u4f8b",id:"\u6210\u529f\u54cd\u5e94\u793a\u4f8b",level:3},{value:"\u9519\u8bef\u54cd\u5e94\u793a\u4f8b",id:"\u9519\u8bef\u54cd\u5e94\u793a\u4f8b",level:3}],u={toc:m};function g(t){let{components:n,...a}=t;return(0,r.kt)("wrapper",(0,e.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {},\n  "fun": "get_device_list",\n  "msgid": 0\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fun"),(0,r.kt)("td",{parentName:"tr",align:null},"get_device_list"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606fid,\u670d\u52a1\u7aef\u63a5\u6536\u540e\u4f1a\u539f\u6837\u8fd4\u56de\uff0cwebsocket\u8fde\u63a5\u53ef\u7528\u7528\u6765\u5f02\u6b65\u8f6c\u540c\u6b65\u7528\u3002http\u6a21\u5f0f\u76f4\u63a5\u586b0")))),(0,r.kt)("h3",{id:"\u6210\u529f\u54cd\u5e94\u793a\u4f8b"},"\u6210\u529f\u54cd\u5e94\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fun": "get_device_list",\n  "msgid": 0,\n  "status": 0,\n  "data": {\n    "76:90:DE:1F:12:2A": {\n      "state": 0,\n      "ip": "192.168.31.239",\n      "mac": "76:90:DE:1F:12:2A",\n      "vid": "520A",\n      "pid": "000A",\n      "width": "414",\n      "height": "896",\n      "device_name": "iPhone XS Max",\n      "version": "14.0.1",\n      "location": "33|179|750|23|86|0|17|48|687|13|29|888|7|9|199|5|5|179|1|1|600",\n      "gid": "123456",\n      "name": "1111"\n    }\n  },\n  "message": "\u6210\u529f"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fun"),(0,r.kt)("td",{parentName:"tr",align:null},"get_device_list"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606fid,\u670d\u52a1\u7aef\u63a5\u6536\u540e\u4f1a\u539f\u6837\u8fd4\u56de\uff0cwebsocket\u8fde\u63a5\u53ef\u7528\u7528\u6765\u5f02\u6b65\u8f6c\u540c\u6b65\u7528\u3002http\u6a21\u5f0f\u76f4\u63a5\u586b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u6210\u529f,\u975e0\u5931\u8d25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u72b6\u6001(0\u79bb\u7ebf\u975e0\u5728\u7ebf)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.ip"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.31.239"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907ip\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.mac"),(0,r.kt)("td",{parentName:"tr",align:null},"76:90:DE:1F:12:2A"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907mac\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.vid"),(0,r.kt)("td",{parentName:"tr",align:null},"520A"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"usb\u8bbe\u5907vid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.pid"),(0,r.kt)("td",{parentName:"tr",align:null},"000A"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"usb\u8bbe\u5907pid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.width"),(0,r.kt)("td",{parentName:"tr",align:null},"414"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u5c4f\u5e55\u771f\u5b9e\u5bbd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.height"),(0,r.kt)("td",{parentName:"tr",align:null},"896"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u5c4f\u5e55\u771f\u5b9e\u9ad8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.device_name"),(0,r.kt)("td",{parentName:"tr",align:null},"iPhone XS Max"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u578b\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.version"),(0,r.kt)("td",{parentName:"tr",align:null},"14.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u7cfb\u7edf\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.location"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"usb\u8bbe\u5907\u9f20\u6807\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.gid"),(0,r.kt)("td",{parentName:"tr",align:null},"123456"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.76:90:DE:1F:12:2A.name"),(0,r.kt)("td",{parentName:"tr",align:null},"1111"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u540d(\u7528\u6237\u81ea\u5b9a\u4e49\u540d\u79f0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u8fd4\u56de\u6d88\u606f")))),(0,r.kt)("h3",{id:"\u9519\u8bef\u54cd\u5e94\u793a\u4f8b"},"\u9519\u8bef\u54cd\u5e94\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {},\n  "fun": "get_device_list",\n  "message": "\u5931\u8d25",\n  "msgid": 0,\n  "status": 1\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fun"),(0,r.kt)("td",{parentName:"tr",align:null},"del_group"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u5931\u8d25\uff0c\u5206\u7ec4\u4e0d\u5b58\u5728"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u8fd4\u56de\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606fid,\u670d\u52a1\u7aef\u63a5\u6536\u540e\u4f1a\u539f\u6837\u8fd4\u56de\uff0cwebsocket\u8fde\u63a5\u53ef\u7528\u7528\u6765\u5f02\u6b65\u8f6c\u540c\u6b65\u7528\u3002http\u6a21\u5f0f\u76f4\u63a5\u586b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u6210\u529f,\u975e0\u5931\u8d25")))))}g.isMDXComponent=!0}}]);