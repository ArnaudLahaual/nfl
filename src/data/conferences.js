import afcLogo from "/assets/logos/AFC.png";
import nfcLogo from "/assets/logos/NFC.jpg";

export const conferences = [
  {
    id: 0,
    code: "AFC",
    name: "American Football Conference",
    creationYear: 1970,
    founder: "Lamar Hunt (fondateur de l’AFL)",
    logo: afcLogo,
    color: "#E41E26",
    description:
      "La American Football Conference (AFC) regroupe 16 équipes réparties en quatre divisions de quatre équipes. Cette organisation permet de structurer la saison régulière autour de rivalités régionales fortes et de classer les équipes de manière équitable au sein de la conférence.",
  },
  {
    id: 1,
    code: "NFC",
    name: "National Football Conference",
    creationYear: 1970,
    founder: "Héritière de l’ancienne NFL",
    logo: nfcLogo,
    color: "#002C66",
    description:
      "La National Football Conference (NFC) regroupe 16 équipes réparties en 4 divisions de 4 équipes. Cette organisation permet de structurer la saison et de créer des rivalités fortes entre équipes d’une même zone géographique.",
  },
];
