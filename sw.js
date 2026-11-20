self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;
 if(r.method!='GET'||r.headers.has('range')||!r.url.startsWith(self.location.origin)||/\.(mp3|m4a|wav|ogg|pdf)$/i.test(r.url))return;
 e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open('v1').then(k=>k.put(r,c));return x}).catch(()=>caches.match(r)))});
