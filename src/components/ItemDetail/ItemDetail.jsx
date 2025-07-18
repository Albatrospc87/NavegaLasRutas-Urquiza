import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ vehicle }) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    alert(`Agregaste ${quantity} ${vehicle.brand} ${vehicle.model} al carrito`)
  }

  return (
    <div className="vehicle-detail">
      <div className="detail-image">
        <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
      </div>
      <div className="detail-info">
        <h2>{vehicle.brand} {vehicle.model}</h2>
        <p className="detail-year">Año: {vehicle.year}</p>
        <p className="detail-price">Precio: ${vehicle.price.toLocaleString()}</p>
        <p className="detail-category">Categoría: {vehicle.category}</p>
        <p className="detail-description">{vehicle.description}</p>
        
        <ItemCount 
          stock={vehicle.stock} 
          initial={1} 
          onAdd={handleAddToCart} 
          setQuantity={setQuantity}
        />
      </div>
    </div>
  )
}

export default ItemDetail