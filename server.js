const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const pokemon = {
  bulbasaur: {
    type: "Grass, Poison",
    evolution: {
      ivysaur: "At level 16",
      Venusaur: "At level 32",
    },
    "pokedex number": "#0001",
  },
  charmander: {
    type: "Fire",
    evolution: {
      charmeleon: "At level 16",
      charizard: "At level 36",
    },
    "pokedex number": "#0004",
  },
  squirtle: {
    type: "Water",
    evolution: {
      wartortle: "At level 16",
      blastoise: "At level 36",
    },
    "pokedex number": "#0007",
  },
  unknown: {
    type: "unknown",
    evolution: "unknown",
    "pokedex number": "#unknown",
  },
};

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:pokemon", (req, res) => {
  const pokemonName = req.params.pokemon.toLowerCase();
  if (pokemon[pokemonName]) {
    res.json(pokemon[pokemonName]);
  } else {
    res.json(pokemon["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running. Listening on port ${PORT}`);
});
