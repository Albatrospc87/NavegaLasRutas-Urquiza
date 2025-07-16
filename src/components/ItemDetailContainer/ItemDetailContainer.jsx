import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { DotLoader } from 'react-spinners';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Simulamos una llamada asíncrona a una API
    const fetchVehicle = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockVehicles = [
            { 
              id: 1, 
              title: 'Toyota Corolla', 
              price: 25000, 
              category: 'autos', 
              pictureUrl: 'https://example.com/toyota.jpg',
              description: 'El Toyota Corolla es un sedán compacto confiable y eficiente en combustible.',
              features: ['Motor 1.8L', 'Transmisión automática', 'Asientos de cuero', 'Sistema de navegación']
            },
            // ... otros vehículos
          ];
          
          const foundVehicle = mockVehicles.find(v => v.id === parseInt(itemId));
          resolve(foundVehicle);
        }, 1000);
      });
    };

    fetchVehicle().then(data => {
      setVehicle(data);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader-container">
          <DotLoader color="#2c3e50" size={60} />
        </div>
      ) : (
        vehicle ? <ItemDetail vehicle={vehicle} /> : <p>Vehículo no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;