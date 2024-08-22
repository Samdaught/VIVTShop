import React from 'react';
import ProductCard from '../components/ProductCard'; // Импортируем компонент карточки

function HomePage({ showNotification }) {
  const popularProducts = [
    {
      id: 1,
      name: 'Футболка',
      price: 1500,
      image: 'https://vivt.ru/images/shop/photos/1612269247_RBHU8H.jpg',
    },
    {
      id: 2,
      name: 'Кружка',
      price: 700,
      image: 'https://vivt.ru/images/shop/photos/1689864367_GZY1vS.png',
    },
    {
      id: 3,
      name: 'Стикеры',
      price: 300,
      image: 'https://vivt.ru/images/shop/photos/1724163938_HU5B4n.jpg',
    },
  ];

  return (
    <div>
      <h2>Популярные товары</h2>
      <div className="products">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.name}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            showNotification={showNotification}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
