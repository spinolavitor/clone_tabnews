// test("nome do teste", callbackFunction);

// function callbackFunction() {
//   console.log("Esta função está sendo chamada?");
// }

// test("nome do teste", function () {
//   console.log("Esta função anônima continua funcionando?");
// });

test("Nome do teste", () => {
  console.log("Esta Arrow Function está funcionando?");
});

test("Testando novamente", () => {
  console.log("Testando novamente!");
});

test("Espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
// Esse é um exemplo de Hard Coding

const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  console.log(resultado);
  expect(resultado).toBe(105);
});

test("Somar 'Banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("Banana", 100);
  console.log(resultado);
  expect(resultado).toBe("Erro");
});
