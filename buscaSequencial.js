function buscaSequencial(chave,vetor){
    let i
    for(i=0;i<vetor.length;i++){
        if(vetor[i]===chave){
            return vetor[i]
        }
    }

    return -1

}

export default buscaSequencial

