const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {expect(somar(4, 6)).toBe(10)});
//Verifica se a função soma dois números positivos corretamente.

test("Soma dois números negativos corretamente", () => {expect(somar(-5, -5)).toBe(-10)});
//Testa a soma de dois números negativos, garantindo que a função lida corretamente com sinais.

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {expect(subtrair(10, 5)).toBe(5)});
//Verifica a subtração de um número maior por um menor, resultando em um número positivo.

test("Subtrai com resultado negativo", () => {expect(subtrair(5, 10)).toBe(-5)});
//Testa a subtração de um número menor por um maior, resultando em um número negativo.

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {expect(multiplicar(2, 3)).toBe(6)});
//Verifica a multiplicação de dois números positivos.

test("Multiplica número por zero", () => {expect(multiplicar(6, 0)).toBe(0)});
//Testa a multiplicação por zero, que sempre resulta em zero.

// Testes para a função dividir
test("Divide dois números corretamente", () => {expect(dividir(12, 2)).toBe(6)});
//Verifica a divisão de dois números, resultando em um número inteiro.

test("Lança erro ao dividir por zero", () => {expect(() => {
  dividir(5, 0);
}).toThrow();
});
//Verifica a divisão de dois números, resultando em um número inteiro.

// Testes para a função ehPar
test("Verifica se o número é par", () => {expect(ehPar(2)).toBe(true);
});
//Verifica se a função identifica corretamente um número par.

test("Verifica se o número é ímpar", () => {expect(ehPar(3)).toBe(false)});
//Verifica se a função identifica corretamente um número ímpar.