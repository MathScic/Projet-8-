import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick(name)}>
      <span className="lmj-plat-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? très bon choix`);
}

export default PlantItem;
