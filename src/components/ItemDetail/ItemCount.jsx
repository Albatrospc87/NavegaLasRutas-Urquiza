import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd, setQuantity }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      const newCount = count + 1
      setCount(newCount)
      setQuantity(newCount)
    }
  }

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1
      setCount(newCount)
      setQuantity(newCount)
    }
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button 
        className="add-to-cart" 
        onClick={onAdd} 
        disabled={stock === 0}
      >
        {stock === 0 ? 'SIN STOCK' : 'AGREGAR AL CARRITO'}
      </button>
      <p className="stock-info">Disponibles: {stock}</p>
    </div>
  )
}

export default ItemCount