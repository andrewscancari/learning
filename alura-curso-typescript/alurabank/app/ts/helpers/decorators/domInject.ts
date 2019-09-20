export function domInject(seletor: string) {
    return function(target: any, key: string) {
        let elemento: JQuery;

        const getter = function() {
            if(!elemento) {
                const t1 = performance.now();
                elemento = $(seletor);
                const t2 = performance.now();

                console.log(`Buscar o elemento ${seletor} para ${key} levou ${t2-t1} ms`);
            }

            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}