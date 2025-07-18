import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVehicles, getCategories } from '../../services/vehicleService'
import ItemList from '../ItemList/ItemList'
import { DotSpinner } from '@uiball/loaders'

const ItemListContainer = () => {
  const [vehicles, setVehicles] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const fetchData = async () => {
      try {
        const [vehiclesData, categoriesData] = await Promise.all([
          getVehicles(categoryId),
          getCategories()
        ])
        setVehicles(vehiclesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoryId])

  if (loading) {
    return (
      <div className="loading-spinner">
        <DotSpinner size={40} speed={0.9} color="black" />
      </div>
    )
  }

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos nuestros vehículos'}</h2>
      <ItemList vehicles={vehicles} categories={categories} />
    </div>
  )
}

export default ItemListContainer