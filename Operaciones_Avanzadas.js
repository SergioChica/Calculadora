

function raiz(a) {
    let resultadoRaiz = Math.sqrt(a)
    return alert(resultadoRaiz);
}

function elevar(a,b) {
    return alert(Math.pow(a,b))
}

function absoluto(a) {
    let resultadoAbosoluto = Math.abs(a)
    return alert(resultadoAbosoluto);
}

export { raiz, elevar, absoluto }