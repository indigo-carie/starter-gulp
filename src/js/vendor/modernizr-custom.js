/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-animation-appearance-backgroundblendmode-backgroundcliptext-bgsizecover-checked-classlist-cssall-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-dataset-details-ellipsis-fetch-flexbox-flexboxlegacy-flexboxtweener-flexwrap-formvalidation-hashchange-hiddenscroll-history-htmlimports-inlinesvg-input-inputtypes-json-localstorage-matchmedia-opacity-overflowscrolling-picture-placeholder-pointerevents-preserve3d-requestanimationframe-scrollsnappoints-search-shapes-sizes-smil-srcset-svg-svgasimg-svgclippaths-svgfilters-templatestrings-textalignlast-touchevents-video-webgl-webglextensions-willchange-setclasses !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,r,i,o,s;for(var d in tests)if(tests.hasOwnProperty(d)){if(e=[],t=tests[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=is(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],s=o.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),classes.push((r?"":"no-")+s.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),setClasses([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,r){var i,o,s,d,a="modernizr",l=createElement("div"),c=getBody();if(parseInt(n,10))for(;n--;)s=createElement("div"),s.id=r?r[n]:a+(n+1),l.appendChild(s);return i=createElement("style"),i.type="text/css",i.id="s"+a,(c.fake?c:l).appendChild(i),c.appendChild(l),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),l.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),o=t(l,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=d,docElement.offsetHeight):l.parentNode.removeChild(l),!!o}function contains(e,t){return!!~(""+e).indexOf(t)}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],is(r,"function")?fnBind(r,n||t):r);return!1}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];n--;)r.push("("+domToCSS(e[n])+":"+t+")");return r=r.join(" or "),injectElementWithStyles("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function testProps(e,t,n,r){function i(){s&&(delete mStyle.style,delete mStyle.modElem)}if(r=is(r,"undefined")?!1:r,!is(n,"undefined")){var o=nativeTestProps(e,n);if(!is(o,"undefined"))return o}for(var s,d,a,l,c,u=["modernizr","tspan","samp"];!mStyle.style&&u.length;)s=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,d=0;a>d;d++)if(l=e[d],c=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(r||is(n,"undefined"))return i(),"pfx"==t?l:!0;try{mStyle.style[l]=n}catch(p){}if(mStyle.style[l]!=c)return i(),"pfx"==t?l:!0}return i(),!1}function testPropsAll(e,t,n,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,r,i):(s=(e+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(s,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}var classes=[],tests=[],ModernizrProto={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),Modernizr.addTest("picture","HTMLPictureElement"in window),Modernizr.addTest("fetch","fetch"in window),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});var docElement=document.documentElement;Modernizr.addTest("cssall","all"in docElement.style),Modernizr.addTest("willchange","willChange"in docElement.style),Modernizr.addTest("classlist","classList"in docElement);var isSVG="svg"===docElement.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webanimations","animate"in createElement("div")),Modernizr.addTest("webgl",function(){var e=createElement("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in window}),Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("preserve3d",function(){var e=createElement("a"),t=createElement("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),docElement.appendChild(e);var n=t.getBoundingClientRect();return docElement.removeChild(e),n.width&&n.width<4}),Modernizr.addTest("dataset",function(){var e=createElement("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),Modernizr.addTest("srcset","srcset"in createElement("img")),Modernizr.addTest("inlinesvg",function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var hasEvent=function(){function e(e,n){var r;return e?(n&&"string"!=typeof n||(n=createElement(n||"div")),e="on"+e,r=e in n,!r&&t&&(n.setAttribute||(n=createElement("div")),n.setAttribute(e,""),r="function"==typeof n[e],n[e]!==undefined&&(n[e]=undefined),n.removeAttribute(e)),r):!1}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent,Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)===!1?!1:document.documentMode===undefined||document.documentMode>7}),Modernizr.addTest("inputsearchevent",hasEvent("search"));var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs);var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,r,i=e.length,o="1)",s=0;i>s;s++)inputElem.setAttribute("type",t=e[s]),r="text"!==inputElem.type&&"style"in inputElem,r&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,r=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(r=/^(url|email)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[e[s]]=!!r;return inputs}(inputtypes);var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=prefixes.length-1;o>i;i++)e=0===i?"to ":"",r+=t+prefixes[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=createElement("a"),d=s.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),r=n.style;return r.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax);var toStringFn={}.toString;Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))});var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),addTest("htmlimports","import"in createElement("link")),Modernizr.addAsyncTest(function(){var e,t,n,r=createElement("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){addTest("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):addTest("sizes",i)}),Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes,Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e});var testStyles=ModernizrProto.testStyles=injectElementWithStyles;Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,s=r.clientHeight/100,d=parseInt(50*Math.max(o,s),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(d,a)||roundedEquals(d,a-i))},3),testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,s=r.clientHeight/100,d=parseInt(50*Math.min(o,s),10),a=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(d,a)||roundedEquals(d,a-i))},3),testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)}),Modernizr.addTest("details",function(){var e,t=createElement("details");return"open"in t?(testStyles("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(r){r.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,n=prefixes.length,r=window.CSSRule;if("undefined"==typeof r)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in r)return"@"+e;for(var i=0;n>i;i++){var o=prefixes[i],s=o.toUpperCase()+"_"+t;if(s in r)return"@-"+o.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),Modernizr.addTest("matchmedia",!!prefixed("matchMedia",window)),ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addTest("appearance",testAllProps("appearance")),Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=testAllProps("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0)),Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=new Boolean(!1),Modernizr.webgl){var e,t,n;try{e=createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(r){return}t!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var i=-1,o=n.length;++i<o;)Modernizr.webglextensions[n[i]]=!0;e=undefined}}),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);