// Função que calcula o saldo de Rankeadas e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas (vitórias - derrotas)
        
        let saldoVitorias = vitorias - derrotas;
    
        // Determina o nível com base no saldo de vitórias
        let nivel;
    
        if (vitorias < 10) {
            nivel = "Ferro";
        } else if (vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }
    
        // Retorna um objeto com o saldo de vitórias e o nível
        return {
            saldoVitorias,
            nivel
        };
    }
    
    // uso da função
    let vitorias = 30;
    let derrotas = 24;
    
    // Converte as entradas do usuário para números
    vitorias = parseInt(vitorias);
    derrotas = parseInt(derrotas);
    
    // Chama a função e armazena o resultado em uma variável
    let resultado = calcularNivel(vitorias, derrotas);
    
    // Exibe a mensagem com o saldo de vitórias e o nível do jogador
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    