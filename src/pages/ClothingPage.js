import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function ClothingPage({ showNotification }) {
  const allProducts = [
    {
      id: 1,
      name: 'Футболка',
      category: 't-shirt',
      price: 1500,
      image: 'https://vivt.ru/images/shop/photos/1696845460_Ew4018.jpg',
    },
    {
      id: 2,
      name: 'Толстовка',
      category: 'hoodie',
      price: 3000,
      image: 'https://vivt.ru/images/shop/photos/1696846837_rATacR.jpg',
    },
    {
      id: 3,
      name: 'Жилет',
      category: 'jilet',
      price: 2500,
      image: 'https://vivt.ru/images/shop/photos/1696846529_RlAUMN.jpg',
    },
    {
      id: 4,
      name: 'Футболка с принтом',
      category: 't-shirt',
      price: 1800,
      image: 'https://vivt.ru/images/shop/photos/1612269293_XdWJZd.jpg',
    },
  ];

  const [filteredCategory, setFilteredCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts =
    filteredCategory === 'all'
      ? allProducts
      : allProducts.filter((product) => product.category === filteredCategory);

  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div>
      <h2>Одежда</h2>
      <div>
        <button onClick={() => setFilteredCategory('all')}>Все</button>
        <button onClick={() => setFilteredCategory('t-shirt')}>Футболки</button>
        <button onClick={() => setFilteredCategory('hoodie')}>Толстовки</button>
        <button onClick={() => setFilteredCategory('jilet')}>Жилеты</button>
      </div>
      <div>
        <button onClick={() => setSortOrder('asc')}>Сортировка: Цена (по возрастанию)</button>
        <button onClick={() => setSortOrder('desc')}>Сортировка: Цена (по убыванию)</button>
      </div>
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
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

export default ClothingPage;
