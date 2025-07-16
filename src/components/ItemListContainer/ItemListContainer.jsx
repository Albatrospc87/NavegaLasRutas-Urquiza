import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { DotLoader } from 'react-spinners';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Simulamos una llamada asíncrona a una API
    const fetchVehicles = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockVehicles = [
            { id: 1, title: 'Toyota Corolla', price: 25000, category: 'autos', pictureUrl: 'https://example.com/toyota.jpg' },
            { id: 2, title: 'Ford F-150', price: 35000, category: 'camionetas', pictureUrl: 'https://example.com/ford.jpg' },
            { id: 3, title: 'Honda Civic', price: 23000, category: 'autos', pictureUrl: 'https://example.com/honda.jpg' },
            { id: 4, title: 'Harley Davidson', price: 18000, category: 'motocicletas', pictureUrl: 'https://example.com/harley.jpg' },
            { id: 5, title: 'Chevrolet Silverado', price: 32000, category: 'camionetas', pictureUrl: 'https://example.com/chevrolet.jpg' },
            { id: 6, title: 'Yamaha R1', price: 15000, category: 'motocicletas', pictureUrl: 'https://example.com/yamaha.jpg' },
          ];
          
          resolve(mockVehicles);
        }, 1000);
      });
    };

    fetchVehicles().then(data => {
      if (categoryId) {
        const filteredVehicles = data.filter(vehicle => vehicle.category === categoryId);
        setVehicles(filteredVehicles);
      } else {
        setVehicles(data);
      }
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {greeting && <h2>{greeting}</h2>}
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      
      {loading ? (
        <div className="loader-container">
          <DotLoader color="#2c3e50" size={60} />
        </div>
      ) : (
        <ItemList vehicles={vehicles} />
      )}
    </div>
  );
};

export default ItemListContainer;