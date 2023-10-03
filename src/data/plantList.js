import monstera from "../components/assets/monstera.jpg";
import basil from "../components/assets/basil.jpg";
import cactus from "../components/assets/cactus.jpg";
import calathea from "../components/assets/calathea.jpg";
import lyrata from "../components/assets/lyrata.jpg";
import mint from "../components/assets/mint.jpg";
import olivier from "../components/assets/olivier.jpg";
import pothos from "../components/assets/pothos.jpg";
import succulent from "../components/assets/succulent.jpg";

export const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    isBestsale: true,
    isSpecialOffer: true,
    light: 4,
    water: 2,
    cover: monstera,
    price: 15,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    isBestsale: false,
    isSpecialOffer: false,
    light: 4,
    water: 4,
    cover: lyrata,
    price: 10,
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    isBestsale: true,
    isSpecialOffer: false,
    light: 1,
    water: 1,
    cover: pothos,
    price: 8,
  },
  {
    name: "calathea",
    category: "classique",
    id: "4kk",
    isBestsale: true,
    isSpecialOffer: false,
    light: 3,
    water: 3,
    cover: calathea,
    price: 9,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    isBestsale: false,
    isSpecialOffer: true,
    light: 1,
    water: 4,
    cover: olivier,
    price: 16,
  },
  {
    name: "cactus",
    category: "extérieur",
    id: "6uo",
    isBestsale: false,
    isSpecialOffer: false,
    light: 2,
    water: 2,
    cover: cactus,
    price: 10,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    isBestsale: true,
    isSpecialOffer: true,
    light: 4,
    water: 2,
    cover: basil,
    price: 12,
  },
  {
    name: "succulent",
    category: "plante grasse",
    id: "8fp",
    isBestsale: false,
    isSpecialOffer: false,
    light: 1,
    water: 3,
    cover: succulent,
    price: 13,
  },
  {
    name: "menthe",
    category: "plante grasse",
    id: "9vn",
    isBestsale: false,
    isSpecialOffer: true,
    light: 2,
    water: 4,
    cover: mint,
    price: 10,
  },
];
