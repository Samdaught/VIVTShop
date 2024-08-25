import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModalTest';
import { CartContext } from '../context/CartContext';
import '../css/test.css';

function TestPage({ showNotification }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const allProducts = [
    {
      id: 1,
      name: 'Футболка',
      category: 't-shirt',
      price: 900,
      image: 'https://vivt.ru/images/shop/photos/1696845460_Ew4018.jpg',
      description:
        'Любовь с первой носки. Базовая, стильная и удобная. Унисекс\nЦвет: чёрный\nМатериал: 100% хлопок\nРазмеры: S-XL',
      images: [
        'https://vivt.ru/images/shop/photos/1696845303_mbWqOj.jpg',
        'https://vivt.ru/images/shop/photos/1696845320_3agQHu.jpg',
        'https://vivt.ru/images/shop/photos/1696845346_Bjlxb8.jpg',
        'https://vivt.ru/images/shop/photos/1696845460_Ew4018.jpg',
      ],
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

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="test">
      <h1>Тест</h1>
      <div className="sorted-button">
        <button onClick={() => setFilteredCategory('all')}>Все</button>
        <button onClick={() => setFilteredCategory('t-shirt')}>Футболки</button>
        <button onClick={() => setFilteredCategory('hoodie')}>Толстовки</button>
        <button onClick={() => setFilteredCategory('jilet')}>Жилеты</button>
      </div>
      <div className="sorted-button">
        <button onClick={() => setSortOrder('asc')}>Сортировка: Цена (по возрастанию)</button>
        <button onClick={() => setSortOrder('desc')}>Сортировка: Цена (по убыванию)</button>
      </div>
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetails={handleShowDetails}
            showNotification={showNotification}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        addToCart={(product) => {
          addToCart(product);
          handleCloseModal();
          showNotification(`${product.name} добавлен в корзину`);
        }}
      />
    </div>
  );
}

export default TestPage;
