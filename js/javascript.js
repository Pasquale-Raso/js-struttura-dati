var card = {
  id: 1,
  name: "Bloodfire Colossus",
  launchCost: ["6", "R", "R"],
  costoManaCombinato: 8,
  cardType: "Creatura",
  subType: "Giant",
  expansion: {
    id: 9,
    name: "Espansione",
    rarity: "golden",
  },
  flavorTex: {
    quote: "We...",
    author: "Orso Bubu",
  },
  abilities: [
    {
      launchCost: ["R", "T"],
      description: "lorem...",
    },
    {
      launchCost: ["W", "B", "T"],
      description: "lorem...",
    },
  ],
  collettionNr: "12/43",
  constitution: 13,
  strength: 13,
  borderColor: "#000",
  illustrator: {
    author: {
      id: 1,
      name: "Greg Smith",
    },
    source: "../img/pic.jpg",
  },
  cardImage: "../img/pic.jpg",
};
console.table(card);
