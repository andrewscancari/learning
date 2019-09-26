let swVersion = 10;

let cacheFiles = [
    "/",
    "web-app-manifest.json",
    "css/estilos.css",
    "css/opcoesDaPagina.css",
    "css/opcoesDoCartao.css",
    "css/cabecalho.css",
    "css/login.css",
    "css/loginForm.css",
    "css/loginStatus.css",
    "css/cartao.css",
    "css/novoCartao.css",
    "css/mural.css",
    "js/lib/jquery.js",
    "js/lib/eventemitter2.js",
    "js/lib/KeyBoardNavigation.js",
    "js/tags/Tags.js",
    "js/cabecalho/mudaLayout.js",
    "js/cabecalho/busca.js",
    "js/filtro/Filtro.js",
    "js/tipos/TiposCartao.js",
    "js/cartao/render/Cartao_renderHelpers.js",
    "js/cartao/render/CartaoOpcoes_render.js",
    "js/cartao/render/CartaoConteudo_render.js",
    "js/cartao/render/Cartao_render.js",
    "js/cartao/Cartao.js",
    "js/login/LoginUsuario_render.js",
    "js/login/LoginUsuario.js",
    "js/mural/render/Mural_render.js",
    "js/mural/Mural.js",
    "js/cabecalho/novoCartao.js",
    "js/sw/registra.js",
    "img/bin2.svg",
    "img/edit.svg",
    "img/icons/favicon.ico",
    "img/icons/48.png",
    "img/icons/72.png",
    "img/icons/96.png",
    "img/icons/144.png",
    "img/icons/192.png",
    "img/icons/256.png",
    "img/icons/512.png"
]

self.addEventListener("install", function() {
    console.log("SW Instalado!");
});

self.addEventListener("activate", function() {
    caches.open("ceep-arquivos-" + swVersion).then(cache => {
        cache.addAll(cacheFiles).then(function() {
            caches.delete("ceep-arquivos-" + (swVersion - 1));
        });
    });
});

self.addEventListener("fetch", function(event) {
    let request = event.request;
    let promiseResponse = caches.match(request).then(cacheResponse => {
        let response = cacheResponse ? cacheResponse : fetch(request);
        return response;
    });

    event.respondWith(promiseResponse);
});