import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { CartContext } from '../context/CartContext';

function OfficePage({ showNotification }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const allProducts = [
    {
      id: 1,
      name: 'Ручка',
      category: 'pen',
      price: 60,
      image: 'https://vivt.ru/images/shop/photos/1659023087_UkuvB4.jpg',
      description:
        'Шариковая ручка металлик ВИВТ 3.0\nРучка из пластика с эффектом «металлик» с серебристым клипом.\nЦвет: фуксия\nМеханизм ручки: нажимной.\nСтержень с синими чернилами\nРазмер: 14,3х1,0 см\nВес: 10 г\nКорпус ручки разбирается, стержень легко заменить.',
      images: [
        'https://vivt.ru/images/shop/photos/1659023087_UkuvB4.jpg',
        'https://vivt.ru/images/shop/photos/1659022576_PojvlC.jpg',
      ],
    },
    {
      id: 2,
      name: 'Карандаш',
      category: 'pencil',
      price: 30,
      image: 'https://vivt.ru/images/shop/photos/1612258644_c-8klm.jpg',
      description:
        'Деревянный графитовый карандаш с фирменной гравировкой\nМатериал: дерево, графит',
      images: ['https://vivt.ru/images/shop/photos/1612258644_c-8klm.jpg'],
    },
    {
      id: 3,
      name: 'Стикер-пак ВИВТ',
      category: 'stickers',
      price: 30,
      image: 'https://vivt.ru/images/shop/photos/1724163938_HU5B4n.jpg',
      description:
        'Яркие наклейки помогут тебе обновить внешний вид блокнота, ноутбука телефона и даже велика.\nСтикер-пак виниловых наклеек\n4 вида, цена за 1 штуку',
      images: [
        'https://vivt.ru/images/shop/photos/1724163938_HU5B4n.jpg',
        'https://vivt.ru/images/shop/photos/1724163920_B4f2o0.jpg',
        'https://vivt.ru/images/shop/photos/1724163913_GAbkLZ.jpg',
        'https://vivt.ru/images/shop/photos/1724163903_URxhVj.jpg',
        'https://vivt.ru/images/shop/photos/1724163896_E9wJdh.jpg',
      ],
    },
    {
      id: 4,
      name: 'Календарь перекидной на 2024 год',
      category: 'calendar',
      price: 100,
      image: 'https://vivt.ru/images/shop/photos/1704986430_0ZTmZx.jpg',
      description:
        'Бумажный календарь перекидной на 2024 год\nКалендарь перекидной "Стань частью VIVTfamily" поможет не пропустить ни одной важной даты в 2024 году. А еще станет приятным подарком друзьям и родственникам!\nРазмер: 15*20 см',
      images: [
        'https://vivt.ru/images/shop/photos/1704986430_0ZTmZx.jpg',
        'https://vivt.ru/images/shop/photos/1704985813_ihRwUT.jpg',
      ],
    },
  ];

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

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
      <h1>Канцелярия</h1>
      <div className="sorted-button">
        <button onClick={() => setFilteredCategory('all')}>Все</button>
        <button onClick={() => setFilteredCategory('pen')}>Ручки</button>
        <button onClick={() => setFilteredCategory('pencil')}>Карандаши</button>
        <button onClick={() => setFilteredCategory('stickers')}>Стикеры</button>
        <button onClick={() => setFilteredCategory('calendar')}>Календари</button>
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

export default OfficePage;
