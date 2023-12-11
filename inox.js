let saldoVitorias = vitorias - derrotas;
let nivel;

if (vitorias < 10) {
  nivel = "Ferro";
} else if (vitorias >= 10 && vitorias <= 20) {
  nivel = "Bronze";
} else if (vitorias > 20 && vitorias <= 50) {
  nivel = "Prata";
} else if (vitorias > 50 && vitorias <= 80) {
  nivel = "Ouro";
} else if (vitorias > 80 && vitorias <= 90) {
  nivel = "Diamante";
} else if (vitorias > 90 && vitorias <= 100) {
  nivel = "Lendário";
} else {
  nivel = "Imortal";

console.log(O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel});
}

calcularSaldoRankeadas(15, 5);
calcularSaldoRankeadas(25, 15);
calcularSaldoRankeadas(55, 30);
calcularSaldoRankeadas(85, 40);
calcularSaldoRankeadas(95, 50);
calcularSaldoRankeadas(105, 60);