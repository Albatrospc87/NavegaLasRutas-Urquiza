import { Link } from 'react-router-dom'
import Item from './Item'
import './ItemList.css'

const ItemList = ({ vehicles, categories }) => {
  return (
    <div className="item-list">
      <div className="categories-nav">
        <h3>Filtrar por categoría:</h3>
        <div className="categories-links">
          <Link to="/" className="category-link">Todos</Link>
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className="category-link"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div className="vehicles-grid">
        {vehicles.map(vehicle => (
          <Item key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

export default ItemList