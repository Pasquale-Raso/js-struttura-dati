const fullDeck = [
  {
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
      collettionNr: 12,
      totalCard: 43,
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
    constitution: 13,
    strength: 13,
    borderColor: "#000",
    illustrator: {
      author: {
        id: 1,
        name: "Greg Smith",
      },
      cardImage: "img/Image.jpg",
    },
  },

  // _____________________________________________________________

  {
    id: 2,
    name: "Krosan Cloudscraper",
    launchCost: ["7", "G", "G"],
    costoManaCombinato: 10,
    cardType: "Creatura",
    subType: "Beast Mutant",
    expansion: {
      id: 9,
      name: "Espansione",
      rarity: "Special",
      collettionNr: 13,
      totalCard: 13,
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
    constitution: 13,
    strength: 13,
    borderColor: "#000",
    illustrator: {
      author: {
        id: 2,
        name: "Ron Spears",
      },
      cardImage: "img/Image2.jpg",
    },
  },
  // _____________________________________________________________
  {
    id: 3,
    name: "Troll Ascetic",
    launchCost: ["1", "G", "G"],
    costoManaCombinato: 3,
    cardType: "Creatura",
    subType: "Troll Shaman",
    expansion: {
      id: 9,
      name: "Espansione",
      rarity: "rare",
      collettionNr: 3,
      totalCard: 2,
    },
    flavorTex: {
      quote: "We...",
      author: "Orso Bubu",
    },
    abilities: [],
    constitution: 13,
    strength: 13,
    borderColor: "#000",
    illustrator: {
      author: {
        id: 2,
        name: "Puddnhead",
      },
      cardImage: "img/Image3.jpg",
    },
  },
];

//!________________________STAMPA IN HTML(FUNCTION JS6)__________________________

const renderDeck = (deck) => {
  let deckTemplate = "";
  for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    deckTemplate += createCardTemplate(currentCard);
  }
  cardsSection.innerHTML = deckTemplate;
};
const cardsSection = document.getElementById("cards");
renderDeck(fullDeck);

//! ________________________TEMPLATE (FUNCTION JS3)__________________________

function createCardTemplate(card) {
  // ________________________PER ABILITA'___________________________________

  let abilitiesContent = "<em>Nessuna abilità</em>";
  if (card.abilities.length) {
    abilitiesContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++) {
      const currentAbility = card.abilities[i];
      abilitiesContent += `<li> Costo di lancio: ' ${absenceData(
        currentAbility.launchCost.join(", ")
      )}'</li>`;
      abilitiesContent += `<li> Descrizione: ' ${absenceData(
        currentAbility.description
      )}'</li>`;
    }
    abilitiesContent += "</ul>";
  }
  // _______________________________________________________________________

  let cardTemplate = `
  <div class="card">
      <ul>
        <li><strong>id:</strong>
            ${absenceData(card.id)}
        </li>
        <li><strong>Nome:</strong>
            ${absenceData(card.name)}
        </li>
        <li><strong>Costo di lancio:</strong>
            ${absenceData(card.launchCost.join(" - "))}
        </li>
        <li><strong>Costi mana combinato:</strong>
            ${absenceData(card.costoManaCombinato)}
        </li>
        <li><strong>Tipo di carta:</strong> 
            ${absenceData(card.cardType)} 
            - ${absenceData(card.subType)}
        </li>
        <li><strong>Espansione:</strong>
          <ul>
              <li><strong>Ristampa:</strong>
                ${absenceData(card.expansion.id)}
              </li>
              <li><strong>Nome:</strong>
                ${absenceData(card.expansion.name)}
              </li>
              <li><strong>Rarità:</strong>
                ${absenceData(card.expansion.rarity)}
              </li>
              <li><strong>Numero Collezione:</strong>
                ${absenceData(card.expansion.collettionNr)}
                /${absenceData(card.expansion.totalCard)}
              </li>
          </ul>
        </li>
        <li><strong>Testo di colore:</strong> 
            ${absenceData(card.flavorTex.quote)} 
            - ${absenceData(card.flavorTex.author)}
        </li>
        <li><strong>Abilità:</strong> 
            ${absenceData(abilitiesContent)} 
        </li>
        <li><strong>Costituzione</strong>
            ${absenceData(card.constitution)}
        </li>
        <li><strong>Forza</strong>
            ${absenceData(card.strength)}
        </li>
        <li><strong>Colore Bordo</strong>
            ${absenceData(card.borderColor)}
        </li>
        <li><strong>Illustrazione</strong>
            <ul>
            <li><strong>immagine : </strong>  <img class="img" src="${absenceData(
              card.illustrator.cardImage
            )}" /></li>
              <li><strong>Autore:</strong>
                ${absenceData(
                  card.illustrator.author.name
                )} - <strong>id:</strong> 
                  ${absenceData(card.illustrator.author.id)}
              </li>
          </ul>
        </li>
      </ul>
  </div>  
  `;

  // ________________________FUNZIONE ASSENZA DATO__________________________

  function absenceData(date) {
    if (date) {
      return date;
    } else {
      return " ";
    }
  }

  return cardTemplate;
}

//! ________________________filtri________________________
const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

// intercettare il cambiamento della tendina

selectField.addEventListener("change", () => {
  const currentValue = selectField.value;
  if (currentValue !== "all") {
    inputField.classList.remove("hidden");
  } else {
    inputField.classList.add("hidden");
  }
});

button.addEventListener("click", () => {
  const inputValue = inputField.value;
  const selectValue = selectField.value;

  if (selectValue === "all") {
    renderDeck(fullDeck, cardsSection);
    return;
  }

  const filteredDeck = [];
  for (let i = 0; i < fullDeck.length; i++) {
    const currentCard = fullDeck[i];
    if (currentCard[selectValue] == inputValue) {
      filteredDeck.push(currentCard);
    }
  }
  renderDeck(filteredDeck, cardsSection);
});
