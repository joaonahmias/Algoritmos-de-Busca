function buscaBinariaRecursiva(chave,vetor,esquerda,direita){
    

    if(esquerda<=direita){
        let meio = Math.floor((esquerda+direita)/2)
        if(vetor[meio]===chave){
            return vetor[meio]
        }
        else if(vetor[meio]<chave){
            return buscaBinariaRecursiva(chave,vetor, meio+1,direita)
        }
        else{
            return buscaBinariaRecursiva(chave,vetor, esquerda, meio-1)
        }
    }

    return -1
}

let v = [1,2,3,4,5]
buscaBinariaRecursiva(5,v,0,v.length)

export default buscaBinariaRecursiva