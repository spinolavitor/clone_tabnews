import bcryptjs from "bcryptjs";

async function hash(password){
  const rounds = getNumberOfRounds();
  return await bcryptjs.hash(password, rounds);
}

function getNumberOfRounds() {
  // Posso fazer essa função apenas assim:
  // Se for verdadeiro, retorna 14, se for falso, retorna 1
  // return process.env.NODE_ENV === "production" ? 14 : 1;
  // Ou posso fazer assim
  let rounds = 1;

  if (process.env.NODE_ENV === "production") {
    rounds = 14;
  }

  return rounds;
}

async function compare(providedPassword, storedPassword) {
  return await bcryptjs.compare(providedPassword, storedPassword)
}

const password = {
  hash,
  compare,
};

export default password;