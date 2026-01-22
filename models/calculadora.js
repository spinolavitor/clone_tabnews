// Calculadora
function somar(argumento1, argumento2) {
  if (typeof argumento1 !== "number") {
    return "Erro";
  }
  return argumento1 + argumento2;
}

exports.somar = somar;
