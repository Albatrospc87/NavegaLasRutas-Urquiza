import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ vehicles }) => {
  return (
    <div className="item-list">
      {vehicles.map(vehicle => (
        <div key={vehicle.id} className="vehicle-card">
          <img src={vehicle.pictureUrl} alt={vehicle.title} className="vehicle-image" />
          <h3>{vehicle.title}</h3>
          <p>Precio: ${vehicle.price}</p>
          <Link to={`/item/${vehicle.id}`} className="details-link">Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;