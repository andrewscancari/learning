System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(seletor) {
        return function (target, key) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    const t1 = performance.now();
                    elemento = $(seletor);
                    const t2 = performance.now();
                    console.log(`Buscar o elemento ${seletor} para ${key} levou ${t2 - t1} ms`);
                }
                return elemento;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
