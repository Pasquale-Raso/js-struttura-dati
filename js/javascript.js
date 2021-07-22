const card = {
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

// ________________________STAMPA IN HTML__________________________

const cardSection = document.getElementById("cards");

let cardTemplate = `
<ul class="card";
<li><strong>id:</strong> ${card.id}</li>
<li><strong>Nome:</strong> ${card.name}</li>
<li><strong>Costo di lancio:</strong> ${card.launchCost.join(" - ")}</li>
<li><strong>Costi mana combinato:</strong> ${card.costoManaCombinato}</li>
<li><strong>Tipo di carta:</strong> ${card.cardType} - ${card.subType}</li>
</ul>
`;

cardSection.innerHTML = cardTemplate;

let subType;
if (card.subType) {
  subType = card.subType;
} else {
  subType = " ";
}

// function absenceData(date) {
//   var date;
//   if (date) {
//     date;
//   } else {
//     date = " ";
//   }
//   return date;
// }
// var subType = absenceData(card.subType);
