
function buscaBinaria(chave, v) {
	let esquerda = -1;
	let direita = v.length;

	while (esquerda < direita - 1) {
        console.log ("esquerda: "+esquerda+" direita: "+direita)

		let meio = Math.floor((esquerda + direita) / 2);
        console.log ("meiota: "+meio)
		if (v[meio] < chave) {
			esquerda = meio;
		} else {
			direita = meio;
		}
	}
	return v[direita];
}

const v = [1,2,3,4,5]
let chave = 3
buscaBinaria(chave, v)
