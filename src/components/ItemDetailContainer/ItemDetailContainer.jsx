import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVehicleById } from '../../services/vehicleService'
import ItemDetail from '../ItemDetail/ItemDetail'
import { DotSpinner } from '@uiball/loaders'

const ItemDetailContainer = () => {
  const [vehicle, setVehicle] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    getVehicleById(itemId)
      .then(data => {
        setVehicle(data)
      })
      .catch(error => {
        console.error("Error fetching vehicle:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  if (loading) {
    return (
      <div className="loading-spinner">
        <DotSpinner size={40} speed={0.9} color="black" />
      </div>
    )
  }

  if (!vehicle) {
    return <div>No se encontró el vehículo</div>
  }

  return (
    <div className="item-detail-container">
      <ItemDetail vehicle={vehicle} />
    </div>
  )
}

export default ItemDetailContainer