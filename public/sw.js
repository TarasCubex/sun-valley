if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c0b53451e988169a44763d80e6c240e1"},{url:"/_next/static/90z-EwkVCKYEgVwgOJVec/_buildManifest.js",revision:"0f37846ded63188e19cae6346749d457"},{url:"/_next/static/90z-EwkVCKYEgVwgOJVec/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/217-7b513859d85021dc.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/712-5c48ac6fdf353670.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/718.a9e21ac728077eb0.js",revision:"a9e21ac728077eb0"},{url:"/_next/static/chunks/769-629ab39289c6c1b2.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/app/%5Bday%5D/loading-c48403aaaccf7b9d.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/app/%5Bday%5D/page-a88f49b854f1370c.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/app/layout-cbc5343b2ad4b774.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/app/page-e0d39da752b2770b.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/app/test/page-9748872e0159953f.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/bce60fc1-dc88a9d87f68e83f.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/framework-b7ba9a8e7304c68b.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/main-8dde67186853cb27.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/main-app-d2dac68ab6023dd8.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/pages/_app-dc346b542e432d0a.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/pages/_error-914d3478dc099efc.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c808f8c2614c3fed.js",revision:"90z-EwkVCKYEgVwgOJVec"},{url:"/_next/static/css/18084496a038e172.css",revision:"18084496a038e172"},{url:"/_next/static/css/7af1b45b244e6d90.css",revision:"7af1b45b244e6d90"},{url:"/_next/static/css/86d1f1e0b2e59ce8.css",revision:"86d1f1e0b2e59ce8"},{url:"/_next/static/css/a2aeb965ac518c13.css",revision:"a2aeb965ac518c13"},{url:"/_next/static/css/f3d82a452dc240c6.css",revision:"f3d82a452dc240c6"},{url:"/_next/static/css/f85ff6f00bbffcc8.css",revision:"f85ff6f00bbffcc8"},{url:"/arrow.png",revision:"be0ec6787c40dca90c9d9f1aa9f10646"},{url:"/close.png",revision:"ded46390d6ab25b01e353b804715024f"},{url:"/delete.png",revision:"28aea8685d9595e5396b72287d2ffca6"},{url:"/edit.png",revision:"27b98812dfe92adb7655523e3720861b"},{url:"/free-icon-font-edit-3917361.png",revision:"7a8fe65f49d073424f260d4791889e91"},{url:"/icon-192x192.png",revision:"d47405a3a36af73a67390f0a2954bdcc"},{url:"/icon-256x256.png",revision:"afcd5d3e4495b5caf16d7c5e5c50cc39"},{url:"/icon-384x384.png",revision:"b06ca1347067cf79e25f7ff35a8cf8a9"},{url:"/icon-512x512.png",revision:"4dbec651037be2e876d858ccf6198b69"},{url:"/loading.gif",revision:"abf67f371e72272ecb948f9994274615"},{url:"/manifest.json",revision:"86d0ddf31859d8bca32dfb07d9b28ee7"},{url:"/menu.png",revision:"10fdf36183e6faf0385e9a145dac6e88"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/page-loading.gif",revision:"9c726989dbb55385f4e168f1905d2d75"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
