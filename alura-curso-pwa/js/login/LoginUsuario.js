let logado = JSON.parse(localStorage.getItem("logado"))
let usuario_logado = localStorage.getItem("usuario_logado")
let login = new EventEmitter2()

LoginUsuario_render({
    logado: logado,
    usuario: usuario_logado,
    onLogin: (nomeUsuario) => {
        logado = true;
        localStorage.setItem("logado", true);
        localStorage.setItem("usuario_logado", nomeUsuario);
        usuario_logado = nomeUsuario;
        login.emit("login");
    },
    onLogout: () => {
        logado = false;
        localStorage.setItem("logado", false);
        localStorage.removeItem("usuario_logado");
        login.emit("logout");
    }
})