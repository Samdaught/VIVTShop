import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { CartContext } from '../context/CartContext';
import blueCap from '../assets/images/products/cups/cup_blue.png';
import bracelet_front from '../assets/images/products/bracelets/bracelet_purple_front.png';
import bracelet_back from '../assets/images/products/bracelets/bracelet_purple_back.png';
import Photosets from '../components/Photosets';
import '../css/main-banner.css';

function HomePage({ showNotification }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const popularProducts = [
    {
      id: 1,
      name: 'Футболка',
      price: 800,
      image: 'https://vivt.ru/images/shop/photos/1612269247_RBHU8H.jpg',
      description: 'Качественная футболка из хлопка',
      images: [
        'https://vivt.ru/images/shop/photos/1612269247_RBHU8H.jpg',
        'https://vivt.ru/images/shop/photos/1612269247_RBHU8H_2.jpg',
      ],
    },
    {
      id: 2,
      name: 'Кружка',
      price: 700,
      image: 'https://vivt.ru/images/shop/photos/1689864367_GZY1vS.png',
      description: 'Керамическая кружка с логотипом',
      images: [
        'https://vivt.ru/images/shop/photos/1689864367_GZY1vS.png',
        'https://vivt.ru/images/shop/photos/1689864367_GZY1vS_2.jpg',
      ],
    },
    {
      id: 3,
      name: 'Стикеры',
      price: 30,
      image: 'https://vivt.ru/images/shop/photos/1724163938_HU5B4n.jpg',
      description: 'Набор стикеров с логотипом',
      images: [
        'https://vivt.ru/images/shop/photos/1724163938_HU5B4n.jpg',
        'https://vivt.ru/images/shop/photos/1724163938_HU5B4n_2.jpg',
      ],
    },
    {
      id: 4,
      name: 'Блокнот',
      price: 180,
      image: 'https://vivt.ru/images/shop/photos/1704979777_rCVo_K.jpg',
      description: 'Удобный блокнот для записей',
      images: [
        'https://vivt.ru/images/shop/photos/1704979777_rCVo_K.jpg',
        'https://vivt.ru/images/shop/photos/1704979777_rCVo_K_2.jpg',
      ],
    },
  ];

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="banner">
        <img className="blue-cup" src={blueCap} alt="Синяя кружка" />
        <img className="bracelet" src={bracelet_front} alt="Фиолетовый браслет" />
        <img
          className="banner-new-collection"
          src="https://vivt.ru/images/vivt-shop/slider/new-collection.jpg"
          alt="Баннер с новой коллекцией"
        />
        <img className="bracelet back" src={bracelet_back} alt="Фиолетовый браслет" />
      </div>
      <h2>Популярные товары</h2>
      <div className="products">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetails={handleShowDetails}
            showNotification={showNotification}
          />
        ))}
      </div>

      <Photosets />

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

export default HomePage;
