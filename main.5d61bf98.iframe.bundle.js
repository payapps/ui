(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{520:function(module,exports,__webpack_require__){__webpack_require__(521),__webpack_require__(681),__webpack_require__(682),__webpack_require__(902),__webpack_require__(899),__webpack_require__(905),__webpack_require__(906),__webpack_require__(904),__webpack_require__(901),__webpack_require__(907),__webpack_require__(903),module.exports=__webpack_require__(885)},593:function(module,exports){},682:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(358)},885:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(358).configure)([__webpack_require__(886),__webpack_require__(896)],module,!1)}).call(this,__webpack_require__(165)(module))},886:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":887};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=886},887:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(9),__webpack_require__(16),__webpack_require__(27),__webpack_require__(38),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(56),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(228);__webpack_require__(888),__webpack_require__(889),__webpack_require__(890),__webpack_require__(891),__webpack_require__(892),__webpack_require__(893),__webpack_require__(894),__webpack_require__(895);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Payapps/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"welcome-to-payapps-ui"},"Welcome to Payapps UI"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"The Payapps UI is a themed version of Chakra UI for the most part. As such, what you'll find here will likely be a collection of components in feature form."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Documentation for all things Chakra can be found ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{target:"_blank",href:"https://chakra-ui.com/docs/getting-started"},"right  here"),"."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Payapps/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},888:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},889:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},890:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},891:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},892:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},893:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},894:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},895:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},896:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.js":900};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=896},900:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Button_stories_Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Button_stories_Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Button_stories_Tertiary})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));__webpack_require__(9),__webpack_require__(897);var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(59),jsx_runtime=__webpack_require__(21),LoadingSpinner_LoadingSpinner=function LoadingSpinner(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return Object(jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:className,width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(jsx_runtime.jsx)("defs",{children:Object(jsx_runtime.jsxs)("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[Object(jsx_runtime.jsx)("stop",{stopColor:"currentColor",stopOpacity:"0",offset:"0%"}),Object(jsx_runtime.jsx)("stop",{stopColor:"currentColor",stopOpacity:".631",offset:"63.146%"}),Object(jsx_runtime.jsx)("stop",{stopColor:"currentColor",offset:"100%"})]})}),Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsxs)("g",{transform:"translate(1 1)",children:[Object(jsx_runtime.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:"url(#a)",strokeWidth:"2",children:Object(jsx_runtime.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(jsx_runtime.jsx)("circle",{fill:"currentColor",cx:"36",cy:"18",r:"1",children:Object(jsx_runtime.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})};LoadingSpinner_LoadingSpinner.displayName="LoadingSpinner";try{LoadingSpinner_LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner_LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/LoadingSpinner.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner_LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"src/components/Icons/LoadingSpinner.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}var Tick_Tick=function Tick(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return Object(jsx_runtime.jsxs)("svg",{width:"38",height:"38",fill:"none",className:className,xmlns:"http://www.w3.org/2000/svg",children:[Object(jsx_runtime.jsx)("circle",{cx:"11",cy:"11",r:"9.231",stroke:"currentColor",strokeWidth:"2"}),Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.876 14.755L6.03 10.909l1.084-1.085 2.762 2.754 5.838-5.838L16.8 7.832l-6.923 6.923z",fill:"currentColor"})]})};Tick_Tick.displayName="Tick";try{Tick_Tick.displayName="Tick",Tick_Tick.__docgenInfo={description:"",displayName:"Tick",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/Tick.tsx#Tick"]={docgenInfo:Tick_Tick.__docgenInfo,name:"Tick",path:"src/components/Icons/Tick.tsx#Tick"})}catch(__react_docgen_typescript_loader_error){}var _templateObject;__webpack_require__(63),__webpack_require__(459),__webpack_require__(304),__webpack_require__(13);var Primary_templateObject,sizeMap={lg:{fontSize:"22px",height:"64px",padding:"19px 50px 19px"},md:{fontSize:"18px",height:"44px",padding:"12px 40px 11px"},sm:{fontSize:"15px",height:"32px",padding:"7px 35px 7px"}},ButtonBase=styled_components_browser_esm.b.button(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  &[disabled] {\n    background-color: ",";\n    color: ",";\n    border: 1px solid rgba(182, 197, 206, 0.5);\n    pointer-events: none;\n  }\n\n  display: inline-block;\n  position: relative;\n  font-size: ",";\n  height: ",";\n  padding: ",";\n  font-weight: 700;\n  border-radius: 9999px;\n  text-transform: capitalize;\n  cursor: pointer;\n  transition: background-color 0.125s, color 0.125s;\n\n  ","\n\n  ","\n\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    top: 0;\n    left: 0;\n    z-index: 0;\n    transition: opacity 0.35s;\n    border-radius: inherit;\n    mix-blend-mode: multiply;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    background-color: $lightBlue;\n    color: $white;\n    border: solid 1px $lightBlue;\n    &:before {\n      background: rgba(0, 0, 0, 0.2);\n      opacity: 1;\n    }\n  }\n\n  svg {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateY(-55%) translateX(-50%);\n    width: 1.2em;\n    height: 1.2em;\n  }\n"])),(function(props){return props.theme.colors.xtraLightGrey}),(function(props){return props.theme.colors.lightGrey}),(function(props){return sizeMap[props.size].fontSize}),(function(props){return sizeMap[props.size].height}),(function(props){return sizeMap[props.size].padding}),(function(props){var statusBGColor="loading"===props.status?"lightBlue":"green",opacity="loading"===props.status?"1":"inherit";return props.status?"\n        && {\n          border: solid transparent 1px;\n          background-color: ".concat(props.theme.colors[statusBGColor],";\n          color: ").concat(props.theme.colors.white,";\n          &:before {\n            opacity: ").concat(opacity,";\n          }\n        }\n      "):null}),(function(props){return props.block?"\n        width: 100%;\n        & + & {\n          margin-top: 16px;\n          margin-left: 0;\n        }\n      ":"\n        width: auto;\n        & + & {\n          margin-left: 16px;\n        }\n      "}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean | null"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | null"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonBase.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/Button/ButtonBase.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}var Secondary_templateObject,Primary=Object(styled_components_browser_esm.b)(ButtonBase)(Primary_templateObject||(Primary_templateObject=function Primary_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background-color: ",";\n  border: solid "," 1px;\n  color: ",";\n  &:hover {\n    &:before {\n      opacity: 1;\n    }\n  }\n"])),(function(props){return props.theme.colors.lightBlue}),(function(props){return props.theme.colors.lightBlue}),(function(props){return props.theme.colors.white}));try{Primary.displayName="Primary",Primary.__docgenInfo={description:"",displayName:"Primary",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean | null"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | null"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Primary.tsx#Primary"]={docgenInfo:Primary.__docgenInfo,name:"Primary",path:"src/components/Button/Primary.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}var Tertiary_templateObject,Secondary=Object(styled_components_browser_esm.b)(ButtonBase)(Secondary_templateObject||(Secondary_templateObject=function Secondary_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background-color: ",";\n  border: solid rgba(0, 122, 255, 0.4) 1px;\n  color: ",";\n  &:hover {\n    ","\n  }\n"])),(function(props){return props.theme.colors.white}),(function(props){return props.theme.colors.lightBlue}),(function(props){return function backgroundHoverStyles(props){var bgColor=props.status&&"success"===props.status?"green":"lightBlue";return"\n    background-color: ".concat(props.theme.colors[bgColor],";\n    border: ").concat(props.theme.colors[bgColor]," solid 1px;\n    color: ").concat(props.theme.colors.white,";\n  ")}(props)}));try{Secondary.displayName="Secondary",Secondary.__docgenInfo={description:"",displayName:"Secondary",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean | null"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | null"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Secondary.tsx#Secondary"]={docgenInfo:Secondary.__docgenInfo,name:"Secondary",path:"src/components/Button/Secondary.tsx#Secondary"})}catch(__react_docgen_typescript_loader_error){}var Link_templateObject,Tertiary=Object(styled_components_browser_esm.b)(ButtonBase)(Tertiary_templateObject||(Tertiary_templateObject=function Tertiary_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  &:hover {\n    ","\n  }\n"])),(function(props){return props.theme.colors.white}),(function(props){return props.theme.colors.medGrey}),(function(props){return props.theme.colors.lightGrey}),(function(props){var defaults={backgroundColor:props.theme.colors.white,color:props.theme.colors.lightBlue,border:props.theme.colors.lightBlue},colors=props.status?function hoverColors(props){return{loading:{backgroundColor:props.theme.colors.lightBlue,color:props.theme.colors.white,border:props.theme.colors.lightBlue},success:{backgroundColor:props.theme.colors.green,color:props.theme.colors.white,border:props.theme.colors.green}}[props.status]}(props):defaults;return"\n          background-color: ".concat(colors.backgroundColor,";\n          border: solid 1px ").concat(colors.border,";\n          color: ").concat(colors.color,";\n        ")}));try{Tertiary.displayName="Tertiary",Tertiary.__docgenInfo={description:"",displayName:"Tertiary",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean | null"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string | null"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Tertiary.tsx#Tertiary"]={docgenInfo:Tertiary.__docgenInfo,name:"Tertiary",path:"src/components/Button/Tertiary.tsx#Tertiary"})}catch(__react_docgen_typescript_loader_error){}var Button_templateObject,_templateObject2,Link=styled_components_browser_esm.b.span(Link_templateObject||(Link_templateObject=function Link_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: inline-block;\n  color: ",";\n  font-weight: 500;\n  font-size: ",";\n  text-decoration: ",";\n  cursor: pointer;\n"])),(function(props){return props.theme.colors.lightBlue}),(function(props){return props.fontSize}),(function(props){return props.underline?"underline":"none"}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Button/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Button_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var TextContent=styled_components_browser_esm.b.div(Button_templateObject||(Button_templateObject=Button_taggedTemplateLiteral(["\n  transition: opacity 0.125s;\n  line-height: 1.16;\n"]))),Wrapper=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=Button_taggedTemplateLiteral(["position: relative;"]))),Button=Object(react.forwardRef)((function(props,ref){var _props$type=props.type,type=void 0===_props$type?"primary":_props$type,_props$size=props.size,size=void 0===_props$size?"md":_props$size,_props$loading=props.loading,loading=void 0!==_props$loading&&_props$loading,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,_props$block=props.block,block=void 0!==_props$block&&_props$block,success=props.success,children=props.children,_props$className=props.className,className=void 0===_props$className?"":_props$className,_props$underline=props.underline,underline=void 0!==_props$underline&&_props$underline,_props$fontSize=props.fontSize,fontSize=void 0===_props$fontSize?"inherit":_props$fontSize,rest=_objectWithoutProperties(props,["type","size","loading","disabled","block","success","children","className","underline","fontSize"]),ComponentTypes={primary:Primary,secondary:Secondary,tertiary:Tertiary,link:Link},Component=ComponentTypes[type]||ComponentTypes.primary,isLoading=loading&&!disabled,opacity=isLoading||void 0!==success&&success?0:1,status=success?"success":isLoading?"loading":null,ButtonRequestStatus="success"===status?Tick_Tick:LoadingSpinner_LoadingSpinner;return Object(jsx_runtime.jsx)(Component,Object.assign({},rest,{size:size,disabled:disabled,status:status,ref:ref,block:block,className:className,underline:underline,fontSize:fontSize,children:"link"===type?Object(jsx_runtime.jsx)("span",{className:"paui-button--link",children:children}):Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(TextContent,{style:{opacity:opacity},children:children}),status&&Object(jsx_runtime.jsx)(ButtonRequestStatus,{})]})}))}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"tertiary"'},{value:'"secondary"'},{value:'"link"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},htmlType:{defaultValue:null,description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var config={title:"Payapps/Button",component:Button,argTypes:{backgroundColor:{control:"color"}}},Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Button_stories_Primary=Button_stories_Template.bind({});Button_stories_Primary.args={type:"primary",loading:!1,success:!1,disabled:!1,children:"Publish",block:!1};var Button_stories_Secondary=Button_stories_Template.bind({});Button_stories_Secondary.args={type:"secondary",loading:!1,success:!1,children:"Publish",disabled:!1,block:!1};var Button_stories_Tertiary=Button_stories_Template.bind({});Button_stories_Tertiary.args={type:"tertiary",loading:!1,success:!1,children:"Publish",disabled:!1,block:!1};var Disabled=Button_stories_Template.bind({});Disabled.args={type:"primary",disabled:!0,loading:!1,success:!1,children:"Publish",block:!1};__webpack_exports__.default=config;Button_stories_Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Button_stories_Primary.parameters),Button_stories_Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Button_stories_Secondary.parameters),Button_stories_Tertiary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Button_stories_Tertiary.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Disabled.parameters)},903:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(16),__webpack_require__(38),__webpack_require__(49),__webpack_require__(881),__webpack_require__(40),__webpack_require__(41),__webpack_require__(882),__webpack_require__(304),__webpack_require__(883);var client_api=__webpack_require__(919),esm=__webpack_require__(6),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(9),__webpack_require__(59)),extend_theme=__webpack_require__(917),chakra_provider=__webpack_require__(918),defaultTheme=(__webpack_require__(62),__webpack_require__(13),{baseFontSize:"".concat(16,"px"),colors:{hoveredBg:"rgba(0, 0, 0, 0.2)",activeBg:"rgba(0, 0, 0, 0.1)",white:"#FFF",darkBlue:"#1F2533",blue:"#0D44AA",lightBlue:"#007AFF",grey:"#5A6E7A",pending:"#ff9500",green:"#39B683",red:"#FF354E",regGrey:"#6F8593",medGrey:"#8EA3B0",lightGrey:"#B6C5CE",xtraLightGrey:"#F7F7F7",tableBG:"#FAFAFA",infoBlue:"#F0F9FF",toasterGreen:"#E9F5F0",errorRed:"#FEF7F8"},size:function size(){for(var _len=arguments.length,value=new Array(_len),_key=0;_key<_len;_key++)value[_key]=arguments[_key];return value.reduce((function(a,i){return"".concat(a," ").concat(i/16,"rem")}),"")}}),jsx_runtime=__webpack_require__(21),ThemeProvider_ThemeProvider=function ThemeProvider(_ref){var _ref$theme=_ref.theme,theme=void 0===_ref$theme?{}:_ref$theme,children=_ref.children,composedTheme=Object.assign({},theme,defaultTheme),extendedTheme=Object(extend_theme.a)(composedTheme);return Object(jsx_runtime.jsx)(chakra_provider.a,{theme:extendedTheme,children:Object(jsx_runtime.jsx)(styled_components_browser_esm.a,{theme:composedTheme,children:children})})};ThemeProvider_ThemeProvider.displayName="ThemeProvider";try{ThemeProvider_ThemeProvider.displayName="ThemeProvider",ThemeProvider_ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"",name:"theme",required:!1,type:{name:"{ [key: string]: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider_ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/components/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}var parameters={actions:{argTypesRegex:"^on[A-Z].*"}},decorators=[function(Story){return Object(jsx_runtime.jsx)(ThemeProvider_ThemeProvider,{children:Object(jsx_runtime.jsx)(Story,{})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[520,2,3]]]);