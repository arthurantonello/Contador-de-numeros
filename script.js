let inicio = document.querySelector('input#inicio')
let fim = document.querySelector('input#fim')
let passo = document.querySelector('input#passo')
let res = document.querySelector('div.res')

function executarContagem(){
    if (validar()){
        contagem()
    }
}

function contagem(){ 
    let numInicio = Number(inicio.value)
    let numFim = Number(fim.value)
    let numPasso = passo
    let cont = inicio

    if(numInicio < numFim){
        //Contagem crescente
        res.innerHTML = ('Contagem: <br>')  
        for (cont = numInicio; cont <= numFim; cont += numPasso){
            res.innerHTML += `${cont} \u{1F449} `
        }
    }else{
        //Contagem decrescente
        res.innerHTML = ('Contagem: <br>')
        for (cont = numInicio; cont >= numFim; cont -= numPasso){
            res.innerHTML += `${cont} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}

//Validação dos itens chave
function validar(){
    if (inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = `Impossível contar`
        alert(`[ERRO]Impossível contar, cheque os dados e tente novamente`)
        return false
    }else if (Number(passo.value) <= 0){
        alert( 'Número de passos vazio, considerando PASSO = 1')
        passo = 1
        return true
    }else{
        passo = Number(passo.value)
        return true
    }
}