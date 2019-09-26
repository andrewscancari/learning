const Mural = (function(_render, Filtro){
    "use strict"
    let cartoes = carregaCartoesPersistidos();

    function carregaCartoesPersistidos() {
        let cartoesLocal = usuario_logado ? JSON.parse(localStorage.getItem(usuario_logado + '_cartoes')) : undefined;

        if(cartoesLocal){
            return cartoesLocal.map(cartaoLocal => new Cartao(cartaoLocal.conteudo, cartaoLocal.tipo))
        } else {
            return []
        }
    };
    
    cartoes.forEach(cartao => {
        preparaCartao(cartao);
    });
    const render = () => _render({cartoes: cartoes, filtro: Filtro.tagsETexto});

    render()

    Filtro.on("filtrado", render)

    function preparaCartao(cartao) {
        const urlsImagens = Cartao.pegaImagens(cartao)
        urlsImagens.forEach(url => {
            fetch(url).then(resposta => {
                caches.open('ceep-imagens').then(cache => {
                    cache.put(url, resposta)
                })
            })
        })

        cartao.on("mudanca.**", persistirCartoes);
        cartao.on("remocao", ()=>{
            cartoes = cartoes.slice(0)
            cartoes.splice(cartoes.indexOf(cartao),1)
            persistirCartoes();
            render()
        })
    }

    function persistirCartoes() {
        if(logado) {
            localStorage.setItem(
                usuario_logado + '_cartoes', JSON.stringify(
                    cartoes.map((cartao) => ({
                        conteudo: cartao.conteudo,
                        tipo: cartao.tipo
                    }))
                )
            );
        }
            
    }

    login.on("login", () => {
        cartoes = carregaCartoesPersistidos();
        
        render();
    });

    login.on("logout", () => {
        cartoes = [];
        render();
    });

    function adiciona(cartao){
        if(logado){
            cartoes.push(cartao)
            persistirCartoes();
            cartao.on("mudanca.**", render)
            preparaCartao(cartao);
            render()
            return true
        } else {
            alert("Você não está logado")
        }
    }

    return Object.seal({
        adiciona
    })

})(Mural_render, Filtro)
