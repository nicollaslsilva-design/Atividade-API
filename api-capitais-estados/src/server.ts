import express from "express";

const app = express();
const PORT = 3000;

// Permite que a API interprete corpos enviados em JSON, caso necessário.
app.use(express.json());

// Relação das unidades federativas brasileiras e suas capitais.
const capitais: Record<string, string> = {
  AC: "Rio Branco",
  AL: "Maceió",
  AP: "Macapá",
  AM: "Manaus",
  BA: "Salvador",
  CE: "Fortaleza",
  DF: "Brasília",
  ES: "Vitória",
  GO: "Goiânia",
  MA: "São Luís",
  MT: "Cuiabá",
  MS: "Campo Grande",
  MG: "Belo Horizonte",
  PA: "Belém",
  PB: "João Pessoa",
  PR: "Curitiba",
  PE: "Recife",
  PI: "Teresina",
  RJ: "Rio de Janeiro",
  RN: "Natal",
  RS: "Porto Alegre",
  RO: "Porto Velho",
  RR: "Boa Vista",
  SC: "Florianópolis",
  SP: "São Paulo",
  SE: "Aracaju",
  TO: "Palmas"
};

// Consulta uma unidade federativa pela sigla.
app.get("/estados/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const capital = capitais[sigla];

  if (!capital) {
    return res.status(404).json({
      erro: "Estado não encontrado",
      sigla: req.params.sigla
    });
  }

  return res.status(200).json({
    estado: sigla,
    capital
  });
});

app.listen(PORT, () => {
  console.log(`API de capitais rodando em http://localhost:${PORT}`);
});
