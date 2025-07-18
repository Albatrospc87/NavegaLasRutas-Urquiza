import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
      <div className="vehicle-info">
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p>Año: {vehicle.year}</p>
        <p className="price">${vehicle.price.toLocaleString()}</p>
        <Link to={`/item/${vehicle.id}`} className="details-link">Ver detalles</Link>
      </div>
    </div>
  )
}

export default Item