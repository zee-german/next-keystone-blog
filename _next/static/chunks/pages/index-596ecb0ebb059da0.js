(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},1551:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},u=r(1003),i=r(880),c=r(9246);var l={};function f(e,n,r,t){if(e&&u.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n,r=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=t(u.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?u.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,g=t(c.useIntersection({rootMargin:"200px"}),2),w=g[0],E=g[1],L=a.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);a.default.useEffect((function(){var e=E&&r&&u.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&f(o,d,p,{locale:n})}),[p,d,E,_,r,o]);var x={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,h,y,b,_)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof _?_:o&&o.locale,k=o&&o.isLocaleDomain&&u.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);x.href=k||u.addBasePath(u.addLocale(p,M,o&&o.defaultLocale))}return a.default.cloneElement(n,x)};n.default=s},9246:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!u,c=o.useRef(),l=t(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,u=t.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),a=r(4686),u="undefined"!==typeof IntersectionObserver;var i=new Map},4186:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return a},default:function(){return u}});var t=r(5893),o=r(1664),a=!0;function u(e){var n=e.posts;return(0,t.jsx)("div",{children:(0,t.jsxs)("main",{style:{margin:"3rem"},children:[(0,t.jsx)("h1",{children:"Hello World! \ud83d\udc4b\ud83c\udffb "}),(0,t.jsx)("ul",{children:n.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:"/post/".concat(e.slug),children:(0,t.jsx)("a",{children:e.title})})},e.id)}))})]})})}},1664:function(e,n,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);