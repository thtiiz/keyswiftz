"use strict";var precacheConfig=[["/keyswiftz/index.html","745a68a7b230e9825daacf437599a473"],["/keyswiftz/static/css/main.30737fb4.css","6569d395cdd6197e683606c0cbfe45a2"],["/keyswiftz/static/js/main.d45c3069.js","f8349a947321ea2c4c7d819c41d7fa49"],["/keyswiftz/static/media/A_major.8bd9e033.gif","8bd9e033227fdaf4d3e0bab873dd207b"],["/keyswiftz/static/media/A_minor.bc33b05d.gif","bc33b05d7a3a68d357e8e74fd5a22599"],["/keyswiftz/static/media/B_major.b6084520.gif","b608452064b3425dbfa484ee36acdfb5"],["/keyswiftz/static/media/B_minor.e2c35abf.gif","e2c35abf72ace1d7bc6465f8c96fc4d9"],["/keyswiftz/static/media/C_major.2186bc31.gif","2186bc31cfcdc9ebc96906e5f3e83eed"],["/keyswiftz/static/media/C_minor.908172be.gif","908172be1bfdcf540bd76e79a0581588"],["/keyswiftz/static/media/D_major.d06d0ead.gif","d06d0eadc58752a86c2fc86c7e2b1aa4"],["/keyswiftz/static/media/D_minor.d3d63cb6.gif","d3d63cb60b06efda007bbd37cbb3069e"],["/keyswiftz/static/media/E_major.ec89aedc.gif","ec89aedc6f4aba64c090d81699348409"],["/keyswiftz/static/media/E_minor.d0a46d00.gif","d0a46d005699ee391e0955992dab78ce"],["/keyswiftz/static/media/F_major.4f99cc09.gif","4f99cc09964ec85a5ddb39c7e0fd2b4d"],["/keyswiftz/static/media/F_minor.a5861d0c.gif","a5861d0c8e596446254b4edfdf3d45cc"],["/keyswiftz/static/media/G_major.f4e74aba.gif","f4e74aba3273423e3792d55cf7e89096"],["/keyswiftz/static/media/G_minor.ebc063fd.gif","ebc063fd3730504787fd64ff4370373a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/keyswiftz/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});