function buscaBinaria(chave,vetor){
    let esquerda = 0
    let direita = vetor.length-1

    while(esquerda<=direita){
        let meio = Math.floor((esquerda+direita)/2)
        if(vetor[meio]===chave){
            return vetor[meio]
        }
        else if(vetor[meio]<chave){
            esquerda = meio+1
        }
        else{
            direita = meio-1
        }
    }

    return -1
}

export default buscaBinaria