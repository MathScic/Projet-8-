import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    //si la plante existe, alors on créer un tableau sans elle (filter)
    if (currentPlantSaved) {
      const cartFiltreredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      //On place le tableau dasn updateCart
      updateCart([
        ...cartFiltreredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
      //Sinon on recup cart déja existant
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
