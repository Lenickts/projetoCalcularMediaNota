//Criação da Classe
class Aluno{
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    //Função de cálculo com laço FOR
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
}

//Manipulação da DOM
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-notas").addEventListener('submit', function (event) {
        event.preventDefault();

        // Pegar as informações do input e armazenar numa constante
        const nome = document.getElementById("nome").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);

        // //Validação dos campos
        if (!nome.trim() || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Preencha todos os campos corretamente.")
            return;
        }
        if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
            nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
            alert("Preencha todos os campos corretamente com notas entre 0 e 10.");
            return;
        }

        //Criando as instancias
        const aluno = new Aluno(nome, [nota1, nota2, nota3]);
        const media = aluno.calcularMedia();
        const mediaFormatada = media.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2  //usado para converter os números, deixar bonito na exibição, trocar ponto por vírgula
        });

        //Apresentar informações na DOM
        document.getElementById("mensagem").innerHTML = `
            <p><strong>Aluno: </strong> ${aluno.nome}</p>
            <p><strong>Média: </strong> ${mediaFormatada}</p>
            <p>${verificaAprovacao(aluno.nome,media)}</p>`;
    });

    //Validando a média
        function verificaAprovacao(nome,media) {
            if (media < 6.5) {
                return `Aluno (a) ${nome}, não atingiu a média mínima.`;
            }
            else if (media >= 6.5 && media < 7) {
                return `Aluno (a) ${nome}, passou com o limite da média. Avaliar possibilidades de melhoria.`;
            }
            else {
                return `Aluno (a) ${nome}, foi aprovado. Parabéns!`;
            }
        }
});